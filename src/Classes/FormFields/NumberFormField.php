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

class NumberFormField extends FormField
{
    protected $value = 0;
    protected $min = null;
    protected $max = null;
    protected $step = null;

    const TYPE = 'number';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['value'] = $this->value;
        $config['min'] = $this->min;
        $config['max'] = $this->max;
        $config['step'] = $this->step;

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
     * @return NumberFormField
     */
    public function setValue(int $value): NumberFormField
    {
        $this->value = $value;

        return $this;
    }

    /**
     * @return int
     */
    public function getMin(): int
    {
        return $this->min;
    }

    /**
     * @param int $min
     * @return NumberFormField
     */
    public function setMin(int $min): NumberFormField
    {
        $this->min = $min;

        return $this;
    }

    /**
     * @return int
     */
    public function getMax(): int
    {
        return $this->max;
    }

    /**
     * @param int $max
     * @return NumberFormField
     */
    public function setMax(int $max): NumberFormField
    {
        $this->max = $max;

        return $this;
    }

    /**
     * @return int
     */
    public function getStep(): int
    {
        return $this->step;
    }

    /**
     * @param int $step
     * @return NumberFormField
     */
    public function setStep(int $step): NumberFormField
    {
        $this->step = $step;

        return $this;
    }
}
