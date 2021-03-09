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
namespace con4gis\FrameworkBundle\Classes\FormFields;

use Contao\Controller;

class RequestTokenFormField extends HiddenFormField
{
    protected $name = 'REQUEST_TOKEN';
    protected $value = '';

    public function __construct()
    {
        $this->value = Controller::replaceInsertTags('{{request_token}}');
    }
}
