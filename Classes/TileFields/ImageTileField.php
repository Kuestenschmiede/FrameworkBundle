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

class ImageTileField extends TileField
{
    protected $altName = '';
    protected $imageSource = '';
    protected $imageAlt = '';

    const TYPE = 'image';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['altName'] = $this->altName;
        $config['imageSource'] = $this->imageSource;
        $config['imageAlt'] = $this->imageAlt;

        return $config;
    }

    /**
     * @return string
     */
    public function getAltName(): string
    {
        return $this->altName;
    }

    /**
     * @param string $altName
     * @return ImageTileField
     */
    public function setAltName(string $altName): ImageTileField
    {
        $this->altName = $altName;

        return $this;
    }

    /**
     * @return string
     */
    public function getImageSource(): string
    {
        return $this->imageSource;
    }

    /**
     * @param string $imageSource
     * @return ImageTileField
     */
    public function setImageSource(string $imageSource): ImageTileField
    {
        $this->imageSource = $imageSource;

        return $this;
    }

    /**
     * @return string
     */
    public function getImageAlt(): string
    {
        return $this->imageAlt;
    }

    /**
     * @param string $imageAlt
     * @return ImageTileField
     */
    public function setImageAlt(string $imageAlt): ImageTileField
    {
        $this->imageAlt = $imageAlt;

        return $this;
    }
}
