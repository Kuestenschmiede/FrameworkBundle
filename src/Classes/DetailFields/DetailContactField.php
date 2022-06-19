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
namespace con4gis\FrameworkBundle\Classes\DetailFields;

class DetailContactField extends DetailField
{
    private $emailFieldName = '';

    private $phoneFieldName = '';

    private $websiteFieldName = '';

    private $websiteTextFieldName = '';

    private $openingTimesFieldName = '';

    /**
     * If set, the field will display location data, found in the fields that start with this prefix.
     * The fields are expected to have names like "{prefix}Zip" and "{prefix}City" etc.
     * @var string
     */
    private $addressFieldnamePrefix = '';

    /**
     * Will be used if the above prefix is not able to get data.
     * @var string
     */
    private $addressFieldnameFallbackPrefix = '';

    private $withSocialMedia = false;

    /**
     * Field list of DetailLinkFields, that should be displayed in the contact legend.
     * @var array
     */
    private $socialMediaFields = [];

    const TYPE = 'contact';

    public function getConfiguration()
    {
        $conf = parent::getConfiguration();
        $conf['emailFieldName'] = $this->emailFieldName;
        $conf['phoneFieldName'] = $this->phoneFieldName;
        $conf['websiteFieldName'] = $this->websiteFieldName;
        $conf['websiteTextFieldName'] = $this->websiteTextFieldName;
        $conf['openingTimesFieldName'] = $this->openingTimesFieldName;
        $conf['addressFieldnamePrefix'] = $this->addressFieldnamePrefix;
        $conf['addressFieldnameFallbackPrefix'] = $this->addressFieldnameFallbackPrefix;
        $conf['withSocialMedia'] = $this->withSocialMedia;
        $conf['socialMediaFields'] = [];
        foreach ($this->socialMediaFields as $field) {
            $conf['socialMediaFields'][] = $field->getConfiguration();
        }

        return $conf;
    }

    /**
     * @return string
     */
    public function getEmailFieldName(): string
    {
        return $this->emailFieldName;
    }

    /**
     * @param string $emailFieldName
     */
    public function setEmailFieldName(string $emailFieldName): void
    {
        $this->emailFieldName = $emailFieldName;
    }

    /**
     * @return string
     */
    public function getPhoneFieldName(): string
    {
        return $this->phoneFieldName;
    }

    /**
     * @param string $phoneFieldName
     */
    public function setPhoneFieldName(string $phoneFieldName): void
    {
        $this->phoneFieldName = $phoneFieldName;
    }

    /**
     * @return string
     */
    public function getWebsiteFieldName(): string
    {
        return $this->websiteFieldName;
    }

    /**
     * @param string $websiteFieldName
     */
    public function setWebsiteFieldName(string $websiteFieldName): void
    {
        $this->websiteFieldName = $websiteFieldName;
    }

    /**
     * @return string
     */
    public function getWebsiteTextFieldName(): string
    {
        return $this->websiteTextFieldName;
    }

    /**
     * @param string $websiteTextFieldName
     */
    public function setWebsiteTextFieldName(string $websiteTextFieldName): void
    {
        $this->websiteTextFieldName = $websiteTextFieldName;
    }

    /**
     * @return string
     */
    public function getOpeningTimesFieldName(): string
    {
        return $this->openingTimesFieldName;
    }

    /**
     * @param string $openingTimesFieldName
     */
    public function setOpeningTimesFieldName(string $openingTimesFieldName): void
    {
        $this->openingTimesFieldName = $openingTimesFieldName;
    }

    /**
     * @return string
     */
    public function getAddressFieldnamePrefix(): string
    {
        return $this->addressFieldnamePrefix;
    }

    /**
     * @param string $addressFieldnamePrefix
     */
    public function setAddressFieldnamePrefix(string $addressFieldnamePrefix): void
    {
        $this->addressFieldnamePrefix = $addressFieldnamePrefix;
    }

    /**
     * @return string
     */
    public function getAddressFieldnameFallbackPrefix(): string
    {
        return $this->addressFieldnameFallbackPrefix;
    }

    /**
     * @param string $addressFieldnameFallbackPrefix
     */
    public function setAddressFieldnameFallbackPrefix(string $addressFieldnameFallbackPrefix): void
    {
        $this->addressFieldnameFallbackPrefix = $addressFieldnameFallbackPrefix;
    }

    /**
     * @return bool
     */
    public function isWithSocialMedia(): bool
    {
        return $this->withSocialMedia;
    }

    /**
     * @param bool $withSocialMedia
     */
    public function setWithSocialMedia(bool $withSocialMedia): void
    {
        $this->withSocialMedia = $withSocialMedia;
    }

    /**
     * @return array
     */
    public function getSocialMediaFields(): array
    {
        return $this->socialMediaFields;
    }

    /**
     * @param array $socialMediaFields
     */
    public function setSocialMediaFields(array $socialMediaFields): void
    {
        $this->socialMediaFields = $socialMediaFields;
    }

    public function addSocialMediaField(DetailLinkField $field)
    {
        $this->socialMediaFields[] = $field;
    }
}
