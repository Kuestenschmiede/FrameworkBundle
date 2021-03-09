<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\TileFields;

class StreetTileField extends TileField
{
    protected $streetName = 'addressStreet';
    protected $streetNumberName = 'addressStreetNumber';

    const TYPE = 'street';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['streetName'] = $this->streetName;
        $config['streetNumberName'] = $this->streetNumberName;

        return $config;
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
     * @return StreetTileField
     */
    public function setStreetName(string $streetName): StreetTileField
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
     * @return StreetTileField
     */
    public function setStreetNumberName(string $streetNumberName): StreetTileField
    {
        $this->streetNumberName = $streetNumberName;

        return $this;
    }
}
