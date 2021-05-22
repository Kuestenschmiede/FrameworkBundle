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
namespace con4gis\FrameworkBundle\Classes\TileFields;

class AddressTileField extends TileField
{
    protected $streetName = 'addressStreet';
    protected $streetNumberName = 'addressStreetNumber';
    protected $postalName = 'addressZip';
    protected $cityName = 'addressCity';
    protected $showSchema = false;

    const TYPE = 'address';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['streetName'] = $this->streetName;
        $config['streetNumberName'] = $this->streetNumberName;
        $config['postalName'] = $this->postalName;
        $config['cityName'] = $this->cityName;
        $config['showSchema'] = $this->showSchema;

        return $config;
    }

    /**
     * @return string
     */
    public function getPostalName(): string
    {
        return $this->postalName;
    }

    /**
     * @param string $postalName
     * @return AddressTileField
     */
    public function setPostalName(string $postalName): AddressTileField
    {
        $this->postalName = $postalName;

        return $this;
    }

    /**
     * @return string
     */
    public function getCityName(): string
    {
        return $this->cityName;
    }

    /**
     * @param string $cityName
     * @return AddressTileField
     */
    public function setCityName(string $cityName): AddressTileField
    {
        $this->cityName = $cityName;

        return $this;
    }

    /**
     * @return string
     */
    public function getStreetName(): string
    {
        return $this->streetName;
    }

    /**
     * @param string $streetName
     * @return AddressTileField
     */
    public function setStreetName(string $streetName): AddressTileField
    {
        $this->streetName = $streetName;

        return $this;
    }

    /**
     * @return string
     */
    public function getStreetNumberName(): string
    {
        return $this->streetNumberName;
    }

    /**
     * @param string $streetNumberName
     * @return AddressTileField
     */
    public function setStreetNumberName(string $streetNumberName): AddressTileField
    {
        $this->streetNumberName = $streetNumberName;

        return $this;
    }

    /**
     * @return bool
     */
    public function isShowSchema(): bool
    {
        return $this->showSchema;
    }

    /**
     * @param bool $showSchema
     * @return AddressTileField
     */
    public function setShowSchema(bool $showSchema = true): AddressTileField
    {
        $this->showSchema = $showSchema;

        return $this;
    }
}
