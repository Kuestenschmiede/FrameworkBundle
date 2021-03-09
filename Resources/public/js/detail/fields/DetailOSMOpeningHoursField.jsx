/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component} from "react";
import opening_hours from "opening_hours";

export default class DetailOSMOpeningHoursField extends Component {
  constructor(props) {
    super(props);

    this.alwaysOpenStrings = [
      "24/7",
      "Mo-Su 00:00-00:00",
      "Mo - Su 00:00-00:00",
      "Mo-Su 00:00 - 00:00",
      "Mo - Su 00:00 - 00:00"
    ];
  }

  render() {

    let osmString = this.props.data[this.props.field.name];
    let osmStringReadable = '';
    let osmOh = null;
    let output = null;
    let daysNode = null;
    let hint = null;
    let hintNode = null;
    let osmNode = null;
    let days = [];
    if (osmString) {
      try {
        osmString = osmString.replace("\\", "");
        let doubleQuoteIdx = osmString.indexOf("\"");
        if (doubleQuoteIdx !== -1) {
          hint = osmString.substring(doubleQuoteIdx + 1, osmString.indexOf("\"", doubleQuoteIdx + 1));
          osmString = osmString.replace(hint, "");
          while (osmString.indexOf("\"") !== -1) {
            osmString = osmString.replace("\"", "");
          }
         }
        osmOh = new opening_hours(osmString, {address: {country_code: "de"}});
      } catch (e) {
        daysNode = osmString;
      }
      if (osmOh) {
        osmStringReadable = this.getReadableState("", "", osmOh, osmString);
        let outputArr = this.getOpeningIntervalsForThisWeek(osmOh,osmString);
        if (outputArr.length === 0) {
          daysNode = null;
        } else {
          let today = new Date();
          let day = today.getDay();
          let first = 0;
          let weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
          let sortedDays = [];

          first = day;
          for (let i = day; i < 7; i++) {
            sortedDays.push(i);
          }

          for (let i = 0; i < day; i++) {
            sortedDays.push(i);
          }

          for (let i = 0; i < sortedDays.length; i++) {
            let cnt = 0;
            let dayoutput = [<div key={(i + 1)} className={"opening-hours-day"}>{weekdays[sortedDays[i]]}</div>];
            for (let j = 0; j < outputArr.length; j++) {
              if (outputArr[j][0] === sortedDays[i]) {
                let day = <div key={(j + 2) * 100} className={"opening-hours-day-interval"}>{outputArr[j][1]}</div>;
                dayoutput.push(day);
                cnt++;
              }
            }

            if (cnt === 0) {
              let day = <div key={(i + 1) + 300} className={"opening-hours-day-interval"}>Geschlossen</div>;
              dayoutput.push(day);
            }

            days.push(<div className={"opening-hours-day-entry"} key={(i + 3) * 1000}>{dayoutput}</div>);
          }
          daysNode = <div key={1} className={"opening-hours-days"}>{days}</div>;
        }
      }
    }
    if (osmStringReadable !== null) {
      osmNode = <div key={2} className={"opening-hours-opened-state"}>{osmStringReadable}</div>;
    }
    if (hint !== null) {
      hintNode = <div key={3} className={"opening-hours-opened-hint"}>{hint}</div>;
    }
    if (osmStringReadable.indexOf(hint) !== -1) {
      // hint is substring of osmStringReadable
      // so do not show it
      hintNode = null;
    }
    // check for "string only"
    if (daysNode === "") {
      daysNode = null;
    }

    // check for 24/7 opening
    if (this.alwaysOpenStrings.includes(osmString)) {
      daysNode = "Wir haben rund um die Uhr für Sie geöffnet.";
      osmStringReadable = "";
    }

    return (
        <div className={"opening-hours"}>
          <h3 key={0} className={"opening-hours-headline"}>{"Öffnungszeiten:"}</h3>
          {daysNode}
          <div className={"opening-hours-opened"}>
            {osmNode}
            {hintNode}
          </div>
        </div>
    );
  }

