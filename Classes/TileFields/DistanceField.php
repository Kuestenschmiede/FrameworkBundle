<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\TileFields;

class DistanceField extends TileField
{
    /**
     * Field name for the geox coordinate.
     * @var string
     */
    protected $geoxField = '';

    /**
     * Field name for the geoy coordinate.
     * @var string
     */
    protected $geoyField = '';

    public const TYPE = 'distance';

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['geox'] = $this->geoxField;
        $conf['geoy'] = $this->geoyField;

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
}
