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

class DetailLinkField extends DetailField
{
    /**
     * Set the className needed for the desired FontAwesome icon. The required HTML will be
     * rendered by JS.
     * @var string
     */
    private $icon = '';

    /**
     * The text that should be displayed instead of the URL.
     * @var string
     */
    private $linkText = '';

    /**
     * The name of the field where the linkText will be found. The $linkText property is the fallback.
     * @var string
     */
    private $linkTextName = '';

    const TYPE = 'link';

    public function getConfiguration()
    {
        $conf = parent::getConfiguration();
        $conf['icon'] = $this->icon;
        $conf['linkText'] = $this->linkText;
        $conf['linkTextName'] = $this->linkTextName;

        return $conf;
    }

    /**
     * @return string
     */
    public function getIcon(): string
    {
        return $this->icon;
    }

    /**
     * @param string $icon
     */
    public function setIcon(string $icon): void
    {
        $this->icon = $icon;
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
     */
    public function setLinkText(string $linkText): void
    {
        $this->linkText = $linkText;
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
     */
    public function setLinkTextName(string $linkTextName): void
    {
        $this->linkTextName = $linkTextName;
    }
}
