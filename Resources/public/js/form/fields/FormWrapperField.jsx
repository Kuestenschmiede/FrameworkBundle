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

const FormMapperField = React.lazy(() => import("./FormMapperField.jsx"));

export default class FormWrapperField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let wrappedFields = [];
    let fields = this.props.fields;
    for (let i = 0; i < fields.length; i++) {
      if (this.props.field.wrappedFields.includes(fields[i].name)) {
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

    return (
      <div className={this.props.field.className}>
        <h4 className={"panel-title"}>{this.props.field.label}</h4>
        <div className={"panel-description"}>{this.props.field.description}</div>
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
}