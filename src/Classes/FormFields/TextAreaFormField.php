<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\FormFields;

class TextAreaFormField extends FormField
{
    protected $value = '';
    protected $maxLength = 255;

    const TYPE = 'textarea';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['value'] = $this->value;
        $config['maxLength'] = $this->maxLength;

        return $config;
    }

    public function validate(array $parameters)
    {
        $value = (string) $parameters[$this->name];
        if ($value === '') {
            return !$this->required;
        }

        return strlen($value) <= $this->maxLength;
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
     * @return TextAreaFormField
     */
    public function setValue(string $value): TextAreaFormField
    {
        $this->value = $value;

        return $this;
    }

    /**
     * @return int
     */
    public function getMaxLength(): int
    {
        return $this->maxLength;
    }

    /**
     * @param int $maxLength
     * @return TextAreaFormField
     */
    public function setMaxLength(int $maxLength): TextAreaFormField
    {
        $this->maxLength = $maxLength;

        return $this;
    }
}
