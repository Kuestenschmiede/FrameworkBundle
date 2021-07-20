<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\DetailFields;

class DetailMapLocationField extends DetailField
{
    public const TYPE = 'map-location';

    private $geoxField = '';
    private $geoyField = '';

    private $asyncMapData = false;
    private $asyncMapDataUrl = ''; // path to route to load the mapData from

    public function getConfiguration()
    {
        $conf = parent::getConfiguration();
        $conf['geoxField'] = $this->geoxField;
        $conf['geoyField'] = $this->geoyField;
        $conf['asyncMapData'] = $this->asyncMapData;
        $conf['asyncMapDataUrl'] = $this->asyncMapDataUrl;

        return $conf;
    }

    /**
     * @return string
     */
    public function getGeoxField(): string
    {
        return $this->geoxField;
    }

    /**
     * @param string $geoxField
     */
    public function setGeoxField(string $geoxField): void
    {
        $this->geoxField = $geoxField;
    }

    /**
     * @return string
     */
    public function getGeoyField(): string
    {
        return $this->geoyField;
    }

    /**
     * @param string $geoyField
     */
    public function setGeoyField(string $geoyField): void
    {
        $this->geoyField = $geoyField;
    }

    /**
     * @return bool
     */
    public function isAsyncMapData(): bool
    {
        return $this->asyncMapData;
    }

    /**
     * @param bool $asyncMapData
     */
    public function setAsyncMapData(bool $asyncMapData): void
    {
        $this->asyncMapData = $asyncMapData;
    }

    /**
     * @return string
     */
    public function getAsyncMapDataUrl(): string
    {
        return $this->asyncMapDataUrl;
    }

    /**
     * @param string $asyncMapDataUrl
     */
    public function setAsyncMapDataUrl(string $asyncMapDataUrl): void
    {
        $this->asyncMapDataUrl = $asyncMapDataUrl;
    }
}
