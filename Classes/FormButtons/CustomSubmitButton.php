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
namespace con4gis\FrameworkBundle\Classes\FormButtons;

class CustomSubmitButton extends FormButton
{
    const TYPE = 'custom-submit';

    /**
     * The URL that should be called on button click.
     * @var string
     */
    private $url = '';

    /**
     * Redirecting to this URL after requesting $url successfully, if not empty.
     * @var string
     */
    private $redirectUrl = '';

    public function getConfiguration()
    {
        $conf = parent::getConfiguration();
        $conf['url'] = $this->url;
        $conf['redirectUrl'] = $this->redirectUrl;

        return $conf;
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
     */
    public function setUrl(string $url): void
    {
        $this->url = $url;
    }

    /**
     * @return string
     */
    public function getRedirectUrl(): string
    {
        return $this->redirectUrl;
    }

    /**
     * @param string $redirectUrl
     */
    public function setRedirectUrl(string $redirectUrl): void
    {
        $this->redirectUrl = $redirectUrl;
    }
}
