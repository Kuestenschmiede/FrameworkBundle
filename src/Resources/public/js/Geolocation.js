/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

export function getGeolocation(fnCallback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fnCallback);
  } else {
    return false;
  }
}

export function calculateDistance(point1, point2) {
  let lon2 = parseFloat(point2[0]);
  let lon1 = parseFloat(point1[0]);
  let lat2 = parseFloat(point2[1]);
  let lat1 = parseFloat(point1[1]);

  // implement the haversine formula
  const R = 6371e3; // metres
  const phi1 = lat1 * Math.PI/180; // phi, lambda in radians
  const phi2 = lat2 * Math.PI/180;
  const deltaPhi = (lat2-lat1) * Math.PI/180;
  const deltaLambda = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
    Math.cos(phi1) * Math.cos(phi2) *
    Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c; // meters
}

export function formatDistance(distanceInMeters) {
  if (!distanceInMeters) {
    return distanceInMeters;
  }
  let unit = "m";
  if (distanceInMeters > 1000) {
    distanceInMeters /= 1000;
    unit = "km";
  }
  distanceInMeters = distanceInMeters.toFixed(2);
  return distanceInMeters.toString() + unit;
}

export function geolocationActive() {
  return !!(navigator.geolocation);
}