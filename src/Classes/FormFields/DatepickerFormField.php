<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\FrameworkBundle\Classes\FormFields;

class DatepickerFormField extends FormField
{
    protected $value = '';
    protected $clearable = false;
    protected $placeholderText = '';
    protected $closeOnScroll = true;
    protected $dateFormat = 'dd.MM.yyyy';
    protected $locale = 'de';

    const TYPE = 'datepicker';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['value'] = $this->value;
        $config['clearable'] = $this->clearable;
        $config['placeholderText'] = $this->placeholderText;
        $config['closeOnScroll'] = $this->closeOnScroll;
        $config['dateFormat'] = $this->dateFormat;
        $config['locale'] = $this->locale;

        return $config;
    }

    public function validate(array $parameters)
    {
        return true;
    }

    /**
     * @return string
     */
    public function getValue(): string
    {
        return $this->value;
    }

    /**
     * @param string $value
     * @return DatepickerFormField
     */
    public function setValue(string $value): DatepickerFormField
    {
        $this->value = $value;

        return $this;
    }

    /**
     * @return bool
     */
    public function isClearable(): bool
    {
        return $this->clearable;
    }

    /**
     * @param bool $clearable
     * @return DatepickerFormField
     */
    public function setClearable(bool $clearable = true): DatepickerFormField
    {
        $this->clearable = $clearable;

        return $this;
    }

    /**
     * @return string
     */
    public function getPlaceholderText(): string
    {
        return $this->placeholderText;
    }

    /**
     * @param string $placeholderText
     * @return DatepickerFormField
     */
    public function setPlaceholderText(string $placeholderText): DatepickerFormField
    {
        $this->placeholderText = $placeholderText;

        return $this;
    }

    /**
     * @return bool
     */
    public function isCloseOnScroll(): bool
    {
        return $this->closeOnScroll;
    }

    /**
     * @param bool $closeOnScroll
     * @return DatepickerFormField
     */
    public function setCloseOnScroll(bool $closeOnScroll = true): DatepickerFormField
    {
        $this->closeOnScroll = $closeOnScroll;

        return $this;
    }

    /**
     * @return string
     */
    public function getDateFormat(): string
    {
        return $this->dateFormat;
    }

    /**
     * @param string $dateFormat
     * @return DatepickerFormField
     */
    public function setDateFormat(string $dateFormat): DatepickerFormField
    {
        $this->dateFormat = $dateFormat;

        return $this;
    }

    /**
     * @return string
     */
    public function getLocale(): string
    {
        return $this->locale;
    }

    /**
     * @param string $locale
     */
    public function setLocale(string $locale): void
    {
        $this->locale = $locale;
    }
}
