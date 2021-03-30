<?php

namespace con4gis\FrameworkBundle\Classes\TableFields;

use con4gis\FrameworkBundle\Classes\ConfigurationInterface;

class ActionButtonTableField extends TableField
{
    private $actions = [];

    const TYPE = 'action-button';

    public function getConfiguration(): array
    {
        $config = parent::getConfiguration();
        $config['actions'] = $this->actions;

        return $config;
    }

    public function addAction(ConfigurationInterface $action, ConfigurationInterface ...$conditions)
    {
        $action = $action->getConfiguration();

        foreach ($conditions as $condition) {
            $action['conditions'][] = $condition->getConfiguration();
        }

        $this->actions[] = $action;
    }
}
