<?php

namespace con4gis\FrameworkBundle\Classes\Conditions;

use con4gis\FrameworkBundle\Classes\ConfigurationInterface;

class FieldValueCondition implements ConfigurationInterface
{
    private $field = '';
    private $value = '';

    public function getConfiguration(): array
    {
        return [
            'field' => $this->field,
            'value' => $this->value,
        ];
    }

    /**
     * @param string $field
     */
    public function setField(string $field): void
    {
        $this->field = $field;
    }

    /**
     * @param string $value
     */
    public function setValue(string $value): void
    {
        $this->value = $value;
    }
}
