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
namespace con4gis\FrameworkBundle\Classes\Forms;

interface FormInterface
{
    public function getConfiguration(): array;

    public function getName(): string;
    public function setName(string $name): void;

    public function getHeadline(): string;
    public function setHeadline(string $headline): void;

    public function getMethod(): string;
    public function setMethod(string $method): void;

    public function getMapData();
    public function setMapData($mapData): void;

    public function getClass(): string;
    public function setClass(string $class): void;

    public function getContainerRow(): bool;
    public function setContainerRow(bool $containerRow): void;

    public function isRenderAsForm(): bool;
    public function setRenderAsForm(bool $renderAsForm): void;

    public function getButtonWrapperClass(): string;
    public function setButtonWrapperClass(string $buttonWrapperClass): void;
}
