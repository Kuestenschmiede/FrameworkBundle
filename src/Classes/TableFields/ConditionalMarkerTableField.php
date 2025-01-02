<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\TableFields;

class ConditionalMarkerTableField extends TableField
{
    private $arrMarkers = [];

    const TYPE = 'conditional-marker';

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['markers'] = $this->arrMarkers;
        $conf['type'] = self::TYPE;

        return $conf;
    }

    public function addMarker($class, $dataState, $dataToggle, $dataPlacement, $title)
    {
        $this->arrMarkers[$title] = [
            'class' => $class,
            'dataState' => $dataState,
            'dataToggle' => $dataToggle,
            'dataPlacement' => $dataPlacement,
            'title' => $title,
        ];
    }
}
