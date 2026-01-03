<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\DetailPage;

class DetailAnchorMenuLink implements \JsonSerializable
{
    private $label = '';

    private $href = '';

    /**
     * DetailAnchorMenuLink constructor.
     * @param string $label
     * @param string $href
     */
    public function __construct(string $label, string $href)
    {
        $this->label = $label;
        $this->href = $href;
    }

    public function jsonSerialize()
    {
        return ['label' => $this->label, 'href' => $this->href];
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

    /**
     * @return string
     */
    public function getHref(): string
    {
        return $this->href;
    }

    /**
     * @param string $href
     */
    public function setHref(string $href): void
    {
        $this->href = $href;
    }
}
