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
namespace con4gis\FrameworkBundle\Classes\FormButtons;

class AsynchronousSubmitButton extends FormButton
{
    const TYPE = 'asynchronous-submit';

    protected $url = '';

    public function __construct()
    {
        \Contao\System::loadLanguageFile('frontend');
        $this->caption = $GLOBALS['TL_LANG']['con4gis']['framework']['frontend']['button']['submit'];
    }

    public function getConfiguration()
    {
        $config = parent::getConfiguration();
        $config['url'] = $this->url;

        return $config;
    }

    /**
     * @return string
     */
    public function getUrl(): string
    {
        return $this->url;
    }

    /**
     * @param string $url
     * @return AsynchronousSubmitButton
     */
    public function setUrl(string $url): AsynchronousSubmitButton
    {
        $this->url = $url;

        return $this;
    }
}
