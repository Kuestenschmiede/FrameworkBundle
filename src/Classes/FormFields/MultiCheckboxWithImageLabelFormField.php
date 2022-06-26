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

class MultiCheckboxWithImageLabelFormField extends FormField
{
    protected $options = [];

    protected $optionClass = '';


    const TYPE = 'checkboximage';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['options'] = $this->options;
        $config['optionClass'] = $this->optionClass;

        return $config;
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
     */
    public function setOptions(array $options): void
    {
        $this->options = $options;
    }

    /**
     * @return string
     */
    public function getOptionClass(): string
    {
        return $this->optionClass;
    }

    /**
     * @param string $optionClass
     */
    public function setOptionClass(string $optionClass): void
    {
        $this->optionClass = $optionClass;
    }
}
