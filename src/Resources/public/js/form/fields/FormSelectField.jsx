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
import Select from "react-select";
import checkIfFieldIsRendered from "../../util/conditions";

export default class FormSelectField extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data, action) {
    this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: data}, this.props.field);
    if (this.props.field.cache && this.props.field.entryPoint) {
      localStorage.setItem('form-select-'+this.props.field.entryPoint+'-'+this.props.field.name, JSON.stringify(data));
    }
    if (this.props.field.instantRedirectUrl) {
      window.location = this.props.field.instantRedirectUrl.replace('{value}', data.value);
    }
    // check if form fields should be loaded
    if (this.props.field.dynamicFieldlist) {
      let postData = {[this.props.field.name]: data};
      if (this.props.field.dynamicFieldlistAdditionalFields
          && this.props.field.dynamicFieldlistAdditionalFields.length > 0
      ) {
        const addFields = this.props.field.dynamicFieldlistAdditionalFields;
        for (let i = 0; i < addFields.length; i++) {
          postData[addFields[i]] = this.props.data[addFields[i]];
        }
      }
      jQuery.post(this.props.field.dynamicFieldlistUrl, postData)
        .done((responseData) => {
        if (responseData && responseData.matchingFields
            && responseData.nonMatchingFields
        ) {
          this.props.form.props.setFieldsFunction(this.props.form.props.name, responseData);
        }
      });
    }
  }

  handleChangeDummy(data) {
    // So react won't throw warnings, do not replace this with a readOnly attribute since that will break validation
  }

  render() {

    let label = null;
    let ariaLabel = null;
    // check condition
    if (!checkIfFieldIsRendered(this.props.field, this.props.data, this.props.fields)) {
      return null;
    }

    // check for hidden attribute
    if (this.props.field.hidden) {
      return null;
    }

    if (this.props.field.label) {
      label = (<React.Fragment>
        <label htmlFor={this.props.field.name}
               className={this.props.field.required ? 'c4g-required' : ''}>
          {this.props.field.label}
        </label>
      </React.Fragment>);
    } else {
      if (this.props.field.placeholder) {
        ariaLabel = this.props.field.placeholder;
      }
    }
    let description = null;
    if (this.props.field.description) {
      description = (<small className={"field-description form-text text-muted"}>{this.props.field.description}</small>);
    }
    let options = [];
    let defaultValue = null;
    let defaultValues = null;
    if (this.props.field.options) {
      if (this.props.field.cache && this.props.field.entryPoint) {
        const cachedData = localStorage.getItem('form-select-'+this.props.field.entryPoint+'-'+this.props.field.name);
        if (cachedData) {
          defaultValues = JSON.parse(cachedData);
          this.props.data[this.props.field.name] = defaultValues;
        }
      }

      if (this.props.field.grouped) {
        options = this.props.field.options;
      } else {
        if (this.props.field.emptyOptionLabel !== '') {
          options.push({value: "", label: this.props.field.emptyOptionLabel});
        }
        let keys = Object.keys(this.props.field.options);
        keys.forEach((element, index) => {
          options.push({value: this.props.field.options[element].value, label: this.props.field.options[element].label});

          if (defaultValues) {
             defaultValues.forEach((cachedElement, idx) => {
               if (cachedElement.value === this.props.field.options[element].value) {
                 defaultValue = {value: this.props.field.options[element].value, label: this.props.field.options[element].label};
               }
             });
          } else if (this.props.data[this.props.field.name] === this.props.field.options[element].value) {
            defaultValue = {value: this.props.field.options[element].value, label: this.props.field.options[element].label};
          }
        });

        if (!defaultValue && this.props.field.selected) {
          // set default value for when no value is saved yet
          let defaultOption = this.props.field.selected;
          defaultValue = {value: this.props.field.options[defaultOption].value, label: this.props.field.options[defaultOption].label};
        }
      }

      let hint = "";
      if (this.props.field.hintText) {
        hint = <div className={""}>{this.props.field.hintText}</div>
      }

      let selectNode = null;
      if (this.props.field.required) {
        let optionValue = '';
        if (!!(this.props.data[this.props.field.name])) {
          if (!!(this.props.data[this.props.field.name].value)) {
            optionValue = this.props.data[this.props.field.name].value;
          } else if (typeof this.props.data[this.props.field.name] === 'object') {
            optionValue = '';
          } else {
            optionValue = this.props.data[this.props.field.name];
          }
        }
        let optionLabel = '';
        if (!!(this.props.data[this.props.field.name])) {
          if (!!(this.props.data[this.props.field.name].value)) {
            optionLabel = this.props.data[this.props.field.name].value;
          } else if (typeof this.props.data[this.props.field.name] === 'object') {
            optionLabel = '';
          } else {
            optionLabel = this.props.data[this.props.field.name];
          }
        }

        let optionValues = defaultValue ? defaultValue : optionValue;
        selectNode = <select tabIndex={-1}
                             autoComplete={"off"}
                             style={{ opacity: 0, height: 0, pointerEvents: "none"}}
                             value={optionValues}
                             required={this.props.field.required}
                             onChange={this.handleChangeDummy}
                             aria-label={ariaLabel}>;
          <option value={optionValues}>{optionLabel}</option>
        </select>;
      }

      let name = this.props.field.name;
      if (this.props.field.multiple && this.props.field.synchronous) {
        name += '[]';
      }

      return (
        <React.Fragment>
          <div className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field"}>
            {label}
            {this.props.errorText && typeof this.props.errorText === "string" && <div className={"text-danger"}>{this.props.errorText}</div>}
            {hint}
            <React.Fragment>
            <Select id={this.props.field.name} name={name}
                    options={options} isMulti={this.props.field.multiple}
                    required={this.props.field.required} onChange={this.handleChange}
                    defaultValue={this.props.data[this.props.field.name]}
                    placeholder={this.props.field.placeholder}
                    aria-label={ariaLabel}>
            </Select>
              {selectNode}
            </React.Fragment>
            {description}
          </div>
        </React.Fragment>
      );

    } else {
      return ('');
    }
  }

  componentDidMount() {
    let hasData = !!this.props.data[this.props.field.name];
    let defaultOption = this.props.field.selected;
    let hasDefaultValue = this.props.field.options[defaultOption] && !!(this.props.field.options[defaultOption].value);
    if (!this.props.field.instantRedirectUrl && (hasData || hasDefaultValue)) {
      this.handleChange(this.props.data[this.props.field.name], "");
    }
  }

}