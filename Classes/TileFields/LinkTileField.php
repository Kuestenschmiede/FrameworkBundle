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
namespace con4gis\FrameworkBundle\Classes\TileFields;

class LinkTileField extends TileField
{
    protected $href = '';
    protected $linkText = '';
    protected $hrefName = '';
    protected $linkTextName = '';
    protected $newTab = false;

    const TYPE = 'link';
    const DEFAULT_LINK_ICON_CLASS = 'fas fa-external-link-alt';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['href'] = $this->href;
        $config['linkText'] = $this->linkText;
        $config['hrefName'] = $this->hrefName;
        $config['linkTextName'] = $this->linkTextName;
        $config['newTab'] = $this->newTab;

        return $config;
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
     * @return LinkTileField
     */
    public function setHref(string $href): LinkTileField
    {
        $this->href = $href;

        return $this;
    }

    /**
     * @return string
     */
    public function getLinkText(): string
    {
        return $this->linkText;
    }

    /**
     * @param string $linkText
     * @return LinkTileField
     */
    public function setLinkText(string $linkText): LinkTileField
    {
        $this->linkText = $linkText;

        return $this;
    }

    /**
     * @return string
     */
    public function getHrefName(): string
    {
        return $this->hrefName;
    }

    /**
     * @param string $hrefName
     * @return LinkTileField
     */
    public function setHrefName(string $hrefName): LinkTileField
    {
        $this->hrefName = $hrefName;

        return $this;
    }

    /**
     * @return string
     */
    public function getLinkTextName(): string
    {
        return $this->linkTextName;
    }

    /**
     * @param string $linkTextName
     * @return LinkTileField
     */
    public function setLinkTextName(string $linkTextName): LinkTileField
    {
        $this->linkTextName = $linkTextName;

        return $this;
    }

    /**
     * @return bool
     */
    public function isNewTab(): bool
    {
        return $this->newTab;
    }

    /**
     * @param bool $newTab
     */
    public function setNewTab(bool $newTab = true): void
    {
        $this->newTab = $newTab;
    }
}
