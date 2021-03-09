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

class PostalCityTileField extends TileField
{
    protected $postalName = 'addressZip';
    protected $cityName = 'addressCity';

    const TYPE = 'postalCity';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['postalName'] = $this->postalName;
        $config['cityName'] = $this->cityName;

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
     * @return PostalCityTileField
     */
    public function setPostalName(string $postalName): PostalCityTileField
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
     * @return PostalCityTileField
     */
    public function setCityName(string $cityName): PostalCityTileField
    {
        $this->cityName = $cityName;

        return $this;
    }
}
