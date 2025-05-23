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
namespace con4gis\FrameworkBundle\Classes\TileFields;

use con4gis\FrameworkBundle\Classes\Conditions\FieldValueCondition;
use con4gis\FrameworkBundle\Classes\ConfigurationInterface;

class AddressTileField extends TileField
{
    protected $streetName = 'addressStreet';
    protected $streetNumberName = 'addressStreetNumber';
    protected $postalName = 'addressZip';
    protected $cityName = 'addressCity';
    protected $showSchema = false;

    /**
     * Set additional classes depending on other field values. The format should be
     * 'fieldName' => 'class'
     * The check will be a boolean check, so if the value for 'fieldName' is true, the class will be added.
     * @var string
     */
    protected $conditionalClasses = [];

    /**
     * The fields this fields' display depends upon, if there is one.
     * @var array
     */
    protected $conditionField = [];

    /**
     * The value of the conditionFields for which this field is displayed.
     * @var array
     */
    protected $conditionValue = [];

    const TYPE = 'address';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['streetName'] = $this->streetName;
        $config['streetNumberName'] = $this->streetNumberName;
        $config['postalName'] = $this->postalName;
        $config['cityName'] = $this->cityName;
        $config['showSchema'] = $this->showSchema;

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

    /**
     * @return string
     */
    public function getPostalName(): string
    {
        return $this->postalName;
    }

    /**
     * @param string $postalName
     * @return AddressTileField
     */
    public function setPostalName(string $postalName): AddressTileField
    {
        $this->postalName = $postalName;

        return $this;
    }

    /**
     * @return string
     */
    public function getCityName(): string
    {
        return $this->cityName;
    }

    /**
     * @param string $cityName
     * @return AddressTileField
     */
    public function setCityName(string $cityName): AddressTileField
    {
        $this->cityName = $cityName;

        return $this;
    }

    /**
     * @return string
     */
    public function getStreetName(): string
    {
        return $this->streetName;
    }

    /**
     * @param string $streetName
     * @return AddressTileField
     */
    public function setStreetName(string $streetName): AddressTileField
    {
        $this->streetName = $streetName;

        return $this;
    }

    /**
     * @return string
     */
    public function getStreetNumberName(): string
    {
        return $this->streetNumberName;
    }

    /**
     * @param string $streetNumberName
     * @return AddressTileField
     */
    public function setStreetNumberName(string $streetNumberName): AddressTileField
    {
        $this->streetNumberName = $streetNumberName;

        return $this;
    }

    /**
     * @return bool
     */
    public function isShowSchema(): bool
    {
        return $this->showSchema;
    }

    /**
     * @param bool $showSchema
     * @return AddressTileField
     */
    public function setShowSchema(bool $showSchema = true): AddressTileField
    {
        $this->showSchema = $showSchema;

        return $this;
    }

    /**
     * @return array|string
     */
    public function getConditionalClasses(): array|string
    {
        return $this->conditionalClasses;
    }

    /**
     * @param array|string $conditionalClasses
     */
    public function setConditionalClasses(array|string $conditionalClasses): void
    {
        $this->conditionalClasses = $conditionalClasses;
    }

    /**
     * @return array
     */
    public function getConditionField(): array
    {
        return $this->conditionField;
    }

    /**
     * @param array $conditionField
     */
    public function setConditionField(array $conditionField): void
    {
        $this->conditionField = $conditionField;
    }

    /**
     * @return array
     */
    public function getConditionValue(): array
    {
        return $this->conditionValue;
    }

    /**
     * @param array $conditionValue
     */
    public function setConditionValue(array $conditionValue): void
    {
        $this->conditionValue = $conditionValue;
    }

    public function addCondition(ConfigurationInterface $condition)
    {
        $this->conditions[] = $condition;
    }
}
