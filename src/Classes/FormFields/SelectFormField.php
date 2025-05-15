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

class SelectFormField extends FormField
{
    protected $options = [];
    protected $selected = '';
    protected $emptyOptionLabel = '-';
    protected $multiple = false;
    protected $hidden = false;
    protected $placeholder = '';
    protected $synchronous = false;

    /**
     * If true, the options have groups and are sorted in these groups.
     * CAUTION: requires a different format for the options.
     * @var bool
     */
    protected $grouped = false;

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

    /**
     * Instantly redirects to this url when a new value has been selected.
     * Add {value} as placeholder for the selected value.
     * @var string
     */
    protected $instantRedirectUrl = '';

    const TYPE = 'select';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['options'] = $this->options;
        $config['selected'] = $this->selected;
        $config['emptyOptionLabel'] = $this->emptyOptionLabel;
        $config['multiple'] = $this->multiple;
        $config['hidden'] = $this->hidden;
        $config['placeholder'] = $this->placeholder;
        $config['synchronous'] = $this->synchronous;
        $config['grouped'] = $this->grouped;
        $config['dynamicFieldlist'] = $this->dynamicFieldlist;
        $config['dynamicFieldlistUrl'] = $this->dynamicFieldlistUrl;
        $config['dynamicFieldlistAdditionalFields'] = $this->dynamicFieldlistAdditionalFields;
        $config['instantRedirectUrl'] = $this->instantRedirectUrl;

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

        if (!$this->required && $parameters[$this->name] === '') {
            return true;
        }

        $options = array_column($this->options, 'value');
        if (is_array($parameters[$this->name]) && $this->multiple) {
            foreach ($parameters[$this->name] as $parameter) {
                if (!in_array($parameter, $options)) {
                    return false;
                }
            }

            return !$this->required || !empty($parameters[$this->name]);
        }

        return parent::validate($parameters);//&& in_array($parameters[$this->name], $options);

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
     * @return SelectFormField
     */
    public function setOptions(array $options): SelectFormField
    {
        $this->options = $options;

        return $this;
    }

    /**
     * @return string
     */
    public function getSelected(): string
    {
        return $this->selected;
    }

    /**
     * @param string $selected
     * @return SelectFormField
     */
    public function setSelected(string $selected): SelectFormField
    {
        $this->selected = $selected;

        return $this;
    }

    /**
     * @return string
     */
    public function getEmptyOptionLabel(): string
    {
        return $this->emptyOptionLabel;
    }

    /**
     * @param string $emptyOptionLabel
     * @return SelectFormField
     */
    public function setEmptyOptionLabel(string $emptyOptionLabel): SelectFormField
    {
        $this->emptyOptionLabel = $emptyOptionLabel;

        return $this;
    }

    /**
     * @return bool
     */
    public function isMultiple(): bool
    {
        return $this->multiple;
    }

    /**
     * @param bool $multiple
     * @return SelectFormField
     */
    public function setMultiple(bool $multiple = true): SelectFormField
    {
        $this->multiple = $multiple;

        return $this;
    }

    /**
     * @return bool
     */
    public function isHidden(): bool
    {
        return $this->hidden;
    }

    /**
     * @param bool $hidden
     * @return SelectFormField
     */
    public function setHidden(bool $hidden = true): SelectFormField
    {
        $this->hidden = $hidden;

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
     * @return SelectFormField
     */
    public function setPlaceholder(string $placeholder): SelectFormField
    {
        $this->placeholder = $placeholder;

        return $this;
    }

    /**
     * @return bool
     */
    public function isSynchronous(): bool
    {
        return $this->synchronous;
    }

    /**
     * @param bool $synchronous
     * @return SelectFormField
     */
    public function setSynchronous(bool $synchronous = true): SelectFormField
    {
        $this->synchronous = $synchronous;

        return $this;
    }

    /**
     * @return bool
     */
    public function isGrouped(): bool
    {
        return $this->grouped;
    }

    /**
     * @param bool $grouped
     * @return SelectFormField
     */
    public function setGrouped(bool $grouped = true): SelectFormField
    {
        $this->grouped = $grouped;

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
     * @return SelectFormField
     */
    public function setDynamicFieldlist(bool $dynamicFieldlist = true): SelectFormField
    {
        $this->dynamicFieldlist = $dynamicFieldlist;

        return $this;
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
     * @return SelectFormField
     */
    public function setDynamicFieldlistUrl(string $dynamicFieldlistUrl): SelectFormField
    {
        $this->dynamicFieldlistUrl = $dynamicFieldlistUrl;

        return $this;
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
     * @return SelectFormField
     */
    public function setDynamicFieldlistAdditionalFields(array $dynamicFieldlistAdditionalFields): SelectFormField
    {
        $this->dynamicFieldlistAdditionalFields = $dynamicFieldlistAdditionalFields;

        return $this;
    }

    /**
     * @return string
     */
    public function getInstantRedirectUrl(): string
    {
        return $this->instantRedirectUrl;
    }

    /**
     * @param string $instantRedirectUrl
     */
    public function setInstantRedirectUrl(string $instantRedirectUrl): void
    {
        $this->instantRedirectUrl = $instantRedirectUrl;
    }

}
