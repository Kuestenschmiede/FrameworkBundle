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

class SetDataButton extends FormButton
{
    protected $asyncUrl = '';
    protected $targetComponent = 'tiles';

    const TYPE = 'setData';

    public function getConfiguration()
    {
        $config = parent::getConfiguration();
        $config['asyncUrl'] = $this->asyncUrl;
        $config['targetComponent'] = $this->targetComponent;

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
    public function setAsyncUrl(string $asyncUrl): SetDataButton
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
    public function setTargetComponent(string $targetComponent): SetDataButton
    {
        $this->targetComponent = $targetComponent;

        return $this;
    }
}
