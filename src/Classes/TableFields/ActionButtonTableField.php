<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

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
