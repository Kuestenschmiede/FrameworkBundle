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
namespace con4gis\FrameworkBundle\Classes\TableFields;

class ButtonTableField extends TableField
{
    /**
     * Label for the button.
     * @var string
     */
    private $buttonText = '';

    /**
     * The base href used for redirecting.
     * @var string
     */
    private $href = '';

    /**
     * The field whose value should be appended to the base href.
     * @var string
     */
    private $hrefField = '';

    private $method = 'GET';
    private $formFields = [];
    private $submitButtonLabel = '';
    private $cancelButtonLabel = '';
    private $url = '';
    private $formHeadlineFieldIndex = -1;

    const TYPE = 'button';

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['buttonText'] = $this->buttonText;
        $conf['href'] = $this->href;
        $conf['hrefField'] = $this->hrefField;
        $conf['method'] = $this->method;

        $conf['formFields'] = [];
        $conf['submitButtonLabel'] = $this->submitButtonLabel;
        $conf['cancelButtonLabel'] = $this->cancelButtonLabel;
        $conf['url'] = $this->url;
        $conf['formHeadlineFieldIndex'] = $this->formHeadlineFieldIndex;

        foreach ($this->formFields as $formField) {
            $conf['formFields'][] = $formField->getConfiguration();
        }

        $conf['type'] = self::TYPE;

        return $conf;
    }

    /**
     * @return string
     */
    public function getButtonText(): string
    {
        return $this->buttonText;
    }

    /**
     * @param string $buttonText
     */
    public function setButtonText(string $buttonText): void
    {
        $this->buttonText = $buttonText;
    }

    /**
     * @return string
     */
    public function getHref(): string
    {
        return $this->href;
    }

    /**
     * @param string $href
     */
    public function setHref(string $href): void
    {
        $this->href = $href;
    }

    /**
     * @return string
     */
    public function getHrefField(): string
    {
        return $this->hrefField;
    }

    /**
     * @param string $hrefField
     */
    public function setHrefField(string $hrefField): void
    {
        $this->hrefField = $hrefField;
    }

    /**
     * @return string
     */
    public function getMethod(): string
    {
        return $this->method;
    }

    /**
     * @param string $method
     */
    public function setMethod(string $method): void
    {
        $this->method = $method;
    }

    /**
     * @return array
     */
    public function getFormFields(): array
    {
        return $this->formFields;
    }

    /**
     * @param array $formFields
     * @return ButtonTableField
     */
    public function setFormFields(array $formFields): ButtonTableField
    {
        $this->formFields = $formFields;

        return $this;
    }

    /**
     * @return string
     */
    public function getSubmitButtonLabel(): string
    {
        return $this->submitButtonLabel;
    }

    /**
     * @param string $submitButtonLabel
     * @return ButtonTableField
     */
    public function setSubmitButtonLabel(string $submitButtonLabel): ButtonTableField
    {
        $this->submitButtonLabel = $submitButtonLabel;

        return $this;
    }

    /**
     * @return string
     */
    public function getCancelButtonLabel(): string
    {
        return $this->cancelButtonLabel;
    }

    /**
     * @param string $cancelButtonLabel
     * @return ButtonTableField
     */
    public function setCancelButtonLabel(string $cancelButtonLabel): ButtonTableField
    {
        $this->cancelButtonLabel = $cancelButtonLabel;

        return $this;
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
     * @return ButtonTableField
     */
    public function setUrl(string $url): ButtonTableField
    {
        $this->url = $url;

        return $this;
    }

    /**
     * @return int
     */
    public function getFormHeadlineFieldIndex(): int
    {
        return $this->formHeadlineFieldIndex;
    }

    /**
     * @param int $formHeadlineFieldIndex
     */
    public function setFormHeadlineFieldIndex(int $formHeadlineFieldIndex): void
    {
        $this->formHeadlineFieldIndex = $formHeadlineFieldIndex;
    }
}
