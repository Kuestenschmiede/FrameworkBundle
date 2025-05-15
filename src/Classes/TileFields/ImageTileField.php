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

use con4gis\FrameworkBundle\Classes\Conditions\FieldValueCondition;
use con4gis\FrameworkBundle\Classes\ConfigurationInterface;

class ImageTileField extends TileField
{
    protected $altName = '';
    protected $imageSource = '';
    protected $imageAlt = '';
    protected $href = '';
    protected $hrefFields = [];
    protected $externalLinkField = '';
    protected $externalLinkFieldConditionField = '';
    protected $externalLinkFieldConditionValue = '';
    protected $asyncCall = false;
    protected $checkOrientation = true;

//    /**
//     * Set additional classes depending on other field values. The format should be
//     * 'fieldName' => 'class'
//     * The check will be a boolean check, so if the value for 'fieldName' is true, the class will be added.
//     * @var string
//     */
//    protected $conditionalClasses = [];

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

    private $conditions = [];

    /**
     * Dispatches a JS hook after the button was clicked.
     * @var bool
     */
    protected $hookAfterClick = false;

    /**
     * Name of the hook. It will be written into window.c4gHooks[$dispatchHookName].
     * @var string
     */
    protected $hookName = '';

    private string $redirectPageOnSuccess = '';

    const TYPE = 'image';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['altName'] = $this->altName;
        $config['imageSource'] = $this->imageSource;
        $config['imageAlt'] = $this->imageAlt;
        $config['href'] = $this->href;
        $config['externalLinkField'] = $this->externalLinkField;
        $config['externalLinkFieldConditionField'] = $this->externalLinkFieldConditionField;
        $config['externalLinkFieldConditionValue'] = $this->externalLinkFieldConditionValue;
        $config['hookAfterClick'] = $this->hookAfterClick;
        $config['hookName'] = $this->hookName;
        $config['redirectPageOnSuccess'] = $this->redirectPageOnSuccess;
        $config['hrefFields'] = $this->hrefFields;
        $config['asyncCall'] = $this->asyncCall;
        $config['checkOrientation'] = $this->checkOrientation;

        if (!empty($this->conditionField && count($this->conditionField) === count($this->conditionValue))) {
            foreach ($this->conditionField as $key => $field) {
                $this->addCondition(new FieldValueCondition($this->conditionField[$key], $this->conditionValue[$key]));
            }
        }

        if (!empty($this->conditions)) {
            $conditions = [];
            foreach ($this->conditions as $condition) {
                $conditions[] = $condition->getConfiguration();
            }
            $config['conditions'] = $conditions;
        }

        return $config;
    }

    /**
     * @return string
     */
    public function getAltName(): string
    {
        return $this->altName;
    }

    /**
     * @param string $altName
     * @return ImageTileField
     */
    public function setAltName(string $altName): ImageTileField
    {
        $this->altName = $altName;

        return $this;
    }

    /**
     * @return string
     */
    public function getImageSource(): string
    {
        return $this->imageSource;
    }

    /**
     * @param string $imageSource
     * @return ImageTileField
     */
    public function setImageSource(string $imageSource): ImageTileField
    {
        $this->imageSource = $imageSource;

        return $this;
    }

    /**
     * @return string
     */
    public function getImageAlt(): string
    {
        return $this->imageAlt;
    }

    /**
     * @param string $imageAlt
     * @return ImageTileField
     */
    public function setImageAlt(string $imageAlt): ImageTileField
    {
        $this->imageAlt = $imageAlt;

        return $this;
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
     * @return array
     */
    public function getHrefFields(): array
    {
        return $this->hrefFields;
    }

    /**
     * @param array $hrefFields
     */
    public function setHrefFields(array $hrefFields): void
    {
        $this->hrefFields = $hrefFields;
    }

    /**
     * @param string $hrefField
     */
    public function setHrefField(string $hrefField)
    {
        $this->hrefFields[] = $hrefField;
    }

    /**
     * @return string
     */
    public function getExternalLinkField(): string
    {
        return $this->externalLinkField;
    }

    /**
     * @param string $externalLinkField
     */
    public function setExternalLinkField(string $externalLinkField): void
    {
        $this->externalLinkField = $externalLinkField;
    }

    /**
     * @return string
     */
    public function getExternalLinkFieldConditionField(): string
    {
        return $this->externalLinkFieldConditionField;
    }

    /**
     * @param string $externalLinkFieldConditionField
     */
    public function setExternalLinkFieldConditionField(string $externalLinkFieldConditionField): void
    {
        $this->externalLinkFieldConditionField = $externalLinkFieldConditionField;
    }

    /**
     * @return string
     */
    public function getExternalLinkFieldConditionValue(): string
    {
        return $this->externalLinkFieldConditionValue;
    }

    /**
     * @param string $externalLinkFieldConditionValue
     */
    public function setExternalLinkFieldConditionValue(string $externalLinkFieldConditionValue): void
    {
        $this->externalLinkFieldConditionValue = $externalLinkFieldConditionValue;
    }

    /**
     * @return bool
     */
    public function isAsyncCall(): bool
    {
        return $this->asyncCall;
    }

    /**
     * @param bool $asyncCall
     */
    public function setAsyncCall(bool $asyncCall): void
    {
        $this->asyncCall = $asyncCall;
    }

    /**
     * @return bool
     */
    public function isHookAfterClick(): bool
    {
        return $this->hookAfterClick;
    }

    /**
     * @param bool $hookAfterClick
     */
    public function setHookAfterClick(bool $hookAfterClick): void
    {
        $this->hookAfterClick = $hookAfterClick;
    }

    /**
     * @return string
     */
    public function getHookName(): string
    {
        return $this->hookName;
    }

    /**
     * @param string $hookName
     */
    public function setHookName(string $hookName): void
    {
        $this->hookName = $hookName;
    }

    /**
     * @return string
     */
    public function getRedirectPageOnSuccess(): string
    {
        return $this->redirectPageOnSuccess;
    }

    /**
     * @param string $redirectPageOnSuccess
     */
    public function setRedirectPageOnSuccess(string $redirectPageOnSuccess): void
    {
        $this->redirectPageOnSuccess = $redirectPageOnSuccess;
    }

    /**
     * @return array
     * @deprecated
     */
    public function getConditionField(): array
    {
        return $this->conditionField;
    }

    /**
     * @param string $conditionField
     * @deprecated
     */
    public function setConditionField(string $conditionField)
    {
        $this->conditionField[] = $conditionField;
    }

    /**
     * @return array
     * @deprecated
     */
    public function getConditionValue(): array
    {
        return $this->conditionValue;
    }

    /**
     * @param string $conditionValue
     * @deprecated
     */
    public function setConditionValue(string $conditionValue)
    {
        $this->conditionValue[] = $conditionValue;
    }

    public function addCondition(ConfigurationInterface $condition)
    {
        $this->conditions[] = $condition;
    }

    public function isCheckOrientation(): bool
    {
        return $this->checkOrientation;
    }

    public function setCheckOrientation(bool $checkOrientation): void
    {
        $this->checkOrientation = $checkOrientation;
    }
}
