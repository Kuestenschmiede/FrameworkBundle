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
namespace con4gis\FrameworkBundle\Classes\TableFields;

class ModalDetailButtonTableField extends TableField
{
    private $buttonLabel = '';
    private $confirmButtonText = '';

    const TYPE = 'modal-detail-button';

    public function getConfiguration(): array
    {
        $config = parent::getConfiguration();
        $config['buttonLabel'] = $this->buttonLabel;
        $config['confirmButtonText'] = $this->confirmButtonText;

        return $config;
    }

    /**
     * @return string
     */
    public function getButtonLabel(): string
    {
        return $this->buttonLabel;
    }

    /**
     * @param string $buttonLabel
     */
    public function setButtonLabel(string $buttonLabel): void
    {
        $this->buttonLabel = $buttonLabel;
    }

    /**
     * @return string
     */
    public function getConfirmButtonText(): string
    {
        return $this->confirmButtonText;
    }

    /**
     * @param string $confirmButtonText
     */
    public function setConfirmButtonText(string $confirmButtonText): void
    {
        $this->confirmButtonText = $confirmButtonText;
    }
}
