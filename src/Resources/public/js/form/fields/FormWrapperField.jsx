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

const FormMapperField = React.lazy(() => import("./FormMapperField.jsx"));

export default class FormWrapperField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      altDescription: false
    };
    this.setAltDescription = this.setAltDescription.bind(this);
  }

  render() {
    let wrappedFields = [];
    let fields = this.props.fields;
    for (let i = 0; i < fields.length; i++) {
      if (this.props.field.wrappedFields.includes(fields[i].name)) {
        fields[i].wrapperName = this.props.field.cssId;
        wrappedFields.push(fields[i]);
      }
    }
    let hr = null;
    if(this.props.fields.label || this.props.field.description) {
      hr = <hr className={"panel-hr"}/>;
    }

    if ((this.props.parentNode === this.props.form) && this.props.field.innerWrapper) {
      return null;
    }
    let description = this.state.altDescription || this.props.field.description;
    return (
      <div className={this.props.field.className} id={this.props.field.cssId}>
        <h4 className={"panel-title"}>{this.props.field.label}</h4>
        <div className={"panel-description"}>{description}</div>
        {hr}
        {
          wrappedFields.map((item, id) => {
            return <FormMapperField key={id} field={item} data={this.props.data} form={this.props.form}
                                    errorText={this.props.errorTexts ? this.props.errorTexts[item.name] : null}
                                    parentNode={this} fields={this.props.fields} languageRefs={this.props.languageRefs}/>
          })
        }
      </div>
    );
  }
  setAltDescription(description) {
    this.setState({
      altDescription: description
    });
  }
}