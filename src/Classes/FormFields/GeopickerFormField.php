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
namespace con4gis\FrameworkBundle\Classes\FormFields;

class GeopickerFormField extends FormField
{
    // field names for the coordinates
    private $geoxName = '';
    private $geoyName = '';
    private $geoJsonName = '';
    private $mapData = null;

    const TYPE = 'geopicker';

    public function getConfiguration() : array
    {
        $conf = parent::getConfiguration();
        $conf['geoxName'] = $this->geoxName;
        $conf['geoyName'] = $this->geoyName;
        $conf['geoJsonName'] = $this->geoJsonName;
        $conf['mapData'] = $this->mapData;

        return $conf;
    }

    /**
     * @return string
     */
    public function getGeoxName(): string
    {
        return $this->geoxName;
    }

    /**
     * @param string $geoxName
     */
    public function setGeoxName(string $geoxName): void
    {
        $this->geoxName = $geoxName;
    }
    /**
     * @return string
     */
    public function getGeoJsonName(): string
    {
        return $this->geoJsonName;
    }
    /**
     * @param string $geoJsonName
     */
    public function setGeoJsonName(string $geoJsonName): void
    {
        $this->geoJsonName = $geoJsonName;
    }
    /**
     * @return string
     */
    public function getGeoyName(): string
    {
        return $this->geoyName;
    }

    /**
     * @param string $geoyName
     */
    public function setGeoyName(string $geoyName): void
    {
        $this->geoyName = $geoyName;
    }
    /**
     * @return array
     */
    public function getMapData(): string
    {
        return $this->mapData;
    }

    /**
     * @param array $mapData
     */
    public function setMapData(array $mapData): void
    {
        $this->mapData = $mapData;
    }
}
