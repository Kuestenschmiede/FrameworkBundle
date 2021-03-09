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

abstract class TileField
{
    protected $name = '';
    protected $label = '';
    protected $class = '';
    protected $innerClass = '';
    protected $wrapperClass = '';

    protected $renderSection = self::RENDERSECTION_CONTENT;

    const RENDERSECTION_HEADER = 'header';
    const RENDERSECTION_CONTENT = 'content';
    const RENDERSECTION_FOOTER = 'footer';

    const TYPE = '';

    /**
     * Should the field be wrapped in an additional div?
     * HINT: only has an effect in "list" layoutType.
     * @var bool
     */
    private $wrappingDiv = false;

    /**
     * The CSS class for the wrapping Div.
     * @var string
     */
    private $wrappingDivClass = '';

    public function getConfiguration() : array
    {
        return [
            'name' => $this->name,
            'label' => $this->label,
            'class' => $this->class,
            'type' => $this::TYPE,
            'renderSection' => $this->renderSection,
            'innerClass' => $this->innerClass,
            'wrapperClass' => $this->wrapperClass,
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
     * @return TileField
     */
    public function setName(string $name): TileField
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
     * @return TileField
     */
    public function setLabel(string $label): TileField
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
     * @return TileField
     */
    public function setClass(string $class): TileField
    {
        $this->class = $class;

        return $this;
    }

    /**
     * @return string
     */
    public function getRenderSection(): string
    {
        return $this->renderSection;
    }

    /**
     * @param string $renderSection
     * @return TileField
     */
    public function setRenderSection(string $renderSection): TileField
    {
        $this->renderSection = $renderSection;

        return $this;
    }

    /**
     * @return bool
     */
    public function isWrappingDiv(): bool
    {
        return $this->wrappingDiv;
    }

    /**
     * @param bool $wrappingDiv
     */
    public function setWrappingDiv(bool $wrappingDiv): void
    {
        $this->wrappingDiv = $wrappingDiv;
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
}
