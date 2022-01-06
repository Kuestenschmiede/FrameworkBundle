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

class CheckboxFormField extends FormField
{
    protected $checked = true;

    const TYPE = 'checkbox';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['checked'] = $this->checked;

        return $config;
    }

    public function validate(array $parameters)
    {
        return !$this->required || ($parameters[$this->name] === 'on');
    }

    /**
     * @return bool
     */
    public function isChecked(): bool
    {
        return $this->checked;
    }

    /**
     * @param bool $checked
     * @return CheckboxFormField
     */
    public function setChecked(bool $checked = true): CheckboxFormField
    {
        $this->checked = $checked;

        return $this;
    }
}
