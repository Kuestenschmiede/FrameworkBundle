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
namespace con4gis\FrameworkBundle\Classes\Utility;

class RegularExpression
{
    const DIGIT = '^[0-9](\d*)$'; //Whole number, from 0 to infinite, no negatives and no separators.
    const DIGIT_NEG = '^[-]?[0-9](\d*)$'; //Whole number, but allowed to go negative.
    const NUMBER = '^[1-9](\d*)$'; //Whole number, from 1 to infinite, no negatives and no separators.
    const NUMBER_NO_SEP = '^[-]?[0-9](\d*)$';  //Whole number, not allowing thousand separators.
    const NUMBER_DOT_SEP = '^[-]?[1-9](\d*)((.)(\d{3}))*$';  //Whole number, allowing dots as thousand separators.
    const NUMBER_COMMA_SEP = '[-]?[1-9](\d*)((,)(\d{3}))*$';  //Whole numbers, allowing commas as thousand separators.
    const HEX_DEC_ID = '^[0-9A-Fa-f]*$'; //Hexadecimal IDs, e.g. 00A51B.
    const POSTAL = '^[0-9]{5}$';  //Zip Codes
    const EMAIL = '^[\w\-+]+(\.[\w\-+]+)*@\w+([.-]*\w+)*\.\w{2,6}$'; //EMail Addresses
    const PHONE = '^(\+|00|0)[1-9 ][0-9 \/\-\(\)\.]{7,}$'; //Phone numbers with brackets, slashes and so on
    const NAME = '^[\p{L}]{1}[- \p{L}]*[\p{L}]{1}$'; //Names, allows special letters (ä, á, etc.) as well as whitespaces and (-) unless they are at the end or beginning.
    const URL = '^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$'; //URL
    const YEAR = '^[1][90](\d{2})|[2][0](\d{2})$'; //Year, from 1900 to 20xx. Will also allow 29xx, so make sure to set a max value!
    const DATE_D_M_Y = '^([0-2][0-9]|[3][0-1])[.]([0][0-9]|[1][0-2])[.]([1][90](\d{2})|[2][0](\d{2}))$'; //Dates in DD.MM.YYYY format
}
