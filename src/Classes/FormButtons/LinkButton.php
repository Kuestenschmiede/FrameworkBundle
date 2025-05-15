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
namespace con4gis\FrameworkBundle\Classes\FormButtons;

class LinkButton extends FormButton
{
    const TYPE = 'link';

    private $href = '';

    private $warnBeforeAction = false;

    private $warnTextHeadline = '';
    private $warnTextMessage = '';
    private $warnTextConfirm = '';
    private $warnTextCancel = '';

    public function getConfiguration()
    {
        $conf = parent::getConfiguration();
        $conf['href'] = $this->href;
        $conf['warnBeforeAction'] = $this->warnBeforeAction;
        $conf['warnTextHeadline'] = $this->warnTextHeadline;
        $conf['warnTextMessage'] = $this->warnTextMessage;
        $conf['warnTextConfirm'] = $this->warnTextConfirm;
        $conf['warnTextCancel'] = $this->warnTextCancel;

        return $conf;
    }

    /**
     * @return string
     */
    public function getHref(): string
    {
        return $this->href;
    }

    /**
     * @param string $href
     */
    public function setHref(string $href): void
    {
        $this->href = $href;
    }

    /**
     * @return bool
     */
    public function isWarnBeforeAction(): bool
    {
        return $this->warnBeforeAction;
    }

    /**
     * @param bool $warnBeforeAction
     */
    public function setWarnBeforeAction(bool $warnBeforeAction): void
    {
        $this->warnBeforeAction = $warnBeforeAction;
    }

    /**
     * @return string
     */
    public function getWarnTextHeadline(): string
    {
        return $this->warnTextHeadline;
    }

    /**
     * @param string $warnTextHeadline
     */
    public function setWarnTextHeadline(string $warnTextHeadline): void
    {
        $this->warnTextHeadline = $warnTextHeadline;
    }

    /**
     * @return string
     */
    public function getWarnTextMessage(): string
    {
        return $this->warnTextMessage;
    }

    /**
     * @param string $warnTextMessage
     */
    public function setWarnTextMessage(string $warnTextMessage): void
    {
        $this->warnTextMessage = $warnTextMessage;
    }

    /**
     * @return string
     */
    public function getWarnTextConfirm(): string
    {
        return $this->warnTextConfirm;
    }

    /**
     * @param string $warnTextConfirm
     */
    public function setWarnTextConfirm(string $warnTextConfirm): void
    {
        $this->warnTextConfirm = $warnTextConfirm;
    }

    /**
     * @return string
     */
    public function getWarnTextCancel(): string
    {
        return $this->warnTextCancel;
    }

    /**
     * @param string $warnTextCancel
     */
    public function setWarnTextCancel(string $warnTextCancel): void
    {
        $this->warnTextCancel = $warnTextCancel;
    }
}
