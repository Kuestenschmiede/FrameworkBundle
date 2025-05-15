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

class FileUploadFormField extends FormField
{
    protected $fileFieldName = 'files';
    protected $max = 100;
    protected $maxFileSize = -1;
    protected $maxTotalFileSize = -1;
    protected $uploadUrl = '';
    protected $titleFileTooBig = '';
    protected $textFileTooBig = '';
    protected $targetWidth = '50vw';
    protected $targetHeight = 'auto';

    const TYPE = 'fileupload';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['fileFieldName'] = $this->fileFieldName;
        $config['max'] = $this->max;
        $config['maxFileSize'] = $this->maxFileSize;
        $config['maxTotalFileSize'] = $this->maxTotalFileSize;
        $config['uploadUrl'] = $this->uploadUrl;
        $config['titleFileTooBig'] = $this->titleFileTooBig;
        $config['textFileTooBig'] = $this->textFileTooBig;
        $config['targetWidth'] = $this->targetWidth;
        $config['targetHeight'] = $this->targetHeight;

        return $config;
    }

    public function validate(array $parameters)
    {
        return !($this->required && $parameters[$this->name] === '');
    }

    /**
     * @return string
     */
    public function getFileFieldName(): string
    {
        return $this->fileFieldName;
    }

    /**
     * @param string $fileFieldName
     * @return FileUploadFormField
     */
    public function setFileFieldName(string $fileFieldName): FileUploadFormField
    {
        $this->fileFieldName = $fileFieldName;

        return $this;
    }

    /**
     * @return int
     */
    public function getMax(): int
    {
        return $this->max;
    }

    /**
     * @param int $max
     * @return FileUploadFormField
     */
    public function setMax(int $max): FileUploadFormField
    {
        $this->max = $max;

        return $this;
    }

    /**
     * @return int
     */
    public function getMaxFileSize(): int
    {
        return $this->maxFileSize;
    }

    /**
     * @param int $maxFileSize
     * @return FileUploadFormField
     */
    public function setMaxFileSize(int $maxFileSize): FileUploadFormField
    {
        $this->maxFileSize = $maxFileSize;

        return $this;
    }

    /**
     * @return int
     */
    public function getMaxTotalFileSize(): int
    {
        return $this->maxTotalFileSize;
    }

    /**
     * @param int $maxTotalFileSize
     * @return FileUploadFormField
     */
    public function setMaxTotalFileSize(int $maxTotalFileSize): FileUploadFormField
    {
        $this->maxTotalFileSize = $maxTotalFileSize;

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
     */
    public function setUploadUrl(string $uploadUrl): void
    {
        $this->uploadUrl = $uploadUrl;
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
