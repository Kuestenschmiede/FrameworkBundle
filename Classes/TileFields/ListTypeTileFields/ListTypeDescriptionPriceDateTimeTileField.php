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
namespace con4gis\FrameworkBundle\Classes\TileFields\ListTypeTileFields;

class ListTypeDescriptionPriceDateTimeTileField extends ListTypeTileField
{
    protected $descriptionName = '';
    protected $priceName = '';
    protected $strikePriceName = '';
    protected $dateName = '';
    protected $timeName = '';

    const TYPE = 'description-price-date-time';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['descriptionName'] = $this->descriptionName;
        $config['priceName'] = $this->priceName;
        $config['strikePriceName'] = $this->strikePriceName;
        $config['dateName'] = $this->dateName;
        $config['timeName'] = $this->timeName;

        return $config;
    }

    /**
     * @return string
     */
    public function getDescriptionName(): string
    {
        return $this->descriptionName;
    }

    /**
     * @param string $descriptionName
     * @return ListTypeDescriptionPriceDateTimeTileField
     */
    public function setDescriptionName(string $descriptionName): ListTypeDescriptionPriceDateTimeTileField
    {
        $this->descriptionName = $descriptionName;

        return $this;
    }

    /**
     * @return string
     */
    public function getPriceName(): string
    {
        return $this->priceName;
    }

    /**
     * @param string $priceName
     * @return ListTypeDescriptionPriceDateTimeTileField
     */
    public function setPriceName(string $priceName): ListTypeDescriptionPriceDateTimeTileField
    {
        $this->priceName = $priceName;

        return $this;
    }

    /**
     * @return string
     */
    public function getStrikePriceName(): string
    {
        return $this->strikePriceName;
    }

    /**
     * @param string $strikePriceName
     * @return ListTypeDescriptionPriceDateTimeTileField
     */
    public function setStrikePriceName(string $strikePriceName): ListTypeDescriptionPriceDateTimeTileField
    {
        $this->strikePriceName = $strikePriceName;

        return $this;
    }

    /**
     * @return string
     */
    public function getDateName(): string
    {
        return $this->dateName;
    }

    /**
     * @param string $dateName
     * @return ListTypeDescriptionPriceDateTimeTileField
     */
    public function setDateName(string $dateName): ListTypeDescriptionPriceDateTimeTileField
    {
        $this->dateName = $dateName;

        return $this;
    }

    /**
     * @return string
     */
    public function getTimeName(): string
    {
        return $this->timeName;
    }

    /**
     * @param string $timeName
     * @return ListTypeDescriptionPriceDateTimeTileField
     */
    public function setTimeName(string $timeName): ListTypeDescriptionPriceDateTimeTileField
    {
        $this->timeName = $timeName;

        return $this;
    }
}