  //ToDo translation
  getReadableState(startString, endString, oh, osmString) {
    var output = '';
    if (oh.getUnknown()) {
      let comment = oh.getComment();
      if (comment) {
        if (comment === "Specified as open end. Closing time was guessed.") {
          if (osmString && (osmString[osmString.length-1] === '+')) {
            comment = "Open End"
          } else {
            comment = "Spezifiziert als offenes Ende. Schließungszeit wurde erraten";
          }
        }
      }

      output += ' Wir haben vielleicht geöffnet,'
          + (comment ? ' aber das hängt ab von: "' + comment + '"' : '');
    } else {
      output += ' ' + (oh.getState() ? 'Wir haben zurzeit geöffnet' : 'Wir haben zurzeit geschlossen')
          + (comment ? ', comment "' + comment + '"' : '');
    }

    let state      = oh.getState(); // we use current date
    let unknown    = oh.getUnknown();
    let comment    = oh.getComment();
    let nextchange = oh.getNextChange();
    if (!state) {
      if (typeof nextchange !== 'undefined' && (nextchange.getHours().toString() !== '0')) {
        let nextday = nextchange.getDate();
        let nextmonth = nextchange.getMonth() + 1;
        let nexthour = nextchange.getHours().toString().padStart(2, '0');
        let nextminute = nextchange.getMinutes().toString().padStart(2, '0');

        let today = new Date();
        if ((today.getDate() === nextchange.getDate()) && (today.getMonth() === nextchange.getMonth()) && (today.getFullYear() === nextchange.getFullYear())) {
          output += ' und sind um ' + nexthour + ':' + nextminute + ' Uhr wieder für Sie da';
        } else if ((today.getDate()+1 === nextchange.getDate()) && (today.getMonth() === nextchange.getMonth()) && (today.getFullYear() === nextchange.getFullYear())) {
          output += ' und sind morgen um ' + nexthour + ':' + nextminute + ' Uhr wieder für Sie da';
        } else {
          output += ' und sind am ' + nextday + '.' + nextmonth + '. um ' + nexthour + ':' + nextminute + ' Uhr wieder für Sie da';
        }
      }
    }

    return startString + output + endString + '.';
  }

  getOpeningIntervalsForThisWeek(oh,osmString) {
    var firstDay = new Date();
    firstDay.setHours(0);
    firstDay.setMinutes(0);
    var first = firstDay.getDate();

    var lastDay = new Date();
    lastDay.setHours(23);
    lastDay.setMinutes(59);
    var last = lastDay.getDate() + 6;
    var firstday = new Date(firstDay.setDate(first));
    var lastday = new Date(lastDay.setDate(last));

    var intervals = oh.getOpenIntervals(firstday, lastday);
    // if (intervals && intervals.length === 1) {
    //   // case where only a string is set
    //   return [];
    // }
    if (intervals) {
      let intervalLength = intervals.length;

      let outputArr = [];

      for (let i = 0; i < intervalLength; i++) {
        let from = intervals[i][0];
        let to = intervals[i][1];
        let opening = intervals[i][2] == 'unknown' ? '' : intervals[i][2];
        let comment = intervals[i][3] == 'false' ? '' : intervals[i][3];

        let fromDate = new Date(from);
        let fromHour = fromDate.getHours().toString().padStart(2, '0');
        let fromMinute = fromDate.getMinutes().toString().padStart(2, '0');
        let fromStr = fromHour + ':' + fromMinute + ' Uhr - ';

        let toDate = new Date(to);
        let toHour = toDate.getHours().toString().padStart(2, '0');
        let toMinute = toDate.getMinutes().toString().padStart(2, '0');
        let toStr = toHour + ':' + toMinute + ' Uhr';
        if (osmString && (osmString[osmString.length-1] == '+')) {
          toStr = 'Open End';
        }

        outputArr[i] = new Array(fromDate.getDay(), fromStr + toStr);
      }

      return outputArr;
    }
  }
}