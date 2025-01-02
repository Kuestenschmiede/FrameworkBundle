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

class AsynchronousImageGalleryUploadFormField extends FormField
{
    const TYPE = 'asynchronous-image-gallery';

    /**
     * The maximum amount of images in this gallery. This value determines how many
     * upload fields are shown in the form.
     * @var int
     */
    protected $maxImages = 10;

    protected $uploadUrl = '';

    protected $titleFileTooBig = '';
    protected $textFileTooBig = '';

    protected $removeImageUrl = '';

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['maxImages'] = $this->maxImages;
        $conf['uploadUrl'] = $this->uploadUrl;
        $conf['titleFileTooBig'] = $this->titleFileTooBig;
        $conf['textFileTooBig'] = $this->textFileTooBig;
        $conf['removeImageUrl'] = $this->removeImageUrl;

        return $conf;
    }

    /**
     * @return int
     */
    public function getMaxImages(): int
    {
        return $this->maxImages;
    }

    /**
     * @param int $maxImages
     * @return AsynchronousImageGalleryUploadFormField
     */
    public function setMaxImages(int $maxImages): AsynchronousImageGalleryUploadFormField
    {
        $this->maxImages = $maxImages;

        return $this;
    }

    /**
     * @return string
     */
    public function getUploadUrl(): string
    {
        return $this->uploadUrl;
    }

    /**
     * @param string $uploadUrl
     * @return AsynchronousImageGalleryUploadFormField
     */
    public function setUploadUrl(string $uploadUrl): AsynchronousImageGalleryUploadFormField
    {
        $this->uploadUrl = $uploadUrl;

        return $this;
    }

    /**
     * @return string
     */
    public function getTitleFileTooBig(): string
    {
        return $this->titleFileTooBig;
    }

    /**
     * @param string $titleFileTooBig
     */
    public function setTitleFileTooBig(string $titleFileTooBig): void
    {
        $this->titleFileTooBig = $titleFileTooBig;
    }

    /**
     * @return string
     */
    public function getTextFileTooBig(): string
    {
        return $this->textFileTooBig;
    }

    /**
     * @param string $textFileTooBig
     */
    public function setTextFileTooBig(string $textFileTooBig): void
    {
        $this->textFileTooBig = $textFileTooBig;
    }

    /**
     * @return string
     */
    public function getRemoveImageUrl(): string
    {
        return $this->removeImageUrl;
    }

    /**
     * @param string $removeImageUrl
     */
    public function setRemoveImageUrl(string $removeImageUrl): void
    {
        $this->removeImageUrl = $removeImageUrl;
    }
}
