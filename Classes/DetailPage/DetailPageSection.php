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
namespace con4gis\FrameworkBundle\Classes\DetailPage;

class DetailPageSection
{
    private $name = '';

    private $className = '';

    /**
     * If true, this section gets className "container" and has an inner div with the row class.
     * @var bool
     */
    private $container = true;

    /**
     * If true, every field in this section will be wrapped with a div with the "row" class.
     * @var bool
     */
    private $rowForEachField = false;

    /**
     * Can be disabled to hide this section in the breadcrumb menu.
     * @var bool
     */
    private $showInSectionMenu = true;

    /**
     * DetailPageSection constructor.
     * @param string $name
     * @param string $className
     * @param bool $container
     * @param bool $showInSectionMenu
     */
    public function __construct(string $name, bool $container, string $className = '', bool $showInSectionMenu = true)
    {
        $this->name = $name;
        $this->className = $className;
        $this->container = $container;
        $this->showInSectionMenu = $showInSectionMenu;
    }

    public function getConfiguration()
    {
        return [
            'name' => $this->name,
            'className' => $this->className,
            'container' => $this->container,
            'rowForEachField' => $this->rowForEachField,
            'showInSectionMenu' => $this->showInSectionMenu,
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
     * @return bool
     */
    public function isContainer(): bool
    {
        return $this->container;
    }

    /**
     * @param bool $container
     */
    public function setContainer(bool $container): void
    {
        $this->container = $container;
    }

    /**
     * @return bool
     */
    public function isRowForEachField(): bool
    {
        return $this->rowForEachField;
    }

    /**
     * @param bool $rowForEachField
     */
    public function setRowForEachField(bool $rowForEachField): void
    {
        $this->rowForEachField = $rowForEachField;
    }

    /**
     * @return bool
     */
    public function isShowInSectionMenu(): bool
    {
        return $this->showInSectionMenu;
    }

    /**
     * @param bool $showInSectionMenu
     */
    public function setShowInSectionMenu(bool $showInSectionMenu): void
    {
        $this->showInSectionMenu = $showInSectionMenu;
    }
}
