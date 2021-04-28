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
namespace con4gis\FrameworkBundle\Classes\TileFields;

class TagTileField extends TileField
{
    const TYPE = 'tag';

    protected $linkUrl = '';

    public function getConfiguration(): array
    {
        $result = parent::getConfiguration();
        $result['inkUrl'] = $this->linkUrl;

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
}
