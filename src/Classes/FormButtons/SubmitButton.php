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

class SubmitButton extends FormButton
{
    protected $name = '';
    protected $value = '';
    const TYPE = 'submit';

    public function __construct()
    {
        \Contao\System::loadLanguageFile('frontend');
        $this->caption = $GLOBALS['TL_LANG']['con4gis']['framework']['frontend']['button']['submit'];
    }

    public function getConfiguration()
    {
        $config = parent::getConfiguration();
        $config['name'] = $this->name;
        $config['value'] = $this->value;

        return $config;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return SubmitButton
     */
    public function setName(string $name): SubmitButton
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getValue(): string
    {
        return $this->value;
    }

    /**
     * @param string $value
     * @return SubmitButton
     */
    public function setValue(string $value): SubmitButton
    {
        $this->value = $value;

        return $this;
    }
}
