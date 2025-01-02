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
namespace con4gis\FrameworkBundle\Classes\TableFields;

use con4gis\FrameworkBundle\Classes\ConfigurationInterface;

abstract class TableField implements ConfigurationInterface
{
    protected $name = '';
    protected $headline = '';
    protected $filterable = true;
    protected $filterType = 'dropdown';
    protected $sortable = false;
    protected $sortSequence = 'asc';
    protected $width = 200;
    protected $display = true;

    protected $allowedSequences = ['asc', 'desc'];

    const TYPE = '';

    public function getConfiguration(): array
    {
        return [
            'name' => $this->name,
            'label' => $this->headline,
            'options' => [
                'filter' => $this->filterable,
                'sort' => $this->sortable,
                'width' => $this->width,
                'display' => $this->display,
                'filterType' => $this->filterType,
            ],
            'type' => static::TYPE,
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
     * @return TableField
     */
    public function setName(string $name): TableField
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
     * @return TableField
     */
    public function setHeadline(string $headline): TableField
    {
        $this->headline = $headline;

        return $this;
    }

    /**
     * @return bool
     */
    public function isFilterable(): bool
    {
        return $this->filterable;
    }

    /**
     * @param bool $filterable
     * @return TableField
     */
    public function setFilterable(bool $filterable): TableField
    {
        $this->filterable = $filterable;

        return $this;
    }

    /**
     * @return bool
     */
    public function isSortable(): bool
    {
        return $this->sortable;
    }

    /**
     * @param bool $sortable
     */
    public function setSortable(bool $sortable): void
    {
        $this->sortable = $sortable;
    }

    /**
     * @return string
     */
    public function getSortSequence(): string
    {
        return $this->sortSequence;
    }

    /**
     * @param string $sortSequence
     */
    public function setSortSequence(string $sortSequence): void
    {
        if (in_array($sortSequence, $this->allowedSequences)) {
            $this->sortSequence = $sortSequence;
        }
    }

    /**
     * @return int
     */
    public function getWidth(): int
    {
        return $this->width;
    }

    /**
     * @param int $width
     */
    public function setWidth(int $width): void
    {
        $this->width = $width;
    }

    /**
     * @return bool
     */
    public function isDisplay(): bool
    {
        return $this->display;
    }

    /**
     * @param bool $display
     */
    public function setDisplay(bool $display): void
    {
        $this->display = $display;
    }

    /**
     * @return string
     */
    public function getFilterType(): string
    {
        return $this->filterType;
    }

    /**
     * @param string $filterType
     */
    public function setFilterType(string $filterType): void
    {
        $this->filterType = $filterType;
    }
}
