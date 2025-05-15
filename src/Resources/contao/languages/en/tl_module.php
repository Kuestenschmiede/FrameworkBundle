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

$GLOBALS['TL_LANG']['tl_module']['demo_table_legend'] = 'Data origin';
$GLOBALS['TL_LANG']['tl_module']['demo_table_module_source_table'] = [
    'table',
    'The table from which the data will be loaded.'
];
$GLOBALS['TL_LANG']['tl_module']['demo_table_module_source_fields'] = [
    'fields',
    'The fields to be loaded. The chosen order is also reflected in the table.'
];

$GLOBALS['TL_LANG']['tl_module']['demo_module_authorization'] = [
    'access-protection',
    'Access restrictions can be set in addition to the rights management in Contao.'
];

$GLOBALS['TL_LANG']['tl_module']['demo_module_load_step'] = [
    'Load_steps',
    'Initially this number of records will be loaded. If there are more records in the database, they will be loaded asynchronously.'
];

$GLOBALS['TL_LANG']['tl_module']['demo_module_authorization_options'] = [
    'none' => 'No further restrictions',
    'member' => 'Logged in members only',
];