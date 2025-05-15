/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import checkIfFieldIsRendered from "../../util/conditions";
import FormDatepickerField from "./FormDatepickerField.jsx";

export default class FormDateRangeField extends Component {

  constructor(props) {
    super(props);

    this.cacheFromField = this.cacheFromField.bind(this);
    this.cacheUntilField = this.cacheUntilField.bind(this);
  }

  render() {
    // check condition
    if (!checkIfFieldIsRendered(this.props.field, this.props.data, this.props.fields)) {
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

    if (this.props.field.cache && this.props.field.entryPoint) {
      field.onChange = this.cacheFromField;
      const cachedData = localStorage.getItem('form-daterange-'+this.props.field.entryPoint+'-'+field.name);
      if (cachedData) {
        field.selected = new Date(cachedData * 1000);
        field.fromFieldname = cachedData;
      }
    }

    return this.transformField(field);
  }

  createUntilField() {
    let field = JSON.parse(JSON.stringify(this.props.field));
    field.name = this.props.field.untilFieldname;
    field.placeholderText = this.props.field.untilPlaceholderText;

    if (this.props.field.cache && this.props.field.entryPoint) {
      field.onChange = this.cacheUntilField;
      const cachedData = localStorage.getItem('form-daterange-'+this.props.field.entryPoint+'-'+field.name);
      if (cachedData) {
        field.selected = new Date(cachedData * 1000);
        field.untilFieldname = cachedData;
      }
    }

    return this.transformField(field);
  }

  cacheFromField(date, event) {
    if (date !== null) {
      this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.fromFieldname]: (date.getTime() / 1000)}, JSON.parse(JSON.stringify(this.props.field)));
    } else {
      this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.fromFieldname]: ''}, JSON.parse(JSON.stringify(this.props.field)));
    }

    let cacheDate = '';
    if (this.props.field.cache && this.props.field.entryPoint) {
      if (date !== null) {
        cacheDate = date.getTime() / 1000;
      }

      localStorage.setItem('form-daterange-'+this.props.field.entryPoint+'-'+this.props.field.fromFieldname, cacheDate);
    }

    event.preventDefault(); // needed to close the picker
  }

  cacheUntilField(date, event) {
    if (date !== null) {
      this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.untilFieldname]: (date.getTime() / 1000)}, JSON.parse(JSON.stringify(this.props.field)));
    } else {
      this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.untilFieldname]: ''}, JSON.parse(JSON.stringify(this.props.field)));
    }

    let cacheDate = '';
    if (this.props.field.cache && this.props.field.entryPoint) {
      if (date !== null) {
        cacheDate = date.getTime() / 1000;
      }

      localStorage.setItem('form-daterange-'+this.props.field.entryPoint+'-'+this.props.field.untilFieldname, cacheDate);
    }

    event.preventDefault(); // needed to close the picker
  }

  transformField(field) {
    // we do not want duplicated labels etc.
    field.label = "";
    field.description = "";

    return field;
  }
}