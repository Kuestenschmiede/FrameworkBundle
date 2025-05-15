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
namespace con4gis\FrameworkBundle\Classes\TileFields;

class EmailTileField extends TileField
{
    protected $showSchema = false;

    const TYPE = 'email';
    const DEFAULT_EMAIL_ICON_CLASS = 'fas fa-envelope';

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
     * @return EmailTileField
     */
    public function setShowSchema(bool $showSchema = true): EmailTileField
    {
        $this->showSchema = $showSchema;

        return $this;
    }
}
