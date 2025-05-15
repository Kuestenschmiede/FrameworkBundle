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
namespace con4gis\FrameworkBundle\Classes\TileFields;

class ModalButtonTileField extends TileField
{
    private $url = '';
    private $urlField = '';
    private $confirmButtonText = '';
    private $closeButtonText = '';
    private $submitUrl = '';
    private $conditions = [];
    private $innerFields = [];

    const TYPE = 'modal-button';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['url'] = $this->url;
        $config['urlField'] = $this->urlField;
        $config['confirmButtonText'] = $this->confirmButtonText;
        $config['closeButtonText'] = $this->closeButtonText;
        $config['submitUrl'] = $this->submitUrl;
        $config['conditions'] = $this->conditions;
        $config['innerFields'] = $this->innerFields;

        return $config;
    }

    /**
     * @return string
     */
    public function getUrl(): string
    {
        return $this->url;
    }

    /**
     * @param string $url
     */
    public function setUrl(string $url): void
    {
        $this->url = $url;
    }

    /**
     * @return string
     */
    public function getUrlField(): string
    {
        return $this->urlField;
    }

    /**
     * @param string $urlField
     */
    public function setUrlField(string $urlField): void
    {
        $this->urlField = $urlField;
    }

    /**
     * @return string
     */
    public function getConfirmButtonText(): string
    {
        return $this->confirmButtonText;
    }

    /**
     * @param string $confirmButtonText
     */
    public function setConfirmButtonText(string $confirmButtonText): void
    {
        $this->confirmButtonText = $confirmButtonText;
    }

    /**
     * @return string
     */
    public function getCloseButtonText(): string
    {
        return $this->closeButtonText;
    }

    /**
     * @param string $closeButtonText
     */
    public function setCloseButtonText(string $closeButtonText): void
    {
        $this->closeButtonText = $closeButtonText;
    }

    /**
     * @return string
     */
    public function getSubmitUrl(): string
    {
        return $this->submitUrl;
    }

    /**
     * @param string $submitUrl
     */
    public function setSubmitUrl(string $submitUrl): void
    {
        $this->submitUrl = $submitUrl;
    }

    /**
     * @param string $field
     * @param string $value
     * @param bool $not
     */
    public function setCondition(string $field, string $value, bool $not = false)
    {
        $this->conditions[] = [
            'field' => $field,
            'value' => $value,
            'not' => $not,
        ];
    }

    /**
     * @return array
     */
    public function getInnerFields(): array
    {
        return $this->innerFields;
    }

    /**
     * @param array $innerFields
     */
    public function setInnerFields(array $innerFields): void
    {
        $this->innerFields = $innerFields;
    }
}
