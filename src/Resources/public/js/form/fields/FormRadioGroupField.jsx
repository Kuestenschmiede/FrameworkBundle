/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class FormRadioGroupField extends Component {
  constructor(props) {
    super(props);

    this.checkRadioButton = this.checkRadioButton.bind(this);
  }

  render() {

    let label = null;
    if (this.props.field.label) {
      label = (<span className={'custom-label'} key={'label'}>{this.props.field.label}</span>);
    }
    let options = [];

    if (this.props.field.cache && this.props.field.entryPoint) {
      const cachedData = localStorage.getItem('form-radiogroup-' + this.props.field.entryPoint + '-' + this.props.field.name);
      if (cachedData) {
        this.props.field.checked = cachedData;
      }
    }

    if (this.props.field.options) {
      let keys = Object.keys(this.props.field.options);
      keys.forEach((element, index) => {
        let defaultChecked = this.props.field.checked === element;
        options.push(
          <React.Fragment key={index}>
            <div className={this.props.field.optionsClass}>
              <input type="radio" id={this.props.form.props.name + "_" + this.props.field.name + '_' + element} name={this.props.field.name}
                     defaultChecked={defaultChecked} value={element} required={this.props.field.required}
                     onChange={this.checkRadioButton} className={"form-check-input " + this.props.field.name + '_' + element}/>
              <label className={"form-check-label c4g-form-check-label " + this.props.field.name + '_' + element}
                     htmlFor={this.props.form.props.name + "_" + this.props.field.name + '_' + element}>
                {this.props.field.options[element]}
              </label>
            </div>
          </React.Fragment>
        );
      }, this);
    }
    let description = null;
    if (this.props.field.label) {
      description = (<span className={"field-description"} key={'description'}>{this.props.field.description}</span>);
    }
    return (
        <React.Fragment>
          <div className={this.props.field.className}>
            {label}
            {options}
            {description}
          </div>
        </React.Fragment>
    );
  }

  checkRadioButton(event) {
    let value = event.target.value;
    this.props.data[this.props.field.name] = value;
    this.props.form.props.updateFunction(this.props.form.props.name, this.props.data, this.props.field);
    if (this.props.field.cache && this.props.field.entryPoint) {
      localStorage.setItem('form-radiogroup-'+this.props.field.entryPoint+'-'+this.props.field.name, this.props.data[this.props.field.name]);
    }
  }

  componentDidMount() {
    // set initial filter, if a filter is initially checked
    if (this.props.field.cache && this.props.field.entryPoint) {
      const cachedData = localStorage.getItem('form-radiogroup-' + this.props.field.entryPoint + '-' + this.props.field.name);
      if (cachedData) {
        this.props.field.checked = cachedData;
      }
    }

    let keys = Object.keys(this.props.field.options);
    keys.forEach((element, index) => {
      let defaultChecked = this.props.field.checked === element;
      if (defaultChecked) {
        let value = document.getElementById(this.props.form.props.name + "_" + this.props.field.name + '_' + element).value;
        this.props.data[this.props.field.name] = value;
        this.props.form.props.updateFunction(this.props.form.props.name, this.props.data, this.props.field);
      }
    });

  }
}