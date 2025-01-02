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
namespace con4gis\FrameworkBundle\Classes\TileFields\ListTypeTileFields;

class ListTypeLinkTileField extends ListTypeTileField
{
    protected $hrefName = '';

    const TYPE = 'link';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['hrefName'] = $this->hrefName;

        return $config;
    }

    /**
     * @return string
     */
    public function getHrefName(): string
    {
        return $this->hrefName;
    }

    /**
     * @param string $hrefName
     * @return ListTypeLinkTileField
     */
    public function setHrefName(string $hrefName): ListTypeLinkTileField
    {
        $this->hrefName = $hrefName;

        return $this;
    }
}
