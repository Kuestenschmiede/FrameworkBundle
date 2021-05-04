<?php

namespace con4gis\FrameworkBundle\Classes\Conditions;

use con4gis\FrameworkBundle\Classes\ConfigurationInterface;

class OrCondition implements ConfigurationInterface
{
    private $conditions = [];

    public function getConfiguration(): array
    {
        $config = [];
        foreach ($this->conditions as $condition) {
            $config[] = $condition->getConfiguration();
        }
        return [
            'conditions' => $config,
            'type' => 'or'
        ];
    }

    public function addConditions(ConfigurationInterface ...$conditions)
    {
        $this->conditions = $conditions;
    }
}
