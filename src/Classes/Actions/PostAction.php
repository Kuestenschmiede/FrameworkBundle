<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\FrameworkBundle\Classes\Actions;

use con4gis\FrameworkBundle\Classes\ConfigurationInterface;

class PostAction implements ConfigurationInterface
{
    private $url = '';
    private $buttonText = '';
    private $title = '';
    private $message = '';
    private $confirmText = '';
    private $cancelText = '';
    private $formFields = [];
    private $className = '';
    private $requestToken = '';

    public function getConfiguration(): array
    {
        $formFieldConfig = [];
        foreach ($this->formFields as $field) {
            $formFieldConfig[] = $field->getConfiguration();
        }

        return [
            'url' => $this->url,
            'buttonText' => $this->buttonText,
            'title' => $this->title,
            'message' => $this->message,
            'confirmText' => $this->confirmText,
            'cancelText' => $this->cancelText,
            'formFields' => $formFieldConfig,
            'className' => $this->className,
            'REQUEST_TOKEN' => $this->requestToken,
        ];
    }

    /**
     * @param string $url
     */
    public function setUrl(string $url): void
    {
        $this->url = $url;
    }

    /**
     * @param string $buttonText
     */
    public function setButtonText(string $buttonText): void
    {
        $this->buttonText = $buttonText;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @param string $message
     */
    public function setMessage(string $message): void
    {
        $this->message = $message;
    }

    /**
     * @param string $confirmText
     */
    public function setConfirmText(string $confirmText): void
    {
        $this->confirmText = $confirmText;
    }

    /**
     * @param string $cancelText
     */
    public function setCancelText(string $cancelText): void
    {
        $this->cancelText = $cancelText;
    }

    /**
     * @param ConfigurationInterface $formField
     */
    public function addFormField(ConfigurationInterface $formField)
    {
        $this->formFields[] = $formField;
    }

    /**
     * @param ConfigurationInterface ...$formFields
     */
    public function setFormFields(ConfigurationInterface ...$formFields)
    {
        $this->formFields = $formFields;
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
    public function getRequestToken(): string
    {
        return $this->requestToken;
    }

    /**
     * @param string $requestToken
     */
    public function setRequestToken(string $requestToken): void
    {
        $this->requestToken = $requestToken;
    }
}
