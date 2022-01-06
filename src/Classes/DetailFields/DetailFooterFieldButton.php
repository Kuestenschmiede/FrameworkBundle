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
namespace con4gis\FrameworkBundle\Classes\DetailFields;

class DetailFooterFieldButton
{
    private $linkField = '';
    private $class = '';
    private $label = '';

    /**
     * DetailFooterFieldButton constructor.
     * @param string $linkField
     * @param string $class
     * @param string $label
     */
    public function __construct(string $linkField, string $class, string $label)
    {
        $this->linkField = $linkField;
        $this->class = $class;
        $this->label = $label;
    }

    public function getConfiguration()
    {
        return [
            'linkField' => $this->linkField,
            'class' => $this->class,
            'label' => $this->label,
        ];
    }

    /**
     * @return string
     */
    public function getLinkField(): string
    {
        return $this->linkField;
    }

    /**
     * @param string $linkField
     */
    public function setLinkField(string $linkField): void
    {
        $this->linkField = $linkField;
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
     */
    public function setClass(string $class): void
    {
        $this->class = $class;
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
     */
    public function setLabel(string $label): void
    {
        $this->label = $label;
    }
}
