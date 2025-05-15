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
namespace con4gis\FrameworkBundle\Classes\FormFields;

class WrapperFormField extends FormField
{
    const TYPE = 'wrapper';

    /**
     * An array of field names which should be wrapped by this field.
     * @var array
     */
    private $wrappedFields = [];

    /**
     * Set to true when this wrapper is wrapped inside another wrapper.
     * @var bool
     */
    private $innerWrapper = false;

    private $cssId = '';

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['wrappedFields'] = $this->wrappedFields;
        $conf['innerWrapper'] = $this->innerWrapper;
        $conf['cssId'] = $this->cssId;

        return $conf;
    }

    /**
     * @return array
     */
    public function getWrappedFields(): array
    {
        return $this->wrappedFields;
    }

    /**
     * @param array $wrappedFields
     */
    public function setWrappedFields(array $wrappedFields): void
    {
        $this->wrappedFields = $wrappedFields;
    }

    /**
     * @return bool
     */
    public function isInnerWrapper(): bool
    {
        return $this->innerWrapper;
    }

    /**
     * @param bool $innerWrapper
     */
    public function setInnerWrapper(bool $innerWrapper): void
    {
        $this->innerWrapper = $innerWrapper;
    }

    /**
     * @return string
     */
    public function getCssId(): string
    {
        return $this->cssId;
    }

    /**
     * @param string $cssId
     */
    public function setCssId(string $cssId): void
    {
        $this->cssId = $cssId;
    }
}
