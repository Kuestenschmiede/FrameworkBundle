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
namespace con4gis\FrameworkBundle\Classes\FormFields;

class PDFUploadFormField extends FormField
{
    const TYPE = 'pdf-upload';

    protected $titleFileTooBig = '';
    protected $textFileTooBig = '';
    protected $maxFileSize = -1;

    /**
     * Sets a changed flag in the submitted fileData object.
     * @var bool
     */
    protected $setChangedFlag = true;

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['titleFileTooBig'] = $this->titleFileTooBig;
        $conf['textFileTooBig'] = $this->textFileTooBig;
        $conf['maxFileSize'] = $this->maxFileSize;
        $conf['setChangedFlag'] = $this->setChangedFlag;

        return $conf;
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
     * @return int
     */
    public function getMaxFileSize(): int
    {
        return $this->maxFileSize;
    }

    /**
     * @param int $maxFileSize
     */
    public function setMaxFileSize(int $maxFileSize): void
    {
        $this->maxFileSize = $maxFileSize;
    }

    /**
     * @return bool
     */
    public function isSetChangedFlag(): bool
    {
        return $this->setChangedFlag;
    }

    /**
     * @param bool $setChangedFlag
     */
    public function setSetChangedFlag(bool $setChangedFlag): void
    {
        $this->setChangedFlag = $setChangedFlag;
    }
}
