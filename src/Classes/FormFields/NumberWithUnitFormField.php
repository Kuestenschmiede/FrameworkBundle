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

use con4gis\FrameworkBundle\Classes\Utility\RegularExpression;

class NumberWithUnitFormField extends FormField
{
    protected $value = 0;
    protected $min = null;
    protected $max = null;
    protected $step = null;

    protected $options = [];
    protected $selected = '';
    protected $emptyOptionLabel = '-';
    protected $placeholder = '';

    const TYPE = 'number-unit';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['value'] = $this->value;
        $config['min'] = $this->min;
        $config['max'] = $this->max;
        $config['step'] = $this->step;
        $config['options'] = $this->options;
        $config['selected'] = $this->selected;
        $config['emptyOptionLabel'] = $this->emptyOptionLabel;
        $config['placeholder'] = $this->placeholder;

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

        $value = $parameters[$this->name];
        if ($value === '') {
            return !$this->required;
        }

        if (preg_match('/' . RegularExpression::DIGIT . '/i', $value)) {
            $value = intval($value);
            if ($this->min !== null && $value < $this->min) {
                return false;
            }
            if ($this->max !== null && $value > $this->max) {
                return false;
            }
            if ($this->step !== null && $value % $this->step !== 0) {
                return false;
            }
        } else {
            return false;
        }

        return true;
    }

    /**
     * @return int
     */
    public function getValue(): int
    {
        return $this->value;
    }

    /**
     * @param int $value
     * @return NumberWithUnitFormField
     */
    public function setValue(int $value): NumberWithUnitFormField
    {
        $this->value = $value;

        return $this;
    }

    /**
     * @return null
     */
    public function getMin()
    {
        return $this->min;
    }

    /**
     * @param int $min
     * @return NumberWithUnitFormField
     */
    public function setMin($min)
    {
        $this->min = $min;

        return $this;
    }

    /**
     * @return null
     */
    public function getMax()
    {
        return $this->max;
    }

    /**
     * @param int $max
     * @return NumberWithUnitFormField
     */
    public function setMax($max)
    {
        $this->max = $max;

        return $this;
    }

    /**
     * @return null
     */
    public function getStep()
    {
        return $this->step;
    }

    /**
     * @param null $step
     * @return NumberWithUnitFormField
     */
    public function setStep($step)
    {
        $this->step = $step;

        return $this;
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
     * @return NumberWithUnitFormField
     */
    public function setOptions(array $options): NumberWithUnitFormField
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
     * @return NumberWithUnitFormField
     */
    public function setSelected(string $selected): NumberWithUnitFormField
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
     * @return NumberWithUnitFormField
     */
    public function setEmptyOptionLabel(string $emptyOptionLabel): NumberWithUnitFormField
    {
        $this->emptyOptionLabel = $emptyOptionLabel;

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
     * @return NumberWithUnitFormField
     */
    public function setPlaceholder(string $placeholder): NumberWithUnitFormField
    {
        $this->placeholder = $placeholder;

        return $this;
    }
}
