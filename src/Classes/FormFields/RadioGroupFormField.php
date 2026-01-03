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

class RadioGroupFormField extends FormField
{
    protected $options = [];
    protected $checked = null;

    /**
     * The CSS class that is set at each option.
     * @var string
     */
    protected $optionsClass = '';

    protected $iconClass = '';

    const TYPE = 'radio';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['options'] = $this->options;
        $config['checked'] = $this->checked;
        $config['optionsClass'] = $this->optionsClass;
        $config['iconClass'] = $this->iconClass;

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
     * @return RadioGroupFormField
     */
    public function setOptions(array $options): RadioGroupFormField
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
     * @return RadioGroupFormField
     */
    public function setChecked(string $checked): RadioGroupFormField
    {
        $this->checked = $checked;

        return $this;
    }

    /**
     * @return string
     */
    public function getOptionsClass(): string
    {
        return $this->optionsClass;
    }

    /**
     * @param string $optionsClass
     */
    public function setOptionsClass(string $optionsClass): void
    {
        $this->optionsClass = $optionsClass;
    }

    /**
     * @return string
     */
    public function getIconClass(): string
    {
        return $this->iconClass;
    }

    /**
     * @param string $iconClass
     */
    public function setIconClass(string $iconClass): void
    {
        $this->iconClass = $iconClass;
    }

}
