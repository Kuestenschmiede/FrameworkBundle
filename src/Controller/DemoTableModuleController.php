<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Controller;

use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\FrameworkBundle\Classes\FrontendConfiguration;
use con4gis\FrameworkBundle\Classes\TableFields\TextTableField;
use con4gis\FrameworkBundle\Classes\Tables\Table;
use con4gis\FrameworkBundle\Classes\Tables\TableSelection;
use con4gis\UserBundle\Classes\Events\CheckMemberPermissionEvent;
use Contao\CoreBundle\Controller\FrontendModule\AbstractFrontendModuleController;
use Contao\Database;
use Contao\FrontendUser;
use Contao\ModuleModel;
use Contao\StringUtil;
use Contao\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DemoTableModuleController extends AbstractFrontendModuleController
{
    protected $table = null;
    protected $columns = [];
    protected $model = null;

    const AJAX_GET_ROUTE = '/con4gis/projects/demo_table_data/{moduleId}/{offset}';
    const TYPE = 'demo_table_module';
    
    // TODO controller action for the FE buttons to test the communication

    protected function getResponse(Template $template, ModuleModel $model, Request $request): Response
    {
        $table = strval($model->demo_table_module_source_table);
        $columns = StringUtil::deserialize($model->demo_table_module_source_fields);
        $this->model = $model;

        if ($this->isUserAuthorized() && $table !== '' && !empty($columns)) {
            $conf = new FrontendConfiguration();
            $conf->addTable($this->getTable(), $this->getColumnList(), $this->getDataFromDatabase($table, $columns));
            $conf->divId = "entrypoint";
            $template->configuration = \GuzzleHttp\json_encode($conf);
            
            if (intval($model->demo_module_load_step) > 0) {
                $template->ajaxGetRoute = str_replace('{moduleId}', $model->id, self::AJAX_GET_ROUTE);
            }
            return $template->getResponse();
        } else {
            return new Response();
        }
    }

    /**
     * @Route(
     *      path="/con4gis/projects/demo_table_data/{moduleId}/{offset}",
     *      name="projects_demo_table_data",
     *      methods={"GET"},
     *      requirements={"moduleId"="\d+", "offset"="\d+"}
     *  )
     * @param Request $request
     * @param $moduleId
     * @param $offset
     * @return JsonResponse
     */
    #[Route(
        path: '/con4gis/projects/demo_table_data/{moduleId}/{offset}',
        name: 'projects_demo_table_data',
        methods: ['GET'],
        requirements: ['moduleId' => '\d+', 'offset' => '\d+']
    )]
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
                if (C4GUtils::isFrontendUserLoggedIn()) {
                    $memberId = FrontendUser::getInstance()->id;
                    $event = new CheckMemberPermissionEvent();
                    $event->setMemberId($memberId);
                    $event->setPermission("");
                    $this->get('event_dispatcher')->dispatch($event);
                    return $event->isCheckSuccessful();
                }
                return false;
            default:
                return false;
        }
    }

    protected function getTable() :Table {
        $this->table = new Table();
        $this->table->setHeadline(StringUtil::deserialize($this->model->headline)['value']);
        $ts = new TableSelection();
        $ts->setCheckbox(true);
        $ts->addActionButton("Freigeben", "");
        $this->table->setTableSelection($ts);
        $this->table->setShowClientSearch();
        $this->table->setShowNumberOfRows();

        return $this->table;
    }

    protected function getColumnList() : array {
        $columns = StringUtil::deserialize($this->model->demo_table_module_source_fields);
        \Contao\System::loadLanguageFile($this->model->demo_table_module_source_table);
        foreach ($columns as $column) {
            $col = new TextTableField();
            $col->setName($column);
            if (strval($GLOBALS['TL_LANG'][$this->model->demo_table_module_source_table][$column][0]) !== '') {
                $col->setHeadline($GLOBALS['TL_LANG'][$this->model->demo_table_module_source_table][$column][0]);
            } else {
                $col->setHeadline($column);
            }
            
            $this->columns[] = $col;
        }

        return $this->columns;
    }

    protected function getDataFromDatabase(string $table, array $columns, int $offset = 0) {
        $database = Database::getInstance();
        $columns = implode(', ', $columns);
        if (intval($this->model->demo_module_load_step) > 0) {
            $limit = ' LIMIT '.strval($this->model->demo_module_load_step);
            if ($offset > 0) {
                $limit .= ' OFFSET '.$offset;
            }
        } else {
            $limit = '';
        }
        $stmt = $database->prepare("SELECT $columns FROM $table".$limit);
        return $stmt->execute()->fetchAllAssoc();
    }
}