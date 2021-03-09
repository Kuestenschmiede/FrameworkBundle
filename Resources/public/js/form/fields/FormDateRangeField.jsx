/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        7
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component} from "react";
import checkIfFieldIsRendered from "../../util/conditions";
import FormDatepickerField from "./FormDatepickerField.jsx";

export default class FormDateRangeField extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    // check condition
    if (!checkIfFieldIsRendered(this.props.field, this.props.data)) {
      return null;
    }

    let fromField = this.createFromField();
    let untilField = this.createUntilField();


    let description = null;
    let descriptionLink = null;
    if (this.props.field.descriptionLink && this.props.field.descriptionLinkLabel) {
      descriptionLink = <a className={"form-description-link btn btn-info btn-sm"} href={this.props.field.descriptionLink} target="_blank"> {this.props.field.descriptionLinkLabel}</a>;
    }
    if (this.props.field.description) {
      description = (<span className={"c4g-field-description c4g-form-text"}>{this.props.field.description} {descriptionLink}</span>);
    }

    return (
      <div className={this.props.field.className}>
        <div className={this.props.field.headline.headlineClass}>{this.props.field.headline}</div>
        <FormDatepickerField field={fromField} data={this.props.data} form={this.props.form} errorText={this.props.errorText}/>
        <FormDatepickerField field={untilField} data={this.props.data} form={this.props.form} errorText={this.props.errorText}/>
        {description}
      </div>
    );
  }

  createFromField() {
    let field = JSON.parse(JSON.stringify(this.props.field));
    field.name = this.props.field.fromFieldname;
    field.placeholderText = this.props.field.fromPlaceholderText;

    return this.transformField(field);
  }

  createUntilField() {
    let field = JSON.parse(JSON.stringify(this.props.field));
    field.name = this.props.field.untilFieldname;
    field.placeholderText = this.props.field.untilPlaceholderText;

    return this.transformField(field);
  }

  transformField(field) {
    // we do not want duplicated labels etc.
    field.label = "";
    field.description = "";

    return field;
  }
}