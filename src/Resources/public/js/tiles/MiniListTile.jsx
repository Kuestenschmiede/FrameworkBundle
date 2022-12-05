/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class MiniListTile extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let wrappedFields = [];
    let fields = [];
    this.props.fields.map((item, id) => {
      // let field = mapper.default.mapTileField(item.type);
      if (item.type === "wrapper") {
        wrappedFields = wrappedFields.concat(item.wrappedFields);
        // fields.push(React.createElement(field, {key: id, field: item, data: this.props.dataEntry, fields: this.props.fields, list: this.props.list}));
        fields.push(<TileMapperField key={id} field={item} data={this.props.dataEntry} fields={this.props.fields} list={this.props.list} languageRefs={this.props.languageRefs}/>);
      } else {
        if (!wrappedFields.includes(item.name)) {
          // only render non-wrapped fields
          // since the wrapped fields will be rendered by the wrapper
          fields.push(<TileMapperField key={id} field={item} data={this.props.dataEntry} fields={this.props.fields} list={this.props.list} languageRefs={this.props.languageRefs}/>);
        }
      }
    });

    return (
      <div className={"row globalListItem"}>
        {
          fields
        }
      </div>
    );
  }
}