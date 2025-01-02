/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class ListTypeTileDescriptionPriceDateTimeField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let strikePrice = null;
    if (this.props.data[this.props.field.strikePriceName]) {
        strikePrice = <del className={"strikePrice"}>{this.props.data[this.props.field.strikePriceName]}</del>;
    }

    let price = null;
    if (this.props.data[this.props.field.priceName]) {
        price = <div className={"price"}>{this.props.data[this.props.field.priceName]}</div>;
    }

    let dateTime = null;
    let date = null;
    if (this.props.data[this.props.field.dateName]) {
        let time = null;
        if (this.props.data[this.props.field.timeName]) {
            time = <span className={"time"}>{this.props.data[this.props.field.timeName]}</span>;
        }
        date = <span className={"date"}>{this.props.data[this.props.field.dateName]}</span>;
        dateTime = <div className={"datetime"}>
            {date}
            {time}
        </div>;
    }

    return (
      <div className={"row"}>
        <div className={"col-12"} dangerouslySetInnerHTML={{__html: this.props.data[this.props.field.descriptionName]}}>
        </div>
        <div className={"col-12"}>
            {strikePrice}
            {price}
            {dateTime}
        </div>
      </div>
    );
  }
}