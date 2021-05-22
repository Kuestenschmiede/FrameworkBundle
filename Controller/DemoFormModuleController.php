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

use con4gis\MapsBundle\Classes\MapDataConfigurator;
use con4gis\FrameworkBundle\Classes\FormButtons\SubmitButton;
use con4gis\FrameworkBundle\Classes\FormFields\GeopickerFormField;
use con4gis\FrameworkBundle\Classes\FrontendConfiguration;
use con4gis\FrameworkBundle\Classes\FormFields\SelectFormField;
use con4gis\FrameworkBundle\Classes\FormFields\TextFormField;
use con4gis\FrameworkBundle\Classes\Forms\Form;
use Contao\ContentModel;
use Contao\CoreBundle\Controller\FrontendModule\AbstractFrontendModuleController;
use Contao\CoreBundle\ServiceAnnotation\FrontendModule;
use Contao\Database;
use Contao\ModuleModel;
use Contao\StringUtil;
use Contao\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DemoFormModuleController extends AbstractFrontendModuleController
{
    protected $form = null;
    protected $fields = [];
    protected $model = null;

    const TYPE = 'demo_form_module';

    protected function getResponse(Template $template, ModuleModel $model, Request $request): ?Response
    {
        $this->model = $model;

        $form = $this->getForm();
        $fields = $this->getFields();

        $frontend = new FrontendConfiguration();
        $frontend->setHeadline(StringUtil::deserialize($model->headline)['value']);
        $button = new SubmitButton();
        $frontend->addForm($form, $fields, [$button]);
        $template->configuration = json_encode($frontend);
        return $template->getResponse();
    }

    protected function getForm() : Form {
        $this->form = new Form();
        $this->form->setHeadline(StringUtil::deserialize($this->model->headline)['value']);
        $mapData = $this->createMapDataWithGeopicker();
        $this->form->setMapData($mapData);
        return $this->form;
    }
    
    private function createMapDataWithGeopicker()
    {
        $data = MapDataConfigurator::prepareMapData(
            ContentModel::findById(1),
            Database::getInstance(),
            ['type' => "geopicker", "profile" => 2]
        );
        $data['width'] = "500px";
        $data['height'] = "500px";
        $data['geopicker']['input_geo_x'] = "#geox";
        $data['geopicker']['input_geo_y'] = "#geoy";
        return $data;
    }

    protected function getFields() : array {
        $field = new TextFormField();
        $field->setName('name')
            ->setLabel('Name')
            ->setDescription('Dein Name.')
            ->setRequired(true);
        $this->fields[] = $field;

        $field = new TextFormField();
        $field->setName('vorname')
            ->setLabel('Vorname')
            ->setDescription('Dein Vorname.')
            ->setRequired(false);
        $this->fields[] = $field;

        $field = new TextFormField();
        $field->setName('keks')
            ->setLabel('Keks')
            ->setDescription('Der Keks.')
            ->setRequired(false);
        $this->fields[] = $field;

        $field = new SelectFormField();
        $field->setName('zahl')
            ->setLabel('Zahl')
            ->setDescription('Eine Zahl.')
            ->setRequired(false)
            ->setOptions(
                [
                    'one' => 'Eins',
                    'two' => 'Zwei',
                    'three' => 'Drei',
                    'four' => 'Vier'
                ]
            );
        
        $field = new GeopickerFormField();
        $field->setName("geopicker");
        $field->setLabel('Lokation');
        $field->setDescription("Hier kann ein Standort angegeben werden.");
        $field->setGeoxName("geox");
        $field->setGeoyName("geoy");
        $this->fields[] = $field;

        return $this->fields;
    }
}