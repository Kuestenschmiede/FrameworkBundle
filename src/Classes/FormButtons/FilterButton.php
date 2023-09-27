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
namespace con4gis\FrameworkBundle\Classes\FormButtons;

class FilterButton extends FormButton
{
    protected $asyncUrl = '';
    protected $targetComponent = 'tiles';
    protected $outerClass = '';
    protected $filterButton = false;

    const TYPE = 'filter';

    public function getConfiguration()
    {
        $config = parent::getConfiguration();
        $config['asyncUrl'] = $this->asyncUrl;
        $config['targetComponent'] = $this->targetComponent;
        $config['outerClass'] = $this->outerClass;
        $config['resetFilter'] = $this->filterButton;
        $config['resetFilterCaption'] = $GLOBALS['TL_LANG']['con4gis']['framework']['frontend']['button']['filterReset'];

        return $config;
    }

    public function __construct()
    {
        \Contao\System::loadLanguageFile('frontend');
        $this->caption = $GLOBALS['TL_LANG']['con4gis']['framework']['frontend']['button']['filter'];
    }

    /**
     * @return string
     */
    public function getAsyncUrl(): string
    {
        return $this->asyncUrl;
    }

    /**
     * @param string $asyncUrl
     * @return FilterButton
     */
    public function setAsyncUrl(string $asyncUrl): FilterButton
    {
        $this->asyncUrl = $asyncUrl;

        return $this;
    }

    /**
     * @return string
     */
    public function getTargetComponent(): string
    {
        return $this->targetComponent;
    }

    /**
     * @param string $targetComponent
     * @return FilterButton
     */
    public function setTargetComponent(string $targetComponent): FilterButton
    {
        $this->targetComponent = $targetComponent;

        return $this;
    }

    /**
     * @return string
     */
    public function getOuterClass(): string
    {
        return $this->outerClass;
    }

    /**
     * @param string $outerClass
     */
    public function setOuterClass(string $outerClass): void
    {
        $this->outerClass = $outerClass;
    }

    public function isFilterButton(): bool
    {
        return $this->filterButton;
    }

    public function setFilterButton(bool $filterButton): void
    {
        $this->filterButton = $filterButton;
    }
}
