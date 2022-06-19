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
namespace con4gis\FrameworkBundle\Classes\FormFields;

class TimepickerFormField extends DatepickerFormField
{
    protected $timeCaption = '';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['showTimeSelect'] = true;
        $config['showTimeSelectOnly'] = true;
        $config['timeCaption'] = $this->timeCaption;

        return $config;
    }

    /**
     * @return string
     */
    public function getTimeCaption(): string
    {
        return $this->timeCaption;
    }

    /**
     * @param string $timeCaption
     * @return TimepickerFormField
     */
    public function setTimeCaption(string $timeCaption): TimepickerFormField
    {
        $this->timeCaption = $timeCaption;

        return $this;
    }
}
