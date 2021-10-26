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
namespace con4gis\FrameworkBundle\Classes\Tables;

class Table
{
    protected $name = '';

    /** Header properties */
    protected $headline = '';
    protected $showClientSearch = false;

    /** Body properties */
    protected $pageLength = 0;

    /** Footer properties */
    protected $showNumberOfRows = false;

    protected $striped = false;
    protected $bordered = false;
    protected $hover = false;

    /**
     * @var TableSelection
     */
    protected $tableSelection = null;

    /**
     * @var TableButton[]
     */
    protected $tableButtons = [];

    protected $entriesOptions = [5, 10, 25];
    protected $entries = 5;

    protected $confirmationHeadline = '';
    protected $confirmationMessage = '';
    protected $confirmationYes = '';
    protected $confirmationNo = '';

    protected $loadDataAsync = false;
    protected $asyncDataUrl = '';

    /**
     * Table constructor.
     * @param $name
     */
    public function __construct(string $name = 'table')
    {
        $this->name = $name;
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
     * @return Table
     */
    public function setName(string $name): Table
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
     * @return Table
     */
    public function setHeadline(string $headline): Table
    {
        $this->headline = $headline;

        return $this;
    }

    /**
     * @return bool
     */
    public function isShowClientSearch(): bool
    {
        return $this->showClientSearch;
    }

    /**
     * @param bool $showClientSearch
     * @return Table
     */
    public function setShowClientSearch(bool $showClientSearch = true): Table
    {
        $this->showClientSearch = $showClientSearch;

        return $this;
    }

    /**
     * @return int
     */
    public function getPageLength(): int
    {
        return $this->pageLength;
    }

    /**
     * @param int $pageLength
     * @return Table
     */
    public function setPageLength(int $pageLength): Table
    {
        $this->pageLength = $pageLength;

        return $this;
    }

    /**
     * @return bool
     */
    public function isShowNumberOfRows(): bool
    {
        return $this->showNumberOfRows;
    }

    /**
     * @param bool $showNumberOfRows
     * @return Table
     */
    public function setShowNumberOfRows(bool $showNumberOfRows = true): Table
    {
        $this->showNumberOfRows = $showNumberOfRows;

        return $this;
    }

    /**
     * @return bool
     */
    public function isStriped(): bool
    {
        return $this->striped;
    }

    /**
     * @param bool $striped
     */
    public function setStriped(bool $striped): void
    {
        $this->striped = $striped;
    }

    /**
     * @return bool
     */
    public function isBordered(): bool
    {
        return $this->bordered;
    }

    /**
     * @param bool $bordered
     */
    public function setBordered(bool $bordered): void
    {
        $this->bordered = $bordered;
    }

    /**
     * @return bool
     */
    public function isHover(): bool
    {
        return $this->hover;
    }

    /**
     * @param bool $hover
     */
    public function setHover(bool $hover): void
    {
        $this->hover = $hover;
    }

    /**
     * @return TableSelection
     */
    public function getTableSelection(): ?TableSelection
    {
        return $this->tableSelection;
    }

    /**
     * @param TableSelection $tableSelection
     */
    public function setTableSelection(TableSelection $tableSelection): void
    {
        $this->tableSelection = $tableSelection;
    }

    /**
     * @return int[]
     */
    public function getEntriesOptions(): array
    {
        return $this->entriesOptions;
    }

    /**
     * @param int[] $entriesOptions
     */
    public function setEntriesOptions(array $entriesOptions): void
    {
        $this->entriesOptions = $entriesOptions;
    }

    /**
     * @return int
     */
    public function getEntries(): int
    {
        return $this->entries;
    }

    /**
     * @param int $entries
     */
    public function setEntries(int $entries): void
    {
        $this->entries = $entries;
    }

    /**
     * @return TableButton[]
     */
    public function getTableButtons(): array
    {
        return $this->tableButtons;
    }

    /**
     * @param TableButton[] $tableButtons
     */
    public function setTableButtons(array $tableButtons): void
    {
        $this->tableButtons = $tableButtons;
    }

    /**
     * @return string
     */
    public function getConfirmationHeadline(): string
    {
        return $this->confirmationHeadline;
    }

    /**
     * @param string $confirmationHeadline
     * @return Table
     */
    public function setConfirmationHeadline(string $confirmationHeadline): Table
    {
        $this->confirmationHeadline = $confirmationHeadline;

        return $this;
    }

    /**
     * @return string
     */
    public function getConfirmationMessage(): string
    {
        return $this->confirmationMessage;
    }

    /**
     * @param string $confirmationMessage
     * @return Table
     */
    public function setConfirmationMessage(string $confirmationMessage): Table
    {
        $this->confirmationMessage = $confirmationMessage;

        return $this;
    }

    /**
     * @return string
     */
    public function getConfirmationYes(): string
    {
        return $this->confirmationYes;
    }

    /**
     * @param string $confirmationYes
     * @return Table
     */
    public function setConfirmationYes(string $confirmationYes): Table
    {
        $this->confirmationYes = $confirmationYes;

        return $this;
    }

    /**
     * @return string
     */
    public function getConfirmationNo(): string
    {
        return $this->confirmationNo;
    }

    /**
     * @param string $confirmationNo
     * @return Table
     */
    public function setConfirmationNo(string $confirmationNo): Table
    {
        $this->confirmationNo = $confirmationNo;

        return $this;
    }

    /**
     * @return bool
     */
    public function isLoadDataAsync(): bool
    {
        return $this->loadDataAsync;
    }

    /**
     * @param bool $loadDataAsync
     */
    public function setLoadDataAsync(bool $loadDataAsync): void
    {
        $this->loadDataAsync = $loadDataAsync;
    }

    /**
     * @return string
     */
    public function getAsyncDataUrl(): string
    {
        return $this->asyncDataUrl;
    }

    /**
     * @param string $asyncDataUrl
     */
    public function setAsyncDataUrl(string $asyncDataUrl): void
    {
        $this->asyncDataUrl = $asyncDataUrl;
    }
}
