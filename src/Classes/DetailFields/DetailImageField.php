<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\DetailFields;

class DetailImageField extends DetailField
{
    private $srcFieldName = '';
    private $altFieldName = '';

    /**
     * If true, the field will be wrapped into an addtional div.
     * @var bool
     */
    private $addWrappingDiv = false;

    /**
     * The class of the additional wrapping div.
     * @var string
     */
    private $wrappingDivClass = '';

    /**
     * If set, the image will be rendered in a figure tag.
     * @var bool
     */
    private $renderAsFigure = false;

    const TYPE = 'image';

    public function getConfiguration()
    {
        $conf = parent::getConfiguration();
        $conf['srcName'] = $this->srcFieldName;
        $conf['altName'] = $this->altFieldName;
        $conf['addWrappingDiv'] = $this->addWrappingDiv;
        $conf['wrappingDivClass'] = $this->wrappingDivClass;
        $conf['renderAsFigure'] = $this->renderAsFigure;
        $conf['width'] = $this->srcFieldName && getimagesize($this->srcFieldName) ? getimagesize($this->srcFieldName)[0] : '100%';
        $conf['height'] = $this->srcFieldName && getimagesize($this->srcFieldName) ? getimagesize($this->srcFieldName)[1] : '100%';

        return $conf;
    }

    /**
     * @return string
     */
    public function getSrcFieldName(): string
    {
        return $this->srcFieldName;
    }

    /**
     * @param string $srcFieldName
     */
    public function setSrcFieldName(string $srcFieldName): void
    {
        $this->srcFieldName = $srcFieldName;
    }

    /**
     * @return string
     */
    public function getAltFieldName(): string
    {
        return $this->altFieldName;
    }

    /**
     * @param string $altFieldName
     */
    public function setAltFieldName(string $altFieldName): void
    {
        $this->altFieldName = $altFieldName;
    }

    /**
     * @return bool
     */
    public function isAddWrappingDiv(): bool
    {
        return $this->addWrappingDiv;
    }

    /**
     * @param bool $addWrappingDiv
     */
    public function setAddWrappingDiv(bool $addWrappingDiv): void
    {
        $this->addWrappingDiv = $addWrappingDiv;
    }

    /**
     * @return string
     */
    public function getWrappingDivClass(): string
    {
        return $this->wrappingDivClass;
    }

    /**
     * @param string $wrappingDivClass
     */
    public function setWrappingDivClass(string $wrappingDivClass): void
    {
        $this->wrappingDivClass = $wrappingDivClass;
    }

    /**
     * @return bool
     */
    public function isRenderAsFigure(): bool
    {
        return $this->renderAsFigure;
    }

    /**
     * @param bool $renderAsFigure
     */
    public function setRenderAsFigure(bool $renderAsFigure): void
    {
        $this->renderAsFigure = $renderAsFigure;
    }
}
