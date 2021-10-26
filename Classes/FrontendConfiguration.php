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
namespace con4gis\FrameworkBundle\Classes;

use con4gis\FrameworkBundle\Classes\DetailPage\DetailPage;
use con4gis\FrameworkBundle\Classes\FormButtons\FormButton;
use con4gis\FrameworkBundle\Classes\FormFields\FormField;
use con4gis\FrameworkBundle\Classes\Forms\FormInterface;
use con4gis\FrameworkBundle\Classes\TableFields\TableField;
use con4gis\FrameworkBundle\Classes\Tables\Table;
use con4gis\FrameworkBundle\Classes\TileLists\TileList;
use \JsonSerializable;

/**
 * Class FrontendConfiguration
 * Generates a configuration array like it's needed by the front end scripts.
 * @package con4gis\FrameworkBundle\Classes
 */
class FrontendConfiguration implements JsonSerializable
{
    protected $configuration;

    public function __construct(string $entryPoint = 'entrypoint')
    {
        $this->configuration['entryPoint'] = $entryPoint;
        $this->configuration['components'] = [];
        $this->configuration['language'] = 'de';
    }

    /**
     * Return data serializable with json_encode()
     * @return mixed
     */
    public function jsonSerialize()
    {
        return $this->configuration;
    }

    /**
     * @param string $headline
     * @return $this
     */
    public function setHeadline(string $headline)
    {
        $this->configuration['headline'] = $headline;

        return $this;
    }

    /**
     * @param TileList $list
     * @param array $tileFields
     * @param array $data
     */
    public function addTileList(TileList $list, array $tileFields, array $data)
    {
        $fields = [];
        foreach ($tileFields as $tileField) {
            $fields[] = $tileField->getConfiguration();
        }

        $configuration = [
            'data' => $data,
            'fields' => $fields,
            'headline' => $list->getHeadline(),
            'headlineLevel' => $list->getHeadlineLevel(),
            'type' => 'tile',
            'asyncUrl' => $list->getAsyncUrl(),
            'className' => $list->getClassName(),
            'tileClass' => $list->getTileClassName(),
            'conditionalClasses' => $list->getConditionalClasses(),
            'sorting' => count($list->getSelectedSortings()) > 0 ? $list->getSelectedSortings() : false,
            'updated' => $list->isUpdated(),
            'textBeforeUpdate' => $list->getTextBeforeUpdate(),
            'textAfterUpdate' => $list->getTextAfterUpdate(),
            'bottomLine' => $list->getBottomLine(),
            'filterData' => $list->getFilterData(),
            'loadingText' => $list->getLoadingText(),
            'layoutType' => $list->getLayoutType(),
            'loadStep' => $list->getLoadStep(),
            'scrollThreshold' => $list->getScrollThreshold(),
            'onlySearchWithParam' => $list->getOnlySearchWithParam(),
            'uniqueField' => $list->getUniqueField(),
            'setAsyncAfterFilter' => $list->isSetAsyncAfterFilter(),
            'checkAsyncWhileUpdate' => $list->isCheckAsyncWhileUpdate(),
            'conditionalTileClassName' => $list->getConditionalTileClassName(),
            'conditionalTileClassField' => $list->getConditionalTileClassField(),
            'conditionalTileClassValue' => $list->getConditionalTileClassValue(),
            'classAfterFilter' => $list->getClassAfterFilter(),
            'listWrapper' => $list->isListWrapper(),
            'wrapperId' => $list->getWrapperId(),
            'wrapperClass' => $list->getWrapperClass(),
            'showSpinner' => $list->isShowSpinner(),
            'withTextFilter' => $list->isWithTextFilter(),
            'textFilterFields' => $list->getTextFilterFields(),
        ];

        $this->configuration['components'][$list->getName()] = $configuration;
    }

    public function addTable(Table $table, array $tableFields, array $data)
    {
        $columnDefinitions = [];
        /** @var TableField $tableField */
        foreach ($tableFields as $tableField) {
            $columnDefinitions[] = $tableField->getConfiguration();
        }

        $rowData = $data;

        $configuration = [
            'data' => [
                'columns' => $columnDefinitions,
                'rows' => $rowData,
            ],
            'headline' => $table->getHeadline(),
            'type' => 'table',
            'striped' => $table->isStriped(),
            'hover' => $table->isHover(),
            'bordered' => $table->isBordered(),
            'confirmationHeadline' => $table->getConfirmationHeadline(),
            'confirmationMessage' => $table->getConfirmationMessage(),
            'confirmationYes' => $table->getConfirmationYes(),
            'confirmationNo' => $table->getConfirmationNo(),
            'loadDataAsync' => $table->isLoadDataAsync(),
            'asyncDataUrl' => $table->getAsyncDataUrl(),
        ];
        $tableSelection = $table->getTableSelection();
        if ($tableSelection !== null) {
            $configuration['checkbox'] = $tableSelection->isCheckbox();
            $configuration['multipleCheckboxes'] = $tableSelection->isMultipleCheckbox();
            $configuration['selectionButtons'] = $tableSelection->getSelectionButtons();
        }
        $tableButtons = $table->getTableButtons();
        if (count($tableButtons) > 0) {
            $configuration['tableButtons'] = $tableButtons;
        }
        $this->configuration['components'][$table->getName()] = $configuration;
    }

    public function addDetailPage(DetailPage $page, array $detailFields, array $data)
    {
        $fields = [];
        foreach ($detailFields as $detailField) {
            $fields[] = $detailField->getConfiguration();
        }

        $sectionConf = [];
        $idx = 1;
        foreach ($page->getSections() as $section) {
            $sectionConf[$idx] = $section->getConfiguration();
            $idx++;
        }

        $configuration = [
            'data' => $data,
            'fields' => $fields,
            'headline' => $page->getHeadline(),
            'type' => 'detail',
            'sections' => $sectionConf,
            'mapData' => $page->getMapData(),
            'showAnchorMenu' => $page->isShowAnchorMenu(),
            'menuSectionIndex' => $page->getMenuSectionIndex(),
            'additionalLinks' => $page->getAdditionalLinks(),
        ];

        $this->configuration['components'][$page->getName()] = $configuration;
    }

    public function addForm(FormInterface $form, array $fields, array $buttons, array $data = [])
    {
        $fieldConf = [];

        /** @var FormField $field */
        foreach ($fields as $field) {
            $fieldConf[] = $field->getConfiguration();
        }

        $buttonConf = [];

        /** @var FormButton $button */
        foreach ($buttons as $button) {
            $buttonConf[] = $button->getConfiguration();
        }
        $this->configuration['components'][$form->getName()] = array_merge(
            [
                'data' => $data,
                'fields' => $fieldConf,
                'buttons' => $buttonConf,
                'type' => 'form',
            ],
            $form->getConfiguration()
        );
        if ($form->getMapData()) {
            $this->configuration['components'][$form->getName()]['mapData'] = $form->getMapData();
        }
    }

    public function setLanguage($language)
    {
        $this->configuration['language'] = $language;
    }
}
