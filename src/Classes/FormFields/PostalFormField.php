<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\FormFields;

/**
 * Class PostalFormField
 * Text form field to input postals. Has builtin postal validation (clientside).
 * @package con4gis\FrameworkBundle\Classes\FormFields
 */
class PostalFormField extends FormField
{
    /**
     * Load fieldlist from server when this field changes?
     * @var bool
     */
    protected $dynamicFieldlist = false;

    /**
     * URL for loading the fieldlist from server.
     * @var string
     */
    protected $dynamicFieldlistUrl = '';

    /**
     * Fields whose values should also be sent to the server for loading fields.
     * @var array
     */
    protected $dynamicFieldlistAdditionalFields = [];

    const TYPE = 'postal';

    /**
     * If true, the field will create a property called "$fieldName_valid" where the validation state
     * is stored.
     * @var bool
     */
    private $createValidationProperty = true;

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['createValidationProperty'] = $this->createValidationProperty;
        $conf['dynamicFieldlist'] = $this->dynamicFieldlist;
        $conf['dynamicFieldlistUrl'] = $this->dynamicFieldlistUrl;
        $conf['dynamicFieldlistAdditionalFields'] = $this->dynamicFieldlistAdditionalFields;

        return $conf;
    }

    /**
     * @return bool
     */
    public function isDynamicFieldlist(): bool
    {
        return $this->dynamicFieldlist;
    }

    /**
     * @param bool $dynamicFieldlist
     */
    public function setDynamicFieldlist(bool $dynamicFieldlist): void
    {
        $this->dynamicFieldlist = $dynamicFieldlist;
    }

    /**
     * @return string
     */
    public function getDynamicFieldlistUrl(): string
    {
        return $this->dynamicFieldlistUrl;
    }

    /**
     * @param string $dynamicFieldlistUrl
     */
    public function setDynamicFieldlistUrl(string $dynamicFieldlistUrl): void
    {
        $this->dynamicFieldlistUrl = $dynamicFieldlistUrl;
    }

    /**
     * @return array
     */
    public function getDynamicFieldlistAdditionalFields(): array
    {
        return $this->dynamicFieldlistAdditionalFields;
    }

    /**
     * @param array $dynamicFieldlistAdditionalFields
     */
    public function setDynamicFieldlistAdditionalFields(array $dynamicFieldlistAdditionalFields): void
    {
        $this->dynamicFieldlistAdditionalFields = $dynamicFieldlistAdditionalFields;
    }

    /**
     * @return bool
     */
    public function isCreateValidationProperty(): bool
    {
        return $this->createValidationProperty;
    }

    /**
     * @param bool $createValidationProperty
     */
    public function setCreateValidationProperty(bool $createValidationProperty): void
    {
        $this->createValidationProperty = $createValidationProperty;
    }
}
