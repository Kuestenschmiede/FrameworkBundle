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

class DateRangeField extends FormField
{
    protected $fromFieldname = '';
    protected $untilFieldname = '';
    protected $fromPlaceholderText = '';
    protected $untilPlaceholderText = '';
    protected $closeOnScroll = true;
    protected $dateFormat = 'dd.MM.yyyy';
    protected $locale = 'de';
    protected $clearable = false;
    protected $fromValue = '';
    protected $untilValue = '';
    protected $headline = '';
    protected $headlineClass = '';
    protected $cache = false;

    const TYPE = 'daterange';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['clearable'] = $this->clearable;
        $config['fromPlaceholderText'] = $this->fromPlaceholderText;
        $config['untilPlaceholderText'] = $this->untilPlaceholderText;
        $config['closeOnScroll'] = $this->closeOnScroll;
        $config['dateFormat'] = $this->dateFormat;
        $config['locale'] = $this->locale;
        $config['fromFieldname'] = $this->fromFieldname;
        $config['fromValue'] = $this->fromValue;
        $config['untilFieldname'] = $this->untilFieldname;
        $config['untilValue'] = $this->untilValue;
        $config['headline'] = $this->headline;
        $config['headlineClass'] = $this->headlineClass;
        $config['cache'] = $this->cache;

        return $config;
    }

    /**
     * @return string
     */
    public function getFromFieldname(): string
    {
        return $this->fromFieldname;
    }

    /**
     * @param string $fromFieldname
     */
    public function setFromFieldname(string $fromFieldname): void
    {
        $this->fromFieldname = $fromFieldname;
    }

    /**
     * @return string
     */
    public function getUntilFieldname(): string
    {
        return $this->untilFieldname;
    }

    /**
     * @param string $untilFieldname
     */
    public function setUntilFieldname(string $untilFieldname): void
    {
        $this->untilFieldname = $untilFieldname;
    }

    /**
     * @return string
     */
    public function getFromPlaceholderText(): string
    {
        return $this->fromPlaceholderText;
    }

    /**
     * @param string $fromPlaceholderText
     */
    public function setFromPlaceholderText(string $fromPlaceholderText): void
    {
        $this->fromPlaceholderText = $fromPlaceholderText;
    }

    /**
     * @return string
     */
    public function getUntilPlaceholderText(): string
    {
        return $this->untilPlaceholderText;
    }

    /**
     * @param string $untilPlaceholderText
     */
    public function setUntilPlaceholderText(string $untilPlaceholderText): void
    {
        $this->untilPlaceholderText = $untilPlaceholderText;
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
     */
    public function setCloseOnScroll(bool $closeOnScroll): void
    {
        $this->closeOnScroll = $closeOnScroll;
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
     */
    public function setDateFormat(string $dateFormat): void
    {
        $this->dateFormat = $dateFormat;
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

    /**
     * @return bool
     */
    public function isClearable(): bool
    {
        return $this->clearable;
    }

    /**
     * @param bool $clearable
     */
    public function setClearable(bool $clearable): void
    {
        $this->clearable = $clearable;
    }

    /**
     * @return string
     */
    public function getFromValue(): string
    {
        return $this->fromValue;
    }

    /**
     * @param string $fromValue
     */
    public function setFromValue(string $fromValue): void
    {
        $this->fromValue = $fromValue;
    }

    /**
     * @return string
     */
    public function getUntilValue(): string
    {
        return $this->untilValue;
    }

    /**
     * @param string $untilValue
     */
    public function setUntilValue(string $untilValue): void
    {
        $this->untilValue = $untilValue;
    }

    /**
     * @return string
     */
    public function getHeadline(): string
    {
        return $this->headline;
    }

    /**
     * @param string $headline
     */
    public function setHeadline(string $headline): void
    {
        $this->headline = $headline;
    }

    /**
     * @return string
     */
    public function getHeadlineClass(): string
    {
        return $this->headlineClass;
    }

    /**
     * @param string $headlineClass
     */
    public function setHeadlineClass(string $headlineClass): void
    {
        $this->headlineClass = $headlineClass;
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
}
