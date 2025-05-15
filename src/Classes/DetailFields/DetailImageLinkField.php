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

namespace con4gis\FrameworkBundle\Classes\DetailFields;

class DetailImageLinkField extends DetailField
{
    const TYPE = 'image-link';

    private $wrapperClass = '';

    private $innerClass = '';

    public function getConfiguration()
    {
        $conf = parent::getConfiguration();
        $conf['wrapperClass'] = $this->wrapperClass;
        $conf['innerClass'] = $this->innerClass;
        $conf['type'] = self::TYPE;

        return $conf;
    }

    /**
     * @return string
     */
    public function getWrapperClass(): string
    {
        return $this->wrapperClass;
    }

    /**
     * @param string $wrapperClass
     */
    public function setWrapperClass(string $wrapperClass): void
    {
        $this->wrapperClass = $wrapperClass;
    }

    /**
     * @return string
     */
    public function getInnerClass(): string
    {
        return $this->innerClass;
    }

    /**
     * @param string $innerClass
     */
    public function setInnerClass(string $innerClass): void
    {
        $this->innerClass = $innerClass;
    }
}
