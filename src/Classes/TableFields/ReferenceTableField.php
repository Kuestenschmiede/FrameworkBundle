<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\TableFields;

class ReferenceTableField extends TableField
{
    private $references;

    const TYPE = 'reference';

    public function getConfiguration(): array
    {
        $config = parent::getConfiguration();
        $config['references'] = $this->references;

        return $config;
    }

    public function addReference(string $key, string $value)
    {
        $this->references[$key] = $value;
    }
}
