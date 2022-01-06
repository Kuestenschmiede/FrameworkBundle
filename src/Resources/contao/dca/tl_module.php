<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

use con4gis\FrameworkBundle\Classes\Contao\Callbacks\ModuleCallback;

$GLOBALS['TL_DCA']['tl_module']['palettes']['demo_table_module'] =
    '{title_legend},name,headline,type;{demo_table_legend},demo_table_module_source_table,demo_table_module_source_fields,'.
    'demo_module_authorization,demo_module_load_step';

$GLOBALS['TL_DCA']['tl_module']['palettes']['demo_tile_list_module'] =
    '{title_legend},name,headline,type;{demo_table_legend},demo_table_module_source_table,demo_table_module_source_fields,'.
    'demo_module_authorization,demo_module_load_step';

$GLOBALS['TL_DCA']['tl_module']['palettes']['demo_detail_module'] =
    '{title_legend},name,headline,type;{demo_table_legend},demo_table_module_source_table,demo_table_module_source_fields,'.
    'demo_module_authorization';


$GLOBALS['TL_DCA']['tl_module']['palettes']['demo_form_module'] =
    '{title_legend},name,headline,type;';

$GLOBALS['TL_DCA']['tl_module']['fields']['demo_table_module_source_table'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['demo_table_module_table'],
        'exclude'                 => true,
        'default'                 => '',
        'inputType'               => 'select',
        'options_callback'        => [ModuleCallback::class, 'getTableOptions'],
        'sql'                     => "varchar(50) NOT NULL default ''",
        'eval'                    => ['submitOnChange' => true, 'includeBlankOption' => true]
    ];

$GLOBALS['TL_DCA']['tl_module']['fields']['demo_table_module_source_fields'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['demo_table_module_source_fields'],
        'exclude'                 => true,
        'inputType'               => 'checkboxWizard',
        'options_callback'        => [ModuleCallback::class, 'getFieldOptions'],
        'sql'                     => "TEXT NULL",
        'eval'                    => ['multiple' => true]
    ];

$GLOBALS['TL_DCA']['tl_module']['fields']['demo_module_authorization'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['demo_module_authorization'],
        'exclude'                 => true,
        'default'                 => '',
        'inputType'               => 'select',
        'options_callback'        => [ModuleCallback::class, 'getAuthorizationOptions'],
        'sql'                     => "varchar(20) NOT NULL default ''",
        'eval'                    => ['class' => 'clr']
    ];

$GLOBALS['TL_DCA']['tl_module']['fields']['demo_module_load_step'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['demo_module_load_step'],
        'exclude'                 => true,
        'default'                 => 0,
        'inputType'               => 'text',
        'options_callback'        => [ModuleCallback::class, 'getAuthorizationOptions'],
        'sql'                     => "int(10) NOT NULL default 0",
        'eval'                    => ['class' => 'clr', 'rgxp' => 'natural']
    ];