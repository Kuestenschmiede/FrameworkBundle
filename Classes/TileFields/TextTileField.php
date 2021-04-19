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

class TextTileField extends TileField
{
    protected $itemProp = '';
    private $format = '';

    const TYPE = 'text';
    const SCHEMA_PROPERTY_NAME = 'https://schema.org/name';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['itemProp'] = $this->itemProp;
        $config['format'] = $this->format;

        return $config;
    }

    /**
     * @return string
     */
    public function getItemProp(): string
    {
        return $this->itemProp;
    }

    /**
     * @param string $itemProp
     * @return TextTileField
     */
    public function setItemProp(string $itemProp): TextTileField
    {
        $this->itemProp = $itemProp;

        return $this;
    }

    /**
     * @return string
     */
    public function getFormat(): string
    {
        return $this->format;
    }

    /**
     * @param string $format
     */
    public function setFormat(string $format): void
    {
        $this->format = $format;
    }
}
