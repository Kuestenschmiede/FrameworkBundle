<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\DetailFields;

class DetailModalFormButtonField extends DetailField
{
    private $url = '';
    private $urlField = '';
    private $confirmButtonText = '';
    private $closeButtonText = '';
    private $submitUrl = '';
    private $innerFields = [];

    /**
     * The fields this fields' display depends upon, if there is one.
     * @var array
     */
    protected $conditionField = [];

    /**
     * The value of the conditionFields for which this field is displayed.
     * @var array
     */
    protected $conditionValue = [];

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
     * @return array
     */
    public function getConditionField(): array
    {
        return $this->conditionField;
    }

    /**
     * @param string $conditionField
     */
    public function setConditionField(string $conditionField)
    {
        $this->conditionField[] = $conditionField;
    }

    /**
     * @return array
     */
    public function getConditionValue(): array
    {
        return $this->conditionValue;
    }

    /**
     * @param string $conditionValue
     */
    public function setConditionValue(string $conditionValue)
    {
        $this->conditionValue[] = $conditionValue;
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
