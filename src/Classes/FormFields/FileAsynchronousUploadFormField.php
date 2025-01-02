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

class FileAsynchronousUploadFormField extends FormField
{
    protected $fileFieldName = 'files';
    protected $max = 100;
    protected $maxFileSize = -1;
    protected $maxTotalFileSize = -1;
    protected $uploadUrl = '';
    protected $titleFileTooBig = '';
    protected $textFileTooBig = '';
    protected $removeImageUrl = '';

    const TYPE = 'asynchronous-fileupload';

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
        $config['removeImageUrl'] = $this->removeImageUrl;

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
     * @return FileAsynchronousUploadFormField
     */
    public function setFileFieldName(string $fileFieldName): FileAsynchronousUploadFormField
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
     * @return FileAsynchronousUploadFormField
     */
    public function setMax(int $max): FileAsynchronousUploadFormField
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
     * @return FileAsynchronousUploadFormField
     */
    public function setMaxFileSize(int $maxFileSize): FileAsynchronousUploadFormField
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
     * @return FileAsynchronousUploadFormField
     */
    public function setMaxTotalFileSize(int $maxTotalFileSize): FileAsynchronousUploadFormField
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
     * @return FileAsynchronousUploadFormField
     */
    public function setUploadUrl(string $uploadUrl): FileAsynchronousUploadFormField
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
