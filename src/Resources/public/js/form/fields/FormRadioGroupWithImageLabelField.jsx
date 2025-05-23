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

export default class FormRadioGroupWithImageLabelField extends Component {
  constructor(props) {
    super(props);

    this.checkRadioButton = this.checkRadioButton.bind(this);
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
        let defaultChecked = this.props.field.checked === element;
        options.push(
          <React.Fragment key={index}>
            <div className={this.props.field.name + "_" + element}>
              <input type="radio" id={this.props.field.name + '_' + index} name={this.props.field.name}
                     defaultChecked={defaultChecked} value={element} required={this.props.field.required}
                     onChange={this.checkRadioButton}/>
              <label htmlFor={this.props.field.name + '_' + index}>
                <img src={this.props.field.options[element].src}
                     alt={this.props.field.options[element].alt}
                     title={this.props.field.options[element].alt}
                />
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
          <div className={"radio-group"}>
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
  }

  componentDidMount() {
    // set initial filter, if a filter is initially checked
    let keys = Object.keys(this.props.field.options);
    keys.forEach((element, index) => {
      let defaultChecked = this.props.field.checked === element;
      if (defaultChecked) {
        let value = document.getElementById(this.props.field.name + '_' + index).value;
        this.props.data[this.props.field.name] = value;
        this.props.form.props.updateFunction(this.props.form.props.name, this.props.data, this.props.field);
      }
    });

  }
}