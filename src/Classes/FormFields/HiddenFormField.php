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
namespace con4gis\FrameworkBundle\Classes\FormFields;

class HiddenFormField extends FormField
{
    protected $value = '';
    protected $required = false;

    const TYPE = 'hidden';

    public function validate(array $parameters)
    {
        return $parameters[$this->name] !== null;
    }

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['value'] = $this->value;

        return $config;
    }

    /**
     * @return string
     */
    public function getValue(): string
    {
        return $this->value;
    }

    /**
     * @param string $value
     * @return HiddenFormField
     */
    public function setValue(string $value): HiddenFormField
    {
        $this->value = $value;

        return $this;
    }
}
