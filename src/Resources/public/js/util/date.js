/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Parses a date in dd.mm.YYYY format and returns the unix timestamp representation.
 * @param dateString
 */
function parseDateToTimestamp(dateString) {
  let arrDate = dateString.split(".");
  let date = new Date(arrDate[2], arrDate[1], arrDate[0]);
  return date.getTime() / 1000;
}

export {
  parseDateToTimestamp
}