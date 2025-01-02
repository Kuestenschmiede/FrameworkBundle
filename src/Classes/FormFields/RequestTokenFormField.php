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
namespace con4gis\FrameworkBundle\Classes\FormFields;

use con4gis\CoreBundle\Classes\C4GUtils;
use Contao\Controller;

class RequestTokenFormField extends HiddenFormField
{
    protected $name = 'REQUEST_TOKEN';
    protected $value = '';

    public function __construct()
    {
        $this->value = C4GUtils::replaceInsertTags('{{request_token}}');
    }
}
