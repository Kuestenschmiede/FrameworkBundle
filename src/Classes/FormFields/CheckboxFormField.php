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

use con4gis\FrameworkBundle\Classes\Conditions\FieldValueCondition;
use con4gis\FrameworkBundle\Classes\ConfigurationInterface;

class CheckboxFormField extends FormField
{
    protected $checked = true;

    private array $conditions = [];

    const TYPE = 'checkbox';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['checked'] = $this->checked;

        if (!empty($this->conditionField && count($this->conditionField) === count($this->conditionValue))) {
            foreach ($this->conditionField as $key => $field) {
                $this->addCondition(new FieldValueCondition($this->conditionField[$key], $this->conditionValue[$key]));
            }
        }

        if (!empty($this->conditions)) {
            $conditions = [];
            foreach ($this->conditions as $condition) {
                $conditions[] = $condition->getConfiguration();
            }
            $config['conditions'] = $conditions;
        }

        return $config;
    }

    public function validate(array $parameters)
    {
        return !$this->required || ($parameters[$this->name] === 'on');
    }

    /**
     * @return bool
     */
    public function isChecked(): bool
    {
        return $this->checked;
    }

    /**
     * @param bool $checked
     * @return CheckboxFormField
     */
    public function setChecked(bool $checked = true): CheckboxFormField
    {
        $this->checked = $checked;

        return $this;
    }

    public function addCondition(ConfigurationInterface $condition)
    {
        $this->conditions[] = $condition;
    }
}
