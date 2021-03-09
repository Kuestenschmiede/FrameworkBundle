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
namespace con4gis\FrameworkBundle\Classes\DetailFields;

abstract class DetailField
{
    private $name = '';

    private $label = '';

    private $class = '';

    const TYPE = '';

    private $section = 0;

    public function getConfiguration()
    {
        return [
            'name' => $this->name,
            'label' => $this->label,
            'class' => $this->class,
            'type' => $this::TYPE,
            'section' => $this->section,
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
     * @return DetailField
     */
    public function setName(string $name): DetailField
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
     * @return DetailField
     */
    public function setLabel(string $label): DetailField
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
     * @return DetailField
     */
    public function setClass(string $class): DetailField
    {
        $this->class = $class;

        return $this;
    }

    /**
     * @return int
     */
    public function getSection(): int
    {
        return $this->section;
    }

    /**
     * @param int $section
     */
    public function setSection(int $section): void
    {
        $this->section = $section;
    }
}
