/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";

const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class ExperimentalGridTile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let wrappedFields = [];
    for (let i = 0; i < this.props.fields.length; i++) {
      if (this.props.fields[i].type) {
        if (this.props.fields[i].wrappedFields) {
          wrappedFields = wrappedFields.concat(this.props.fields[i].wrappedFields);
        }
      }
    }

    return (
      <div className="c4g-list-element">

        <div className="c4g-list-element__inner">

          {
            this.props.fields.map((item, id) => {
              if (!wrappedFields.includes(item.name)) {
                return <TileMapperField key={id} field={item} data={this.props.dataEntry} list={this.props.list} fields={this.props.fields} languageRefs={this.props.languageRefs}/>;
              }
            })
          }

        </div>
      </div>
    );
  }

}