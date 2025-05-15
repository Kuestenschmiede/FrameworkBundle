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
namespace con4gis\FrameworkBundle\Classes\Forms;

class ToggleableForm implements ToggleableFormInterface
{
    private $form;
    private $toggleableBaseClass = '';
    private $toggleableOnLabel = '';
    private $toggleableOffLabel = '';
    private $toggleableOnClass = '';

    public function __construct(FormInterface $form)
    {
        $this->form = $form;
    }

    public function getConfiguration(): array
    {
        $config = $this->form->getConfiguration();
        $config['toggleableLayout'] = true;
        $config['toggleableBaseClass'] = $this->toggleableBaseClass;
        $config['toggleableOnLabel'] = $this->toggleableOnLabel;
        $config['toggleableOffLabel'] = $this->toggleableOffLabel;
        $config['toggleableOnClass'] = $this->toggleableOnClass;

        return $config;
    }

    public function getName(): string
    {
        return $this->form->getName();
    }

    public function setName(string $name): void
    {
        $this->form->setName($name);
    }

    public function getHeadline(): string
    {
        return $this->form->getHeadline();
    }

    public function setHeadline(string $headline): void
    {
        $this->form->setHeadline($headline);
    }

    public function getMethod(): string
    {
        return $this->form->getMethod();
    }

    public function setMethod(string $method): void
    {
        $this->form->setMethod($method);
    }

    public function getMapData()
    {
        return $this->form->getMapData();
    }

    public function setMapData($mapData): void
    {
        $this->form->setMapData($mapData);
    }

    public function getClass(): string
    {
        return $this->form->getClass();
    }

    public function setClass(string $class): void
    {
        $this->form->setClass($class);
    }

    public function getContainerRow(): bool
    {
        return $this->form->getContainerRow();
    }

    public function setContainerRow(bool $containerRow): void
    {
        $this->form->setContainerRow($containerRow);
    }

    public function isRenderAsForm(): bool
    {
        return $this->form->isRenderAsForm();
    }

    public function setRenderAsForm(bool $renderAsForm): void
    {
        $this->form->setRenderAsForm($renderAsForm);
    }

    public function isHidden(): bool
    {
        return $this->form->isHidden();
    }

    public function setHidden(bool $hidden): void
    {
        $this->form->setHidden($hidden);
    }

    public function getButtonWrapperClass(): string
    {
        return $this->form->getButtonWrapperClass();
    }

    public function setButtonWrapperClass(string $buttonWrapperClass): void
    {
        $this->form->setButtonWrapperClass($buttonWrapperClass);
    }

    /**
     * @return string
     */
    public function getToggleableBaseClass(): string
    {
        return $this->toggleableBaseClass;
    }

    /**
     * @param string $toggleableBaseClass
     */
    public function setToggleableBaseClass(string $toggleableBaseClass): void
    {
        $this->toggleableBaseClass = $toggleableBaseClass;
    }

    /**
     * @return string
     */
    public function getToggleableOnLabel(): string
    {
        return $this->toggleableOnLabel;
    }

    /**
     * @param string $toggleableOnLabel
     */
    public function setToggleableOnLabel(string $toggleableOnLabel): void
    {
        $this->toggleableOnLabel = $toggleableOnLabel;
    }

    /**
     * @return string
     */
    public function getToggleableOffLabel(): string
    {
        return $this->toggleableOffLabel;
    }

    /**
     * @param string $toggleableOffLabel
     */
    public function setToggleableOffLabel(string $toggleableOffLabel): void
    {
        $this->toggleableOffLabel = $toggleableOffLabel;
    }

    /**
     * @return string
     */
    public function getToggleableOnClass(): string
    {
        return $this->toggleableOnClass;
    }

    /**
     * @param string $toggleableOnClass
     */
    public function setToggleableOnClass(string $toggleableOnClass): void
    {
        $this->toggleableOnClass = $toggleableOnClass;
    }
}
