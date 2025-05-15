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

class HeadlineTileField extends TileField
{
    /**
     * Headline level.
     * @var int
     */
    private $level = 2;

    const TYPE = 'headline';

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['level'] = $this->level;

        return $conf;
    }

    /**
     * @return int
     */
    public function getLevel(): int
    {
        return $this->level;
    }

    /**
     * @param int $level
     */
    public function setLevel(int $level): void
    {
        $this->level = $level;
    }
}
