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

class ListTypeHeadlineTileField extends ListTypeTileField
{
    protected $level = 3;

    const TYPE = 'headline';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['level'] = $this->level;

        return $config;
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
     * @return ListTypeHeadlineTileField
     */
    public function setLevel(int $level): ListTypeHeadlineTileField
    {
        switch ($level) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                $this->level = $level;

                break;
            default:
                break;
        }

        return $this;
    }
}
