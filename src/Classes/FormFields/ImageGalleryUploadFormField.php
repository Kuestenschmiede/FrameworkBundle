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
namespace con4gis\FrameworkBundle\Classes\FormFields;

class ImageGalleryUploadFormField extends FormField
{
    const TYPE = 'image-gallery';

    /**
     * The maximum amount of images in this gallery. This value determines how many
     * upload fields are shown in the form.
     * @var int
     */
    private $maxImages = 10;

    protected $titleFileTooBig = '';
    protected $textFileTooBig = '';

    protected $targetWidth = '50vw';
    protected $targetHeight = 'auto';

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['maxImages'] = $this->maxImages;
        $conf['titleFileTooBig'] = $this->titleFileTooBig;
        $conf['textFileTooBig'] = $this->textFileTooBig;
        $conf['targetWidth'] = $this->targetWidth;
        $conf['targetHeight'] = $this->targetHeight;

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
     */
    public function setMaxImages(int $maxImages): void
    {
        $this->maxImages = $maxImages;
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
    public function getTargetWidth(): string
    {
        return $this->targetWidth;
    }

    /**
     * @param string $targetWidth
     */
    public function setTargetWidth(string $targetWidth): void
    {
        $this->targetWidth = $targetWidth;
    }

    /**
     * @return string
     */
    public function getTargetHeight(): string
    {
        return $this->targetHeight;
    }

    /**
     * @param string $targetHeight
     */
    public function setTargetHeight(string $targetHeight): void
    {
        $this->targetHeight = $targetHeight;
    }

}
