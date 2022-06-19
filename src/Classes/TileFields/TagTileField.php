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

class TagTileField extends TileField
{
    const TYPE = 'tag';

    protected $linkUrl = '';

    protected $linkField = '';

    public function getConfiguration(): array
    {
        $result = parent::getConfiguration();
        $result['inkUrl'] = $this->linkUrl;
        $result['linkField'] = $this->linkField;

        return $result;
    }

    /**
     * @return string
     */
    public function getLinkUrl(): string
    {
        return $this->linkUrl;
    }

    /**
     * @param string $linkUrl
     */
    public function setLinkUrl(string $linkUrl): void
    {
        $this->linkUrl = $linkUrl;
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
}
