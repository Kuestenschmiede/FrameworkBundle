<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

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
            'type' => 'or',
        ];
    }

    public function addConditions(ConfigurationInterface ...$conditions)
    {
        $this->conditions = $conditions;
    }
}
