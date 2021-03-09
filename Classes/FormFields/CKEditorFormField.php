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

class CKEditorFormField extends FormField
{
    protected $placeholder = '';
    protected $paragraphLabel = '';
    protected $headingLabel = [];
    protected $numberedListLabel = '';
    protected $bulletedListLabel = '';
    protected $language = 'de';

    private $allowedTags = ['<h2>', '<h3>', '<p>', '<ul>', '<li>', '<ol>', '<strong>', '<i>'];

    const TYPE = 'ckeditor';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['placeholder'] = $this->placeholder;
        if ($this->paragraphLabel !== '') {
            $config['paragraphLabel'] = $this->paragraphLabel;
        } else {
            $config['paragraphLabel'] = $GLOBALS['TL_LANG']['con4gis']['framework']['ckeditor']['paragraph'];
        }
        if (count($this->headingLabel) > 0) {
            $config['headingLabel'] = $this->headingLabel;
        } else {
            $config['headingLabel'] = $GLOBALS['TL_LANG']['con4gis']['framework']['ckeditor']['heading'];
        }
        if ($this->bulletedListLabel !== '') {
            $config['bulletedListLabel'] = $this->bulletedListLabel;
        } else {
            $config['bulletedListLabel'] = $GLOBALS['TL_LANG']['con4gis']['framework']['ckeditor']['bulletedList'];
        }
        if ($this->numberedListLabel !== '') {
            $config['numberedListLabel'] = $this->numberedListLabel;
        } else {
            $config['numberedListLabel'] = $GLOBALS['TL_LANG']['con4gis']['framework']['ckeditor']['numberedList'];
        }
        $config['language'] = $this->language;

        return $config;
    }

    /**
     * @return string
     */
    public function getPlaceholder(): string
    {
        return $this->placeholder;
    }

    /**
     * @param string $placeholder
     * @return CKEditorFormField
     */
    public function setPlaceholder(string $placeholder): CKEditorFormField
    {
        $this->placeholder = $placeholder;

        return $this;
    }

    /**
     * @return string
     */
    public function getParagraphLabel(): string
    {
        return $this->paragraphLabel;
    }

    /**
     * @param string $paragraphLabel
     * @return CKEditorFormField
     */
    public function setParagraphLabel(string $paragraphLabel): CKEditorFormField
    {
        $this->paragraphLabel = $paragraphLabel;

        return $this;
    }

    /**
     * @return array
     */
    public function getHeadingLabel(): array
    {
        return $this->headingLabel;
    }

    /**
     * @param array $headingLabel
     * @return CKEditorFormField
     */
    public function setHeadingLabel(array $headingLabel): CKEditorFormField
    {
        $this->headingLabel = $headingLabel;

        return $this;
    }

    /**
     * @return string
     */
    public function getNumberedListLabel(): string
    {
        return $this->numberedListLabel;
    }

    /**
     * @param string $numberedListLabel
     */
    public function setNumberedListLabel(string $numberedListLabel): void
    {
        $this->numberedListLabel = $numberedListLabel;
    }

    /**
     * @return string
     */
    public function getBulletedListLabel(): string
    {
        return $this->bulletedListLabel;
    }

    /**
     * @param string $bulletedListLabel
     */
    public function setBulletedListLabel(string $bulletedListLabel): void
    {
        $this->bulletedListLabel = $bulletedListLabel;
    }

    /**
     * @return string
     */
    public function getLanguage(): string
    {
        return $this->language;
    }

    /**
     * @param string $language
     */
    public function setLanguage(string $language): void
    {
        $this->language = $language;
    }

    /**
     * @return string[]
     */
    public function getAllowedTags(): array
    {
        return $this->allowedTags;
    }

    /**
     * @param string[] $allowedTags
     */
    public function setAllowedTags(array $allowedTags): void
    {
        $this->allowedTags = $allowedTags;
    }
}
