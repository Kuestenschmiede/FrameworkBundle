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

export default class NewFormTextAreaField extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
    <div className={(this.props.className ? this.props.className + ' ' : '') +
    'c4g-form-field c4g-form-group' + ((this.props.error && ' c4g-invalid') || '')}>
      <label className={'c4g-label-outer'}>
        <span className={'c4g-label-inner'}>{this.props.label}</span>
        <textarea name={this.props.name}
                  value={this.props.value}
                  maxLength={this.props.maxLength}
                  className={'c4g-form-control c4g-textarea'}
                  onChange={this.onChange}
                  required={this.props.required}
                  />
      </label>
      {this.props.description && <span className={'c4g-description'}>{this.props.description}</span>}
      {this.props.error && <span className={'c4g-error'}>{this.props.error}</span>}
    </div>
    );
  }
}