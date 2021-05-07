<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Controller;


use con4gis\FrameworkBundle\Classes\Columns\DatabaseColumn;
use con4gis\FrameworkBundle\Classes\FrontendConfiguration;
use con4gis\FrameworkBundle\Classes\Detail\DetailField;
use con4gis\FrameworkBundle\Classes\Detail\DetailTextField;
use con4gis\FrameworkBundle\Classes\Detail\DetailView;
use Contao\CoreBundle\Controller\FrontendModule\AbstractFrontendModuleController;
use Contao\Database;
use Contao\ModuleModel;
use Contao\StringUtil;
use Contao\System;
use Contao\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DemoDetailModuleController extends AbstractFrontendModuleController
{
    protected $table = null;
    protected $columns = [];
    protected $model = null;
    
    const AJAX_GET_ROUTE = '/con4gis/projects/demo_default_data/{moduleId}/{dataId}';
    const TYPE = 'demo_detail_module';
    
    protected function getResponse(Template $template, ModuleModel $model, Request $request): ?Response
    {
        $table = strval($model->demo_table_module_source_table);
        $columns = StringUtil::deserialize($model->demo_table_module_source_fields);
        $this->model = $model;
        $view = $this->getDetailView();
        $fields = $this->getFieldList();
        $data = $this->getDataFromDatabase($table, $columns);
        $frontend = new FrontendConfiguration();
        $frontend->addDetailView($view, $fields, $data);
        $template->configuration = json_encode($frontend);
        return $template->getResponse();
    }
    
    protected function getFieldList() : array {
        $columns = StringUtil::deserialize($this->model->demo_table_module_source_fields);
        \Contao\System::loadLanguageFile($this->model->demo_table_module_source_table);
        foreach ($columns as $column) {
            $col = new DetailTextField();
            $col->setName($column);
            if (strval($GLOBALS['TL_LANG'][$this->model->demo_table_module_source_table][$column][0]) !== '') {
                $col->setLabel($GLOBALS['TL_LANG'][$this->model->demo_table_module_source_table][$column][0]);
            } else {
                $col->setLabel($column);
            }
            $this->columns[] = $col;
        }
        
        return $this->columns;
    }
    
    protected function getDetailView() : DetailView
    {
        $view = new DetailView();
        $view->setHeadline((StringUtil::deserialize($this->model->headline)['value']));
        return $view;
    }
    
    protected function getDataFromDatabase(string $table, array $columns, int $offset = 0) {
        $database = Database::getInstance();
        $columns = implode(', ', $columns);
        $stmt = $database->prepare("SELECT $columns FROM $table WHERE id = 1");
        return $stmt->execute()->fetchAllAssoc();
    }
}