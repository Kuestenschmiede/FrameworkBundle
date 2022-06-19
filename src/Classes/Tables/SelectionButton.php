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
namespace con4gis\FrameworkBundle\Classes\Tables;

use con4gis\FrameworkBundle\Classes\Forms\Form;

class SelectionButton implements \JsonSerializable
{
    private $label = '';

    /**
     * The form that should be rendered when the button is clicked.
     * @var array
     */
    private $form = [];

    /**
     * SelectionButton constructor.
     * @param string $label
     * @param array $form
     */
    public function __construct(string $label, array $form)
    {
        $this->label = $label;
        $this->form = $form;
    }

    /**
     * @return string
     */
    public function getLabel(): string
    {
        return $this->label;
    }

    /**
     * @param string $label
     */
    public function setLabel(string $label): void
    {
        $this->label = $label;
    }

    /**
     * @return array
     */
    public function getForm(): array
    {
        return $this->form;
    }

    /**
     * @param array $form
     */
    public function setForm(array $form): void
    {
        $this->form = $form;
    }

    public function jsonSerialize()
    {
        return [
            'label' => $this->label,
            'form' => $this->form,
        ];
    }
}
