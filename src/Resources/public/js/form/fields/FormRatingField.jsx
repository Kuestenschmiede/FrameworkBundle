/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class FormRatingField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.data[this.props.field.name] || this.props.field.value || 0
    };
    this.setRating = this.setRating.bind(this);
  }

  setRating(value) {
    this.setState({rating: value});
    this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: value}, this.props.field);
  }

  render() {
    let label = null;
    if (this.props.field.label) {
      label = (
        <label htmlFor={this.props.field.name} className={this.props.field.required ? 'c4g-required' : ''}>
          {this.props.field.label}
        </label>
      );
    }
    let description = null;
    if (this.props.field.description) {
      description = (<small className={"field-description form-text text-muted"}>{this.props.field.description}</small>);
    }

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const value = i * 20;
      const isSelected = this.state.rating >= value;
      stars.push(
        <span
          key={i}
          onClick={() => this.setRating(value)}
          style={{
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: isSelected ? '#ffc107' : '#e4e5e9',
            marginRight: '5px',
            display: 'inline-block',
            lineHeight: '1'
          }}
          title={value + '%'}
        >
          <i className={isSelected ? "fa fa-star fas fa-star" : "fa fa-star-o far fa-star"} aria-hidden="true"></i>
        </span>
      );
    }

    // Add option to reset to 0
    const clearStyle = {
      cursor: 'pointer',
      fontSize: '0.8rem',
      marginLeft: '10px',
      color: '#6c757d',
      verticalAlign: 'middle'
    };

    return (
      <div className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-group"}>
        {label}
        <div className="rating-stars">
          {stars}
          <span onClick={() => this.setRating(0)} style={clearStyle}>löschen</span>
        </div>
        {description}
      </div>
    );
  }
}
