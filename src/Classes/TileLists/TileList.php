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
namespace con4gis\FrameworkBundle\Classes\TileLists;

class TileList
{
    protected $name = '';
    protected $headline = '';
    protected $headlineLevel = 1;
    protected $showClientSearch = false;
    protected $pageLength = 0;
    protected $showNumberOfTiles = false;
    protected $asyncUrl = '';
    protected $conditionalClasses = [];
    protected $filterData = [];
    protected $loadingText = '';
    protected $updated = false;

    /**
     * If true, the list and headline are wrapped in an additional div
     * @var bool
     */
    protected $listWrapper = false;

    /**
     * CSS ID for the list wrapper
     * @var string
     */
    protected $wrapperId = '';

    /**
     * CSS class for the list wrapper
     * @var string
     */
    protected $wrapperClass = 'list-wrapper';

    /**
     * The selected layout type. Currently "list" and "grid" are supported.
     * @var string
     */
    protected $layoutType = 'classic';

    /**
     * CSS class for the wrapping component.
     * @var string
     */
    protected $className = '';

    /**
     * CSS class that will be set to every single tile.
     * @var string
     */
    protected $tileClassName = '';

    /**
     * CSS class added to every single tile if a particular field has a particular value
     * @var string
     */
    protected $conditionalTileClassName = '';
    protected $conditionalTileClassField = '';
    protected $conditionalTileClassValue = '';

    protected $availableSortings = [
        'alphabetical_asc',
        'alphabetical_desc',
        'date_asc',
        'date_desc',
        'id_asc',
        'id_desc',
    ];

    protected $selectedSortings = [];

    protected $textBeforeUpdate = '';
    protected $textAfterUpdate = '';
    protected $bottomLine = '';

    private $classAfterFilter = '';

    const SORTING_ALPHABETICAL_ASC = 'alphabetical_asc';

    private $allowedLayoutTypes = [
        'plain', 'list',
        'masonry-grid',
        'carousel', // not standardized
    ];

    /**
     * The amount of datasets that will be loaded in each request.
     * @var int
     */
    private $loadStep = 30;

    private $scrollThreshold = 0.1;
    private $onlySearchWithParam = '';

    /**
     * If not empty, each time data gets loaded into this list, it will check
     * if an entry in $uniqueField is duplicated (only evaluated in async mode!)
     * @var string
     */
    private $uniqueField = '';

    private $setAsyncAfterFilter = false;

    private $checkAsyncWhileUpdate = false;

    private $showSpinner = true;

    private $withTextFilter = false;

    /**
     * The data fields which should be searched in the textFilter.
     * @var array
     */
    private $textFilterFields = [];

    public function __construct(string $name = 'tiles')
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
     * @return TileList
     */
    public function setName(string $name): TileList
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
     * @return TileList
     */
    public function setHeadline(string $headline): TileList
    {
        $this->headline = $headline;

        return $this;
    }

    /**
     * @return int
     */
    public function getHeadlineLevel(): int
    {
        return $this->headlineLevel;
    }

