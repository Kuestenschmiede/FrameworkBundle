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
namespace con4gis\FrameworkBundle\Classes\Forms;

class Form implements FormInterface
{
    private $name = '';
    private $headline = '';
    private $method = 'GET';
    private $mapData = null;
    private $class = '';
    private $renderAsForm = true;
    private $buttonWrapperClass = 'c4g-panel-buttons';
    private $hidden = false;
    private $preservePosition = false;
    private $scrollSpy = false;
    private $scrollSpyTarget = '';
    private $wrapper = false;
    private $wrapperClass = '';
    private $wrapperId = '';

    /**
     * If true, a div with the container class and a div with the row class will be generated into the form.
     * @var bool
     */
    protected $containerRow = false;

    public function __construct(string $name = 'form')
    {
        $this->name = $name;
    }

    public function getConfiguration(): array
    {
        return [
            'headline' => $this->headline,
            'method' => $this->method,
            'class' => $this->class,
            'renderAsForm' => $this->renderAsForm,
            'buttonWrapperClass' => $this->buttonWrapperClass,
            'containerRow' => $this->containerRow,
            'hidden' => $this->hidden,
            'preservePosition' => $this->preservePosition,
            'scrollSpy' => $this->scrollSpy,
            'scrollSpyTarget' => $this->scrollSpyTarget,
            'wrapper' => $this->wrapper,
            'wrapperClass' => $this->wrapperClass,
            'wrapperId' => $this->wrapperId,
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
     */
    public function setName(string $name): void
    {
        $this->name = $name;
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
     * @return string
     */
    public function getMethod(): string
    {
        return $this->method;
    }

    /**
     * @param string $method
     */
    public function setMethod(string $method): void
    {
        $this->method = $method;
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
     * @return bool
     */
    public function getContainerRow(): bool
    {
        return $this->containerRow;
    }

    /**
     * @param bool $containerRow
     */
    public function setContainerRow(bool $containerRow): void
    {
        $this->containerRow = $containerRow;
    }

    /**
     * @return bool
     */
    public function isRenderAsForm(): bool
    {
        return $this->renderAsForm;
    }

    /**
     * @param bool $renderAsForm
     */
    public function setRenderAsForm(bool $renderAsForm): void
    {
        $this->renderAsForm = $renderAsForm;
    }

    /**
     * @return bool
     */
    public function isHidden(): bool
    {
        return $this->hidden;
    }

    /**
     * @param bool $hidden
     */
    public function setHidden(bool $hidden): void
    {
        $this->hidden = $hidden;
    }

    /**
     * @return string
     */
    public function getButtonWrapperClass(): string
    {
        return $this->buttonWrapperClass;
    }

    /**
     * @param string $buttonWrapperClass
     */
    public function setButtonWrapperClass(string $buttonWrapperClass): void
    {
        $this->buttonWrapperClass = $buttonWrapperClass;
    }

    /**
     * @return bool
     */
    public function isPreservePosition(): bool
    {
        return $this->preservePosition;
    }

    /**
     * @param bool $preservePosition
     */
    public function setPreservePosition(bool $preservePosition): void
    {
        $this->preservePosition = $preservePosition;
    }

    /**
     * @return bool
     */
    public function isScrollSpy(): bool
    {
        return $this->scrollSpy;
    }

    /**
     * @param bool $scrollSpy
     */
    public function setScrollSpy(bool $scrollSpy): void
    {
        $this->scrollSpy = $scrollSpy;
    }

    /**
     * @return string
     */
    public function getScrollSpyTarget(): string
    {
        return $this->scrollSpyTarget;
    }

    /**
     * @param string $scrollSpyTarget
     */
    public function setScrollSpyTarget(string $scrollSpyTarget): void
    {
        $this->scrollSpyTarget = $scrollSpyTarget;
    }

    /**
     * @return bool
     */
    public function isWrapper(): bool
    {
        return $this->wrapper;
    }

    /**
     * @param bool $wrapper
     */
    public function setWrapper(bool $wrapper): void
    {
        $this->wrapper = $wrapper;
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
    public function getWrapperId(): string
    {
        return $this->wrapperId;
    }

    /**
     * @param string $wrapperId
     */
    public function setWrapperId(string $wrapperId): void
    {
        $this->wrapperId = $wrapperId;
    }
}
