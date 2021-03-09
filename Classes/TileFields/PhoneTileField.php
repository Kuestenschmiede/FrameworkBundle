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

class PhoneTileField extends TileField
{
    protected $showSchema = false;

    const TYPE = 'phone';
    const DEFAULT_PHONE_ICON_CLASS = 'fas fa-phone';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['showSchema'] = $this->showSchema;

        return $config;
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
     * @return PhoneTileField
     */
    public function setShowSchema(bool $showSchema = true): PhoneTileField
    {
        $this->showSchema = $showSchema;

        return $this;
    }
}
