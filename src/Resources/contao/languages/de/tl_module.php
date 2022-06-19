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

$GLOBALS['TL_LANG']['tl_module']['demo_table_legend'] = 'Datenherkunft';
$GLOBALS['TL_LANG']['tl_module']['demo_table_module_source_table'] = [
    'Tabelle',
    'Die Tabelle, aus der die Daten geladen werden.'
];
$GLOBALS['TL_LANG']['tl_module']['demo_table_module_source_fields'] = [
    'Felder',
    'Die Felder, die geladen werden sollen. Die gewählte Reihenfolge spiegelt sich auch in der Tabelle wieder.'
];

$GLOBALS['TL_LANG']['tl_module']['demo_module_authorization'] = [
    'Zugriffsschutz',
    'Ergänzend zu der Rechteverwaltung in Contao können Zugriffbeschränkungen festgelegt werden.'
];

$GLOBALS['TL_LANG']['tl_module']['demo_module_load_step'] = [
    'Ladeschritte',
    'Initial wird diese Anzahl Datensätze geladen. Sind mehr Datensätze in der Datenbank vorhanden, werden sie asynchron nachgeladen.'
];

$GLOBALS['TL_LANG']['tl_module']['demo_module_authorization_options'] = [
    'none' => 'Keine weiteren Beschränkungen',
    'member' => 'Nur eingeloggte Mitglieder',
];