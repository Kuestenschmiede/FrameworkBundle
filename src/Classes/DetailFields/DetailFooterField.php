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
namespace con4gis\FrameworkBundle\Classes\DetailFields;

class DetailFooterField extends DetailField
{
    private $footerText = '';
    private $footerTextClass = '';

    /**
     * @var DetailFooterFieldButton[]
     */
    private $footerButtons = [];

    const TYPE = 'footer';

    public function getConfiguration()
    {
        $config = parent::getConfiguration();
        $config['footerText'] = $this->footerText;
        $config['footerTextClass'] = $this->footerTextClass;
        foreach ($this->footerButtons as $footerButton) {
            $config['footerButtons'][] = $footerButton->getConfiguration();
        }

        return $config;
    }

    /**
     * @return string
     */
    public function getFooterText(): string
    {
        return $this->footerText;
    }

    /**
     * @param string $footerText
     */
    public function setFooterText(string $footerText): void
    {
        $this->footerText = $footerText;
    }

    /**
     * @return string
     */
    public function getFooterTextClass(): string
    {
        return $this->footerTextClass;
    }

    /**
     * @param string $footerTextClass
     */
    public function setFooterTextClass(string $footerTextClass): void
    {
        $this->footerTextClass = $footerTextClass;
    }

    /**
     * @return DetailFooterFieldButton[]
     */
    public function getFooterButtons(): array
    {
        return $this->footerButtons;
    }

    /**
     * @param DetailFooterFieldButton[] $footerButtons
     */
    public function setFooterButtons(array $footerButtons): void
    {
        $this->footerButtons = $footerButtons;
    }
}
