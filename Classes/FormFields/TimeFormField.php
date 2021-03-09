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

class TimeFormField extends FormField
{
    protected $value = '';

    const TYPE = 'time';

    public function getConfiguration() : array
    {
        $config = parent::getConfiguration();
        $config['value'] = $this->value;

        return $config;
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
     * @return TimeFormField
     */
    public function setValue(string $value): TimeFormField
    {
        $this->value = $value;

        return $this;
    }
}
