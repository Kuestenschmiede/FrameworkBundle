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
namespace con4gis\FrameworkBundle\Classes\TileFields\ListTypeTileFields;

abstract class ListTypeTileField
{
    protected $name = '';
    protected $label = '';
    protected $class = '';
    protected $iconClass = '';

    const TYPE = 'image';

    public function getConfiguration() : array
    {
        return [
            'name' => $this->name,
            'label' => $this->label,
            'class' => $this->class,
            'iconClass' => $this->iconClass,
            'type' => static::TYPE,
        ];
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return ListTypeTileField
     */
    public function setName(string $name): ListTypeTileField
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getLabel(): string
    {
        return $this->label;
    }

    /**
     * @param string $label
     * @return ListTypeTileField
     */
    public function setLabel(string $label): ListTypeTileField
    {
        $this->label = $label;

        return $this;
    }

    /**
     * @return string
     */
    public function getClass(): string
    {
        return $this->class;
    }

    /**
     * @param string $class
     * @return ListTypeTileField
     */
    public function setClass(string $class): ListTypeTileField
    {
        $this->class = $class;

        return $this;
    }

    /**
     * @return string
     */
    public function getIconClass(): string
    {
        return $this->iconClass;
    }

    /**
     * @param string $iconClass
     * @return ListTypeTileField
     */
    public function setIconClass(string $iconClass): ListTypeTileField
    {
        $this->iconClass = $iconClass;

        return $this;
    }
}
