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