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

class NumberRangeFormField extends FormField
{
    private $value = '';
    private $min = 0;
    private $max = 255;
    private $step = 1;
    private $styleLeft = 16.75;
    private $format = '%s';

    const TYPE = 'number-range';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['value'] = $this->value;
        $config['min'] = $this->min;
        $config['max'] = $this->max;
        $config['step'] = $this->step;
        $config['styleLeft'] = $this->styleLeft;
        $config['format'] = $this->format;

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
            return false;
        } elseif ($value < $this->min || $value > $this->max) {
            return false;
        }

        return true;
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
     */
    public function setValue(string $value): void
    {
        $this->value = $value;
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
     */
    public function setMin(int $min): void
    {
        $this->min = $min;
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
     */
    public function setMax(int $max): void
    {
        $this->max = $max;
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
     */
    public function setStep(int $step): void
    {
        $this->step = $step;
    }

    /**
     * @return float
     */
    public function getStyleLeft(): float
    {
        return $this->styleLeft;
    }

    /**
     * @param float $styleLeft
     */
    public function setStyleLeft(float $styleLeft): void
    {
        $this->styleLeft = $styleLeft;
    }

    /**
     * @return string
     */
    public function getFormat(): string
    {
        return $this->format;
    }

    /**
     * @param string $format
     */
    public function setFormat(string $format): void
    {
        $this->format = $format;
    }
}
