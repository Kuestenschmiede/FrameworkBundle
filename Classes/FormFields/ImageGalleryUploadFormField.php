<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
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

    public function getConfiguration(): array
    {
        $conf = parent::getConfiguration();
        $conf['maxImages'] = $this->maxImages;
        $conf['titleFileTooBig'] = $this->titleFileTooBig;
        $conf['textFileTooBig'] = $this->textFileTooBig;

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
}
