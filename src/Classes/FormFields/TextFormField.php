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

class TextFormField extends FormField
{
    protected $pattern = null;
    protected $value = '';
    protected $placeholder = '';
    protected $maxLength = 255;

    /**
     * Load fieldlist from server when this field changes?
     * @var bool
     */
    protected $dynamicFieldlist = false;

    /**
     * URL for loading the fieldlist from server.
     * @var string
     */
    protected $dynamicFieldlistUrl = '';

    /**
     * Fields whose values should also be sent to the server for loading fields.
     * @var array
     */
    protected $dynamicFieldlistAdditionalFields = [];

    const TYPE = 'text';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['pattern'] = $this->pattern;
        $config['value'] = $this->value;
        $config['placeholder'] = $this->placeholder;
        $config['maxLength'] = $this->maxLength;
        $config['dynamicFieldlist'] = $this->dynamicFieldlist;
        $config['dynamicFieldlistUrl'] = $this->dynamicFieldlistUrl;
        $config['dynamicFieldlistAdditionalFields'] = $this->dynamicFieldlistAdditionalFields;

        return $config;
    }

    public function validate(array $parameters)
    {
        if ($this->conditionField !== []) {
            foreach ($this->conditionField as $key => $condition) {
                if ($parameters[$condition] !== $this->conditionValue[$key]) {
                    return true;
                }
            }
        }

        $value = (string) $parameters[$this->name];
        if ($value === '' && $this->required) {
            return false;
        } elseif (mb_strlen($value) > $this->maxLength) {
            return false;
        }

        return preg_match('/' . $this->pattern . '/i', $parameters[$this->name]) === 1;
    }

    /**
     * @return string
     */
    public function getPattern(): string
    {
        return $this->pattern;
    }

    /**
     * @param string $pattern
     * @return TextFormField
     */
    public function setPattern(string $pattern): TextFormField
    {
        $this->pattern = $pattern;

        return $this;
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
     * @return TextFormField
     */
    public function setValue(string $value): TextFormField
    {
        $this->value = $value;

        return $this;
    }

    /**
     * @return string
     */
    public function getPlaceholder(): string
    {
        return $this->placeholder;
    }

    /**
     * @param string $placeholder
     * @return TextFormField
     */
    public function setPlaceholder(string $placeholder): TextFormField
    {
        $this->placeholder = $placeholder;

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
     * @return TextFormField
     */
    public function setMaxLength(int $maxLength): TextFormField
    {
        $this->maxLength = $maxLength;

        return $this;
    }

    /**
     * @return bool
     */
    public function isDynamicFieldlist(): bool
    {
        return $this->dynamicFieldlist;
    }

    /**
     * @param bool $dynamicFieldlist
     */
    public function setDynamicFieldlist(bool $dynamicFieldlist): void
    {
        $this->dynamicFieldlist = $dynamicFieldlist;
    }

    /**
     * @return string
     */
    public function getDynamicFieldlistUrl(): string
    {
        return $this->dynamicFieldlistUrl;
    }

    /**
     * @param string $dynamicFieldlistUrl
     */
    public function setDynamicFieldlistUrl(string $dynamicFieldlistUrl): void
    {
        $this->dynamicFieldlistUrl = $dynamicFieldlistUrl;
    }

    /**
     * @return array
     */
    public function getDynamicFieldlistAdditionalFields(): array
    {
        return $this->dynamicFieldlistAdditionalFields;
    }

    /**
     * @param array $dynamicFieldlistAdditionalFields
     */
    public function setDynamicFieldlistAdditionalFields(array $dynamicFieldlistAdditionalFields): void
    {
        $this->dynamicFieldlistAdditionalFields = $dynamicFieldlistAdditionalFields;
    }
}
