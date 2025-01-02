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

const TileMapperField = React.lazy(() => import("./TileMapperField.jsx"));

export default class TileWrapperField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: [],
      setup: false
    };
  }

  render() {
    let wrappedFields = [];
    let fields = this.props.fields;
    for (let i = 0; i < fields.length; i++) {
      if (this.props.field.wrappedFields.includes(fields[i].name)) {
        wrappedFields.push(fields[i]);
      }
    }

    let innerFields = [];
    wrappedFields.map((item, id) => {
      innerFields.push(<TileMapperField key={id} field={item} data={this.props.data} list={this.props.list} fields={this.props.fields} languageRefs={this.props.languageRefs}/>)
    });

    return (
      <div className={this.props.field.class}>
        {
          innerFields
        }
      </div>
    );
  }
}