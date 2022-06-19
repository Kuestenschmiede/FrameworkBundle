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
namespace con4gis\FrameworkBundle\Classes\Contao\Callbacks;

use Contao\Backend;
use Contao\DataContainer;

class ModuleCallback extends Backend
{
    public function getTableOptions(DataContainer $dc)
    {
        $tables = $this->getContainer()
            ->get('doctrine')
            ->getManager('default')
            ->getConnection()
            ->getSchemaManager()
            ->listTables();
        $tablesFormatted = [];
        foreach ($tables as $table) {
            if (strval($GLOBALS['TL_LANG']['MOD'][$table->getName()][0]) !== '') {
                $name = $GLOBALS['TL_LANG']['MOD'][$table->getName()][0];
                $name .= ' (' . $table->getName() . ')';
            } elseif (strval($GLOBALS['TL_LANG']['MOD'][preg_replace('/^tl_/', '', $table->getName())][0]) !== '') {
                $name = $GLOBALS['TL_LANG']['MOD'][preg_replace('/^tl_/', '', $table->getName())][0];
                $name .= ' (' . $table->getName() . ')';
            } else {
                $name = $table->getName();
            }
            $tablesFormatted[$table->getName()] = $name;
        }

        return $tablesFormatted;
    }

    public function getFieldOptions(DataContainer $dc)
    {
        if ($dc->activeRecord->demo_table_module_source_table !== '' && $dc->activeRecord->demo_table_module_source_table !== null) {
            $columns = $this->getContainer()
                ->get('doctrine')
                ->getManager('default')
                ->getConnection()
                ->getSchemaManager()
                ->listTableColumns($dc->activeRecord->demo_table_module_source_table);
            $columnsFormatted = [];
            foreach ($columns as $column) {
                if (strval($GLOBALS['TL_LANG'][$dc->activeRecord->demo_table_module_source_table][$column->getName()][0]) !== '') {
                    $name = $GLOBALS['TL_LANG'][$dc->activeRecord->demo_table_module_source_table][$column->getName()][0];
                    $name .= ' (' . $column->getName() . ')';
                } else {
                    $name = $column->getName();
                }
                $columnsFormatted[$column->getName()] = $name;
            }

            return $columnsFormatted;
        }

        return [];
    }

    public function getAuthorizationOptions(DataContainer $dc)
    {
        return [
            'none' => $GLOBALS['TL_LANG']['tl_module']['demo_module_authorization_options']['none'],
            'member' => $GLOBALS['TL_LANG']['tl_module']['demo_module_authorization_options']['member'],
        ];
    }
}
