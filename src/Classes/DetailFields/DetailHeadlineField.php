<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\DetailFields;

class DetailHeadlineField extends DetailField
{
    private $level = 2;

    const TYPE = 'headline';

    public function getConfiguration()
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
     * @return DetailHeadlineField
     */
    public function setLevel(int $level): DetailHeadlineField
    {
        $this->level = $level;

        return $this;
    }
}
