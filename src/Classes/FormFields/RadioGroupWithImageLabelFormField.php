<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\FormFields;

class RadioGroupWithImageLabelFormField extends FormField
{
    protected $options = [];
    protected $checked = null;

    const TYPE = 'radioImage';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['options'] = $this->options;
        $config['checked'] = $this->checked;

        return $config;
    }

    public function validate(array $parameters)
    {
        $value = $parameters[$this->name];
        if ($value === '') {
            return false;
        } elseif ($value === null) {
            return !$this->required;
        }

        return $this->options[$value] !== '';
    }

    /**
     * @return array
     */
    public function getOptions(): array
    {
        return $this->options;
    }

    /**
     * @param array $options
     * @return RadioGroupWithImageLabelFormField
     */
    public function setOptions(array $options): RadioGroupWithImageLabelFormField
    {
        $this->options = $options;

        return $this;
    }

    /**
     * @return string
     */
    public function getChecked(): string
    {
        return $this->checked;
    }

    /**
     * @param string $checked
     * @return RadioGroupWithImageLabelFormField
     */
    public function setChecked(string $checked): RadioGroupWithImageLabelFormField
    {
        $this->checked = $checked;

        return $this;
    }
}
