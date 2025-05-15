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

interface ToggleableFormInterface extends FormInterface
{
    public function getToggleableBaseClass(): string;
    public function setToggleableBaseClass(string $toggleableBaseClass): void;

    public function getToggleableOnLabel(): string;
    public function setToggleableOnLabel(string $toggleableOnLabel): void;

    public function getToggleableOffLabel(): string;
    public function setToggleableOffLabel(string $toggleableOffLabel): void;

    public function getToggleableOnClass(): string;
    public function setToggleableOnClass(string $toggleableOnClass): void;
}
