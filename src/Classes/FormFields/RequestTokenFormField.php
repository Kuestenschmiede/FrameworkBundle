<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\FormFields;

use con4gis\CoreBundle\Classes\C4GUtils;
use Contao\Controller;
use Contao\System;

class RequestTokenFormField extends HiddenFormField
{
    protected $name = 'REQUEST_TOKEN';
    protected $value = '';

    public function __construct()
    {
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        $this->value = $requestToken;
    }
}
