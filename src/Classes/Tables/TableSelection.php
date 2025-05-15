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
namespace con4gis\FrameworkBundle\Classes\Tables;

class TableSelection
{
    protected $checkbox = false;
    protected $multipleCheckbox = false;

    private $selectionButtons = [];

    /**
     * @return bool
     */
    public function isCheckbox(): bool
    {
        return $this->checkbox;
    }

    /**
     * @param bool $checkbox
     */
    public function setCheckbox(bool $checkbox): void
    {
        $this->checkbox = $checkbox;
    }

    /**
     * @return bool
     */
    public function isMultipleCheckbox(): bool
    {
        return $this->multipleCheckbox;
    }

    /**
     * @param bool $multipleCheckbox
     */
    public function setMultipleCheckbox(bool $multipleCheckbox): void
    {
        $this->multipleCheckbox = $multipleCheckbox;
    }

    /**
     * @return array
     */
    public function getSelectionButtons(): array
    {
        return $this->selectionButtons;
    }

    public function addSelectionButton(SelectionButton $button)
    {
        $this->selectionButtons[] = $button;
    }
}
