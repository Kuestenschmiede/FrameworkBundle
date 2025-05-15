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

class LinkButtonTileField extends TileField
{
    protected $href = '';
    protected $linkText = '';
    protected $hrefFields = [];
    protected $buttonClass = '';
    protected $asyncCall = false;
    protected $addDataAttributes = false;

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

    /**
     * Set additional classes depending on other field values. The format should be
     * 'fieldName' => 'class'
     * The check will be a boolean check, so if the value for 'fieldName' is true, the class will be added.
     * @var string
     */
    protected $conditionalClasses = [];

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

    /**
     * If set, the given field will be checked for content. If it's not empty,
     * the content found there will be used as href for this field.
     * @var string
     */
    protected $externalLinkField = '';
    protected $externalLinkFieldConditionField = [];
    protected $externalLinkFieldConditionValue = [];

    private $conditions = [];

    private string $redirectPageOnSuccess = '';

    const TYPE = 'linkbutton';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['href'] = $this->href;
        $config['linkText'] = $this->linkText;
        $config['hrefFields'] = $this->hrefFields;
        $config['buttonClass'] = $this->buttonClass;
        $config['asyncCall'] = $this->asyncCall;
        $config['conditionalClasses'] = $this->conditionalClasses;
        $config['externalLinkField'] = $this->externalLinkField;
        $config['externalLinkFieldConditionField'] = $this->externalLinkFieldConditionField;
        $config['externalLinkFieldConditionValue'] = $this->externalLinkFieldConditionValue;
        $config['addDataAttributes'] = $this->addDataAttributes;
        $config['hookAfterClick'] = $this->hookAfterClick;
        $config['hookName'] = $this->hookName;
        $config['redirectPageOnSuccess'] = $this->redirectPageOnSuccess;

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
    public function getHref(): string
    {
        return $this->href;
    }

    /**
     * @param string $href
     */
    public function setHref(string $href)
    {
        $this->href = $href;
    }

    /**
     * @return string
     */
    public function getLinkText(): string
    {
        return $this->linkText;
    }

    /**
     * @param string $linkText
     * @return LinkButtonTileField
     */
    public function setLinkText(string $linkText): LinkButtonTileField
    {
        $this->linkText = $linkText;

        return $this;
    }

    /**
     * @return array
     */
    public function getHrefFields(): array
    {
        return $this->hrefFields;
    }

    /**
     * @param string $hrefField
     */
    public function setHrefField(string $hrefField)
    {
        $this->hrefFields[] = $hrefField;
    }

    public function setHrefFields(array $hrefFields)
    {
        $this->hrefFields = $hrefFields;
    }

    /**
     * @return string
     */
    public function getButtonClass(): string
    {
        return $this->buttonClass;
    }

    /**
     * @param string $buttonClass
     */
    public function setButtonClass(string $buttonClass): void
    {
        $this->buttonClass = $buttonClass;
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

    /**
     * @return array
     */
    public function getExternalLinkFieldConditionField(): array
    {
        return $this->externalLinkFieldConditionField;
    }

    /**
     * @param string $externalLinkFieldConditionField
     */
    public function setExternalLinkFieldConditionField(string $externalLinkFieldConditionField): void
    {
        $this->externalLinkFieldConditionField[] = $externalLinkFieldConditionField;
    }

    /**
     * @return array
     */
    public function getExternalLinkFieldConditionValue(): array
    {
        return $this->externalLinkFieldConditionValue;
    }

    /**
     * @param string $externalLinkFieldConditionValue
     */
    public function setExternalLinkFieldConditionValue(string $externalLinkFieldConditionValue): void
    {
        $this->externalLinkFieldConditionValue[] = $externalLinkFieldConditionValue;
    }

    /**
     * @return string
     */
    public function getConditionalClasses(): string
    {
        return $this->conditionalClasses;
    }

    public function addConditionalClass($field, $class)
    {
        $this->conditionalClasses[$field] = $class;
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
     * @return bool
     */
    public function isAddDataAttributes(): bool
    {
        return $this->addDataAttributes;
    }

    /**
     * @param bool $addDataAttributes
     */
    public function setAddDataAttributes(bool $addDataAttributes): void
    {
        $this->addDataAttributes = $addDataAttributes;
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

    public function addCondition(ConfigurationInterface $condition)
    {
        $this->conditions[] = $condition;
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
}
