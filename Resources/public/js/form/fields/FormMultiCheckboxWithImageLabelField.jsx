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

export default class FormMultiCheckboxWithImageLabelField extends Component {
  constructor(props) {
    super(props);

    this.checkCheckbox = this.checkCheckbox.bind(this);
  }

  render() {

    let label = null;
    if (this.props.field.label) {
      label = (<span key={'label'}>{this.props.field.label}</span>);
    }
    let options = [];
    if (this.props.field.options) {
      let keys = Object.keys(this.props.field.options);
      keys.forEach((element, index) => {
        options.push(
          <React.Fragment key={index}>
            <div className={this.props.field.optionClass}>
              <label title={this.props.field.options[element].alt} className={"c4g-form-label"}>
                <img src={this.props.field.options[element].src}
                     alt={this.props.field.options[element].alt}
                     title={this.props.field.options[element].alt}
                     className={"c4g-img-fluid"}
                />
                <input type="checkbox" name={this.props.field.name}
                       value={element} required={this.props.field.required}
                       className={"c4g-form-input"}
                       onChange={this.checkCheckbox}/>
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

  checkCheckbox(event) {
    let value = event.target.value;
    let data;
    if (this.props.data) {
      data = JSON.parse(JSON.stringify(this.props.data))
    } else {
      data = [];
    }
    if (!data[this.props.field.name] || !data[this.props.field.name].length) {
      data[this.props.field.name] = [];
    }
    if (event.target.checked) {
      // checkbox checked
      data[this.props.field.name].push(value);
    } else {
      // checkbox unchecked
      if (data[this.props.field.name].includes(value)) {
        for (let i = 0; i < data[this.props.field.name].length; i++) {
          if (data[this.props.field.name][i] === value) {
            let tmpData = data[this.props.field.name].splice(i, 1);
            break;
          }
        }
      }
    }

    this.props.form.props.updateFunction(this.props.form.props.name, data);
  }
}