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
namespace con4gis\FrameworkBundle\Classes\TileFields\ListTypeTileFields;

class ListTypeModalButtonTileField extends ListTypeTileField
{
    private $url = '';
    private $urlField = '';
    private $confirmButtonText = '';
    private $closeButtonText = '';
    private $submitUrl = '';

    /**
     * The field this fields display depends upon, if there is one.
     * @var string
     */
    protected $conditionField = '';

    /**
     * The value of the conditionField for which this field is displayed.
     * @var string
     */
    protected $conditionValue = '';

    const TYPE = 'modal-form-button';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['url'] = $this->url;
        $config['urlField'] = $this->urlField;
        $config['confirmButtonText'] = $this->confirmButtonText;
        $config['closeButtonText'] = $this->closeButtonText;
        $config['submitUrl'] = $this->submitUrl;
        $config['conditionField'] = $this->conditionField;
        $config['conditionValue'] = $this->conditionValue;

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
     * @return string
     */
    public function getConditionField(): string
    {
        return $this->conditionField;
    }

    /**
     * @param string $conditionField
     */
    public function setConditionField(string $conditionField): void
    {
        $this->conditionField = $conditionField;
    }

    /**
     * @return string
     */
    public function getConditionValue(): string
    {
        return $this->conditionValue;
    }

    /**
     * @param string $conditionValue
     */
    public function setConditionValue(string $conditionValue): void
    {
        $this->conditionValue = $conditionValue;
    }
}
