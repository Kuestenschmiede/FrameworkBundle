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

class FieldNotValueCondition implements ConfigurationInterface
{
    private $field;
    private $value;

    public function __construct(string $field = '', string $value = '')
    {
        $this->field = $field;
        $this->value = $value;
    }

    public function getConfiguration(): array
    {
        return [
            'field' => $this->field,
            'value' => $this->value,
            'not' => true,
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
