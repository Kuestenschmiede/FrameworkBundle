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
namespace con4gis\FrameworkBundle\Interfaces;

interface ModelInterface
{
    public static function findBy(array $parameters) : ?ModelInterface;

    public static function insert(array $data) : ?ModelInterface;

    public function update() : bool;

    public function wasChangedAndCommitted(): bool;

    public function set(string $column, $value) : ModelInterface;

    public function setAll(array $data) : ModelInterface;

    public function get(string $column, $default = null);

    public function getAll() : array;

    public function isPublished() : bool;
}