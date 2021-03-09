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
            if (is_array($row)) {
                $this->addData($row, $fields);
            } elseif (in_array($key, $fields, true)) {
                $this->html .= "<div>$row</div>";
            }
        }
    }
}
