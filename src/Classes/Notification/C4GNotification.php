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

namespace con4gis\FrameworkBundle\Classes\Notification;

use con4gis\FrameworkBundle\Exception\NotificationException;
use NotificationCenter\Model\Notification;

/**
 * Class C4GNotification
 * Class to simplify sending Notifications via the Notification Center
 * @package con4gis\FrameworkBundle\Classes\Notification
 */
class C4GNotification
{
    private array $tokens = [];
    private array $optionalTokens = [];

    /**
     * @throws NotificationException
     */
    public function __construct(array $notification)
    {
        foreach ($notification as $key => $value) {
            if (!is_array($value)) {
                throw new NotificationException("Incorrect configuration, '$key' must be an array.");
            }
            foreach ($value as $token) {
                $this->tokens[$token] = '';
            }
        }
    }

    /**
     * @throws NotificationException
     */
    public function setTokenValue(string $token, string $value)
    {
        if (is_string($this->tokens[$token]) === true) {
            $this->tokens[$token] = $value;
        } else {
            throw new NotificationException("Unknown token '$token'.");
        }
    }

    public function setOptionalToken(string $token)
    {
        $this->optionalTokens[] = $token;
    }

    /**
     * @throws NotificationException
     */
    public function send(array $notificationIds)
    {
        foreach ($this->tokens as $key => $token) {
            if ($token === '' && !in_array($key, $this->optionalTokens)) {
                throw new NotificationException("The token '$key' has not been defined.");
            }
        }

        foreach ($notificationIds as $notificationId) {
            $notificationModel = Notification::findByPk($notificationId);
            if ($notificationModel !== null) {
                $notificationModel->send($this->tokens);
            } else {
                throw new NotificationException("Could not find notification with id $notificationId.");
            }
        }
    }
}
