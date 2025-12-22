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
namespace con4gis\FrameworkBundle\Classes;

/**
 * @package con4gis\FrameworkBundle\Classes
 */
class SearchConfiguration
{
    protected $html = '';

    public function getHTML() : string
    {
        return $this->html;
    }

    public function addHeadline(string $headline)
    {
        $this->html .= "<div>$headline</div>";

        return $this;
    }

    public function addData(array $data, array $fields)
    {
        foreach ($data as $key => $row) {
            if (is_array($row) && count($row) > 0) {
                if (key_exists(0, $row) && is_array($row[0]) && key_exists('value', $row[0]) && $row[0]['value'] && key_exists('label', $row[0]) && $row[0]['label']) {
                    foreach ($row as $value) {
                        if ($value['label']) {
                            // options format
                            $content = $value['label'];
                            $this->html .= "<div>$content</div>";
                        }
                    }
                } else {
                    $this->addData($row, $fields);
                }
            } elseif (in_array($key, $fields, true)) {
                $this->html .= "<div>$row</div>";
            }
        }
    }
}
