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
namespace con4gis\FrameworkBundle\Classes\FormFields;

use con4gis\FrameworkBundle\Classes\ConfigurationInterface;

abstract class FormField implements ConfigurationInterface
{
    protected $name = '';
    protected $label = '';
    protected $description = '';
    protected $descriptionLink = '';
    protected $descriptionLinkLabel = '';
    protected $required = false;
    protected $cache = false;
    protected $entryPoint = '';

    /**
     * If true, the pattern has to match if field has a non empty value
     * @var bool
     */
    protected $patternRequired = false;
    protected $className = '';
    protected $hintText = '';

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
     * Should the field be wrapped inside an additional div?
     * @var bool
     */
    protected $wrappingDiv = false;

    /**
     * The CSS class for the wrapping div.
     * @var string
     */
    protected $wrappingDivClass = '';

    const TYPE = '';

    public function getConfiguration() : array
    {
        return [
            'name' => $this->name ?: '',
            'label' => $this->label ?: '',
            'description' => $this->description ?: '',
            'descriptionLink' => $this->descriptionLink ?: '',
            'descriptionLinkLabel' => $this->descriptionLinkLabel ?: '',
            'required' => $this->required ?: false,
            'requiredPattern' => $this->patternRequired ?: false,
            'className' => $this->className ?: '',
            'conditionField' => $this->conditionField ?: [],
            'conditionValue' => $this->conditionValue ?: [],
            'wrappingDiv' => $this->wrappingDiv ?: '',
            'wrappingDivClass' => $this->wrappingDivClass ?: '',
            'hintText' => $this->hintText ?: '',
            'type' => $this::TYPE ?: '',
            'cache' => $this->cache ?: false,
            'entryPoint' => $this->entryPoint ?: ''
        ];
    }

    public function validate(array $parameters)
    {
        if ($this->conditionField !== []) {
            foreach ($this->conditionField as $key => $condition) {
                if ($parameters[$condition] !== $this->conditionValue[$key]) {
                    return true;
                }
            }
        }

        return !$this->required || $parameters[$this->name] !== null;
    }

    public function checkPattern(array $data)
    {
        if ($this->patternRequired === false) {
            return true;
        }
        $patternMatches = preg_match('/' . $this->pattern . '/i', $data[$this->name]);
        if ($data[$this->getName()] && $patternMatches) {
            return true;
        }
        if ($data[$this->getName()] && !$patternMatches) {
            return false;
        }

        return true;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return FormField
     */
    public function setName(string $name): FormField
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getLabel(): string
    {
        return $this->label;
    }

    /**
     * @param string $label
     * @return FormField
     */
    public function setLabel(string $label): FormField
    {
        $this->label = $label;

        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     * @return FormField
     */
    public function setDescription(string $description): FormField
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return string
     */
    public function getDescriptionLink(): string
    {
        return $this->descriptionLink;
    }

    /**
     * @param string $descriptionLink
     * @return FormField
     */
    public function setDescriptionLink(string $descriptionLink): FormField
    {
        $this->descriptionLink = $descriptionLink;

        return $this;
    }

    /**
     * @return string
     */
    public function getDescriptionLinkLabel(): string
    {
        return $this->descriptionLinkLabel;
    }

    /**
     * @param string $descriptionLabel
     * @return FormField
     */
    public function setDescriptionLinkLabel(string $descriptionLabel): FormField
    {
        $this->descriptionLinkLabel = $descriptionLabel;

        return $this;
    }

    /**
     * @return bool
     */
    public function isRequired(): bool
    {
        return $this->required;
    }

    /**
     * @param bool $required
     * @return FormField
     */
    public function setRequired(bool $required = true): FormField
    {
        $this->required = $required;

        return $this;
    }

    /**
     * @return bool
     */
    public function isPatternRequired(): bool
    {
        return $this->patternRequired;
    }

    /**
     * @param bool $patternRequired
     */
    public function setPatternRequired(bool $patternRequired): void
    {
        $this->patternRequired = $patternRequired;
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
     * @return FormField
     */
    public function setClassName(string $className): FormField
    {
        $this->className = $className;

        return $this;
    }

    /**
     * @return string
     */
    public function getHintText(): string
    {
        return $this->hintText;
    }

    /**
     * @param string $hintText
     * @return FormField
     */
    public function setHintText(string $hintText): FormField
    {
        $this->hintText = $hintText;

        return $this;
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
     * @return FormField
     */
    public function setConditionField(string $conditionField): FormField
    {
        $this->conditionField[] = $conditionField;

        return $this;
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
     * @return FormField
     */
    public function setConditionValue(string $conditionValue): FormField
    {
        $this->conditionValue[] = $conditionValue;

        return $this;
    }

    /**
     * @return bool
     */
    public function isWrappingDiv(): bool
    {
        return $this->wrappingDiv;
    }

    /**
     * @param bool $wrappingDiv
     * @return FormField
     */
    public function setWrappingDiv(bool $wrappingDiv = true): FormField
    {
        $this->wrappingDiv = $wrappingDiv;

        return $this;
    }

    /**
     * @return string
     */
    public function getWrappingDivClass(): string
    {
        return $this->wrappingDivClass;
    }

    /**
     * @param string $wrappingDivClass
     * @return FormField
     */
    public function setWrappingDivClass(string $wrappingDivClass): FormField
    {
        $this->wrappingDivClass = $wrappingDivClass;

        return $this;
    }

    /**
     * @return bool
     */
    public function isCache(): bool
    {
        return $this->cache;
    }

    /**
     * @param bool $cache
     */
    public function setCache(bool $cache): void
    {
        $this->cache = $cache;
    }

    /**
     * @return string
     */
    public function getEntryPoint(): string
    {
        return $this->entryPoint;
    }

    /**
     * @param string $entryPoint
     */
    public function setEntryPoint(string $entryPoint): void
    {
        $this->entryPoint = $entryPoint;
    }
}
