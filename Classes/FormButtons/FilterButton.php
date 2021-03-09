<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\FormButtons;

class FilterButton extends FormButton
{
    protected $asyncUrl = '';
    protected $targetComponent = 'tiles';
    protected $outerClass = '';

    const TYPE = 'filter';

    public function getConfiguration()
    {
        $config = parent::getConfiguration();
        $config['asyncUrl'] = $this->asyncUrl;
        $config['targetComponent'] = $this->targetComponent;
        $config['outerClass'] = $this->outerClass;

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
}
