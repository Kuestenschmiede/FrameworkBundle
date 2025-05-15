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
namespace con4gis\FrameworkBundle\Classes\DetailPage;

class DetailPage
{
    protected $name = '';
    protected $headline = '';
    protected $sections = [];
    protected $mapData = null; // for location map configuration
    protected $showAnchorMenu = false;

    /**
     * The index of the section where the menu should be.
     * 0 means no menu. The indices range from 1 to NUMBER_OF_SECTIONS.
     * @var int
     */
    protected $menuSectionIndex = 0;

    /**
     * Additional links to other parts of the page, e.g. a list below the detail page.
     * @var DetailAnchorMenuLink[]
     */
    protected $additionalLinks = [];

    public function __construct(string $name = 'detail')
    {
        $this->name = $name;
    }

    public function addSection(DetailPageSection $section)
    {
        $this->sections[] = $section;
    }

    public function addAdditionalLink(DetailAnchorMenuLink $menuLink)
    {
        $this->additionalLinks[] = $menuLink;
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
     * @return DetailPage
     */
    public function setName(string $name): DetailPage
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getHeadline(): string
    {
        return $this->headline;
    }

    /**
     * @param string $headline
     */
    public function setHeadline(string $headline): void
    {
        $this->headline = $headline;
    }

    /**
     * @return DetailPageSection[]
     */
    public function getSections(): array
    {
        return $this->sections;
    }

    /**
     * @param DetailPageSection[] $sections
     */
    public function setSections(array $sections): void
    {
        $this->sections = $sections;
    }

    /**
     * @return null
     */
    public function getMapData()
    {
        return $this->mapData;
    }

    /**
     * @param null $mapData
     */
    public function setMapData($mapData): void
    {
        $this->mapData = $mapData;
    }

    /**
     * @return bool
     */
    public function isShowAnchorMenu(): bool
    {
        return $this->showAnchorMenu;
    }

    /**
     * @param bool $showAnchorMenu
     */
    public function setShowAnchorMenu(bool $showAnchorMenu): void
    {
        $this->showAnchorMenu = $showAnchorMenu;
    }

    /**
     * @return int
     */
    public function getMenuSectionIndex(): int
    {
        return $this->menuSectionIndex;
    }

    /**
     * @param int $menuSectionIndex
     */
    public function setMenuSectionIndex(int $menuSectionIndex): void
    {
        $this->menuSectionIndex = $menuSectionIndex;
    }

    /**
     * @return DetailAnchorMenuLink[]
     */
    public function getAdditionalLinks(): array
    {
        return $this->additionalLinks;
    }

    /**
     * @param DetailAnchorMenuLink[] $additionalLinks
     */
    public function setAdditionalLinks(array $additionalLinks): void
    {
        $this->additionalLinks = $additionalLinks;
    }
}
