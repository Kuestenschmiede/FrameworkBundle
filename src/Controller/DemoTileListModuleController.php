<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Controller;

use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\FrameworkBundle\Classes\FrontendConfiguration;
use con4gis\FrameworkBundle\Classes\TileFields\TextTileField;
use con4gis\FrameworkBundle\Classes\TileLists\TileList;
use Contao\CoreBundle\Controller\FrontendModule\AbstractFrontendModuleController;
use Contao\Database;
use Contao\ModuleModel;
use Contao\StringUtil;
use Contao\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DemoTileListModuleController extends AbstractFrontendModuleController
{
    protected $tileList = null;
    protected $tileItems = [];
    protected $model = null;

    const AJAX_GET_ROUTE = '/con4gis/projects/demo_tile_list_data/{moduleId}/{offset}';
    const TYPE = 'demo_tile_list_module';

    protected function getResponse(Template $template, ModuleModel $model, Request $request): Response
    {
        $table = strval($model->demo_table_module_source_table);
        $columns = StringUtil::deserialize($model->demo_table_module_source_fields);
        $this->model = $model;

        if ($this->isUserAuthorized() && $table !== '' && !empty($columns)) {
            $frontend = new FrontendConfiguration();
            $frontend->addTileList(
                $this->getTileList(),
                $this->getTileItems(),
                $this->getDataFromDatabase($table, $columns)
            );
            $template->configuration = json_encode($frontend);
            
            return $template->getResponse();
        } else {
            return new Response();
        }
    }

    /**
     * @Route("/con4gis/projects/demo_tile_list_data/{moduleId}/{offset}", name="projects_demo_tile_list_data", methods={"GET"}, requirements={"moduleId"="\d+", "offset"="\d+"})
     * @param Request $request
     * @param $moduleId
     * @param $offset
     * @return JsonResponse
     */
    public function getDataAction(Request $request, int $moduleId, int $offset) {
        $this->get('contao.framework')->initialize();
        $this->model = ModuleModel::findByPk($moduleId);
        if ($this->model !== null && $this->model->type === self::TYPE) {
            if ($this->isUserAuthorized()) {
                $table = strval($this->model->demo_table_module_source_table);
                $columns = StringUtil::deserialize($this->model->demo_table_module_source_fields);
                $response = new JsonResponse($this->getDataFromDatabase($table, $columns, $offset));
            } else {
                $response = new JsonResponse();
                $response->setStatusCode(Response::HTTP_FORBIDDEN);
            }
        } else {
            $response = new JsonResponse();
            $response->setStatusCode(Response::HTTP_NOT_FOUND);
        }

        return $response;
    }

    protected function isUserAuthorized() : bool {
        switch (strval($this->model->demo_module_authorization)) {
            case '':
            case 'none':
                return true;
            case 'member':
                return C4GUtils::isFrontendUserLoggedIn();
            default:
                return false;
        }
    }

    protected function getTileList() :TileList {
        $this->tileList = new TileList();
        $this->tileList->setHeadline(StringUtil::deserialize($this->model->headline)['value']);
        $this->tileList->setAsyncUrl(str_replace('{moduleId}', $this->model->id, self::AJAX_GET_ROUTE));

        return $this->tileList;
    }

    protected function getTileItems() : array {
        $columns = StringUtil::deserialize($this->model->demo_table_module_source_fields);
        \Contao\System::loadLanguageFile($this->model->demo_table_module_source_table);
        foreach ($columns as $column) {
            $item = new TextTileField();
            $item->setName($column);
            if (strval($GLOBALS['TL_LANG'][$this->model->demo_table_module_source_table][$column][0]) !== '') {
                $item->setLabel($GLOBALS['TL_LANG'][$this->model->demo_table_module_source_table][$column][0]);
            } else {
                $item->setLabel('');
            }
            $this->tileItems[] = $item;
        }

        return $this->tileItems;
    }

    protected function getDataFromDatabase(string $table, array $columns, int $offset = 0) {
        $database = Database::getInstance();
        $columns = implode(', ', $columns);
        if (intval($this->model->demo_module_load_step) > 0) {
            $limit = ' LIMIT '.strval($this->model->demo_module_load_step);
            if ($offset > 0) {
                $limit .= ' OFFSET '.$offset;
            }
        } elseif ($offset > 0) {
            return [];
        } else {
            $limit = '';
        }
        $stmt = $database->prepare("SELECT $columns FROM $table".$limit);
        return $stmt->execute()->fetchAllAssoc();
    }
}