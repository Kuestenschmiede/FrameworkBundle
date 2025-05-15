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
namespace con4gis\FrameworkBundle\Classes\Utility;

class FieldUtil
{
    public static function makeFieldArrayUnique(array $fields)
    {
        $tmpFieldnames = [];
        $tmpFields = [];
        foreach ($fields as $field) {
            if (!in_array($field->getName(), $tmpFieldnames)) {
                $tmpFields[] = $field;
                $tmpFieldnames[] = $field->getName();
            }
        }

        return $tmpFields;
    }
}
