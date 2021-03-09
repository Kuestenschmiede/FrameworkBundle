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
namespace con4gis\FrameworkBundle\Classes\TileFields;

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
     * The field this fields display depends upon, if there is one.
     * @var string
     */
    protected $conditionField = '';

    /**
     * The value of the conditionField for which this field is displayed.
     * @var string
     */
    protected $conditionValue = '';

    /**
     * If set, the given field will be checked for content. If it's not empty,
     * the content found there will be used as href for this field.
     * @var string
     */
    protected $externalLinkField = '';

    /**
     * If this switch is set, then the condition applies only to the external link.
     * @var bool
     */
    protected $externalFieldCondition = false;

    const TYPE = 'linkbutton';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['href'] = $this->href;
        $config['linkText'] = $this->linkText;
        $config['hrefFields'] = $this->hrefFields;
        $config['buttonClass'] = $this->buttonClass;
        $config['asyncCall'] = $this->asyncCall;
        $config['conditionField'] = $this->conditionField;
        $config['conditionValue'] = $this->conditionValue;
        $config['conditionalClasses'] = $this->conditionalClasses;
        $config['externalLinkField'] = $this->externalLinkField;
        $config['externalFieldCondition'] = $this->externalFieldCondition;
        $config['addDataAttributes'] = $this->addDataAttributes;
        $config['hookAfterClick'] = $this->hookAfterClick;
        $config['hookName'] = $this->hookName;

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
     * @return LinkButtonTileField
     */
    public function setHref(string $href): LinkButtonTileField
    {
        $this->href = $href;

        return $this;
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
     * @return string
     */
    public function getHrefField(): string
    {
        return $this->hrefField;
    }

    /**
     * @param string $hrefField
     * @return LinkButtonTileField
     */
    public function setHrefField(string $hrefField): LinkButtonTileField
    {
        $this->hrefFields[] = $hrefField;

        return $this;
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

    /**
     * @return bool
     */
    public function isExternalFieldCondition(): bool
    {
        return $this->externalFieldCondition;
    }

    /**
     * @param bool $externalFieldCondition
     */
    public function setExternalFieldCondition(bool $externalFieldCondition): void
    {
        $this->externalFieldCondition = $externalFieldCondition;
    }
}
