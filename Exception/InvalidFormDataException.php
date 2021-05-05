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

namespace con4gis\FrameworkBundle\Exception;


class InvalidFormDataException extends \Exception
{
    private $fieldErrors = [];
    
    /**
     * InvalidFormDataException constructor.
     */
    public function __construct($message = "", $code = 0, \Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
    
    
    /**
     * @return array
     */
    public function getFieldErrors(): array
    {
        return $this->fieldErrors;
    }
    
    /**
     * @param array $fieldErrors
     */
    public function setFieldErrors(array $fieldErrors): void
    {
        $this->fieldErrors = $fieldErrors;
    }
    
    public function addFieldError(string $field, string $errorMessage)
    {
        $this->fieldErrors[$field] = $errorMessage;
    }
}