    /**
     * @param int $headlineLevel
     */
    public function setHeadlineLevel(int $headlineLevel): void
    {
        $this->headlineLevel = $headlineLevel;
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
     * @return TileList
     */
    public function setShowClientSearch(bool $showClientSearch): TileList
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
     * @return TileList
     */
    public function setPageLength(int $pageLength): TileList
    {
        $this->pageLength = $pageLength;

        return $this;
    }

    /**
     * @return bool
     */
    public function isShowNumberOfTiles(): bool
    {
        return $this->showNumberOfTiles;
    }

    /**
     * @param bool $showNumberOfTiles
     * @return TileList
     */
    public function setShowNumberOfTiles(bool $showNumberOfTiles): TileList
    {
        $this->showNumberOfTiles = $showNumberOfTiles;

        return $this;
    }

    /**
     * @return string
     */
    public function getAsyncUrl(): string
    {
        return $this->asyncUrl;
    }

    /**
     * @param string $asyncUrl
     * @return TileList
     */
    public function setAsyncUrl(string $asyncUrl): TileList
    {
        $this->asyncUrl = $asyncUrl;

        return $this;
    }

    /**
     * @return string
     */
    public function getClassName(): string
    {
        return $this->className;
    }

    /**
     * @param string $className
     */
    public function setClassName(string $className): void
    {
        $this->className = $className;
    }

    /**
     * @return string
     */
    public function getTileClassName(): string
    {
        return $this->tileClassName;
    }

    /**
     * @param string $tileClassName
     */
    public function setTileClassName(string $tileClassName): void
    {
        $this->tileClassName = $tileClassName;
    }

    /**
     * @return string
     */
    public function getConditionalTileClassName(): string
    {
        return $this->conditionalTileClassName;
    }

    /**
     * @param string $conditionalTileClassName
     */
    public function setConditionalTileClassName(string $conditionalTileClassName): void
    {
        $this->conditionalTileClassName = $conditionalTileClassName;
    }

    /**
     * @return string
     */
    public function getConditionalTileClassField(): string
    {
        return $this->conditionalTileClassField;
    }

    /**
     * @param string $conditionalTileClassField
     */
    public function setConditionalTileClassField(string $conditionalTileClassField): void
    {
        $this->conditionalTileClassField = $conditionalTileClassField;
    }

    /**
     * @return string
     */
    public function getConditionalTileClassValue(): string
    {
        return $this->conditionalTileClassValue;
    }

    /**
     * @param string $conditionalTileClassValue
     */
    public function setConditionalTileClassValue(string $conditionalTileClassValue): void
    {
        $this->conditionalTileClassValue = $conditionalTileClassValue;
    }

    /**
     * Adds the given $sorting to the available sorting mechanisms in the front end list.
     * The $fieldName is the field by which the list will be sorted in this sorting mechanism.
     * @param $fieldName
     * @param $sorting
     * @return bool
     */
    public function addSelectedSorting($fieldName, $sorting)
    {
        if (in_array($sorting, $this->availableSortings)) {
            $this->selectedSortings[] = [
                'field' => $fieldName,
                'sorting' => $sorting,
            ];

            return true;
        }

        return false;
    }

    /**
     * @return array
     */
    public function getSelectedSortings(): array
    {
        return $this->selectedSortings;
    }

    /**
     * @param string $field
     * @param string $class
     * @return $this
     */
    public function addConditionalClass(string $field, string $class)
    {
        $this->conditionalClasses[$class] = $field;

        return $this;
    }

    /**
     * @return array
     */
    public function getConditionalClasses(): array
    {
        return $this->conditionalClasses;
    }

    /**
     * @return string
     */
    public function getTextBeforeUpdate(): string
    {
        return $this->textBeforeUpdate;
    }

    /**
     * @param string $textBeforeUpdate
     * @return TileList
     */
    public function setTextBeforeUpdate(string $textBeforeUpdate): TileList
    {
        $this->textBeforeUpdate = $textBeforeUpdate;

        return $this;
    }

    /**
     * @return string
     */
    public function getTextAfterUpdate(): string
    {
        return $this->textAfterUpdate;
    }

    /**
     * @param string $textAfterUpdate
     * @return TileList
     */
    public function setTextAfterUpdate(string $textAfterUpdate): TileList
    {
        $this->textAfterUpdate = $textAfterUpdate;

        return $this;
    }

    /**
     * @return string
     */
    public function getBottomLine(): string
    {
        return $this->bottomLine;
    }

    /**
     * @param string $bottomLine
     * @return TileList
     */
    public function setBottomLine(string $bottomLine): TileList
    {
        $this->bottomLine = $bottomLine;

        return $this;
    }

    /**
     * @return array
     */
    public function getFilterData(): array
    {
        return $this->filterData;
    }

    /**
     * @param array $filterData
     * @return TileList
     */
    public function setFilterData(array $filterData): TileList
    {
        $this->filterData = $filterData;

        return $this;
    }

    /**
     * @return string
     */
    public function getLoadingText(): string
    {
        return $this->loadingText;
    }

    /**
     * @param string $loadingText
     * @return TileList
     */
    public function setLoadingText(string $loadingText): TileList
    {
        $this->loadingText = $loadingText;

        return $this;
    }

    /**
     * @return bool
     */
    public function isUpdated(): bool
    {
        return $this->updated;
    }

    /**
     * @param bool $updated
     * @return TileList
     */
    public function setUpdated(bool $updated): TileList
    {
        $this->updated = $updated;

        return $this;
    }

    /**
     * @return string
     */
    public function getLayoutType(): string
    {
        return $this->layoutType;
    }

    /**
     * @param string $layoutType
     */
    public function setLayoutType(string $layoutType): void
    {
        if (in_array($layoutType, $this->allowedLayoutTypes)) {
            $this->layoutType = $layoutType;
        }
    }

    /**
     * @return int
     */
    public function getLoadStep(): int
    {
        return $this->loadStep;
    }

    /**
     * @param int $loadStep
     */
    public function setLoadStep(int $loadStep): void
    {
        $this->loadStep = $loadStep;
    }

    /**
     * @return float
     */
    public function getScrollThreshold(): float
    {
        return $this->scrollThreshold;
    }

    /**
     * @param float $scrollThreshold
     */
    public function setScrollThreshold(float $scrollThreshold): void
    {
        $this->scrollThreshold = $scrollThreshold;
    }

    /**
     * @return string
     */
    public function getOnlySearchWithParam(): string
    {
        return $this->onlySearchWithParam;
    }

    /**
     * @param string $onlySearchWithParam
     */
    public function setOnlySearchWithParam(string $onlySearchWithParam): void
    {
        $this->onlySearchWithParam = $onlySearchWithParam;
    }

    /**
     * @return string
     */
    public function getUniqueField(): string
    {
        return $this->uniqueField;
    }

    /**
     * @param string $uniqueField
     */
    public function setUniqueField(string $uniqueField): void
    {
        $this->uniqueField = $uniqueField;
    }

    /**
     * @return bool
     */
    public function isSetAsyncAfterFilter(): bool
    {
        return $this->setAsyncAfterFilter;
    }

    /**
     * @param bool $setAsyncAfterFilter
     */
    public function setSetAsyncAfterFilter(bool $setAsyncAfterFilter): void
    {
        $this->setAsyncAfterFilter = $setAsyncAfterFilter;
    }

    /**
     * @return bool
     */
    public function isCheckAsyncWhileUpdate(): bool
    {
        return $this->checkAsyncWhileUpdate;
    }

    /**
     * @param bool $checkAsyncWhileUpdate
     */
    public function setCheckAsyncWhileUpdate(bool $checkAsyncWhileUpdate): void
    {
        $this->checkAsyncWhileUpdate = $checkAsyncWhileUpdate;
    }

    /**
     * @return string
     */
    public function getClassAfterFilter(): string
    {
        return $this->classAfterFilter;
    }

    /**
     * @param string $classAfterFilter
     */
    public function setClassAfterFilter(string $classAfterFilter): void
    {
        $this->classAfterFilter = $classAfterFilter;
    }

    /**
     * @return bool
     */
    public function isListWrapper(): bool
    {
        return $this->listWrapper;
    }

    /**
     * @param bool $listWrapper
     */
    public function setListWrapper(bool $listWrapper): void
    {
        $this->listWrapper = $listWrapper;
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
     * @return bool
     */
    public function isShowSpinner(): bool
    {
        return $this->showSpinner;
    }

    /**
     * @param bool $showSpinner
     */
    public function setShowSpinner(bool $showSpinner): void
    {
        $this->showSpinner = $showSpinner;
    }

    /**
     * @return bool
     */
    public function isWithTextFilter(): bool
    {
        return $this->withTextFilter;
    }

    /**
     * @param bool $withTextFilter
     */
    public function setWithTextFilter(bool $withTextFilter): void
    {
        $this->withTextFilter = $withTextFilter;
    }

    /**
     * @return array
     */
    public function getTextFilterFields(): array
    {
        return $this->textFilterFields;
    }

    /**
     * @param array $textFilterFields
     */
    public function setTextFilterFields(array $textFilterFields): void
    {
        $this->textFilterFields = $textFilterFields;
    }
}
