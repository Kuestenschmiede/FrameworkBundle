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

class IconTileField extends TileField
{
    protected $conditional = false;

    const TYPE = 'icon';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['conditional'] = $this->conditional;

        return $config;
    }

    /**
     * @return bool
     */
    public function isConditional(): bool
    {
        return $this->conditional;
    }

    /**
     * @param bool $conditional
     * @return IconTileField
     */
    public function setConditional(bool $conditional = true): IconTileField
    {
        $this->conditional = $conditional;

        return $this;
    }
}
