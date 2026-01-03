/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";

const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class GridTypeTile extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-md-3 grid-list-item">

        <div className="item">

          {
            this.props.fields.map((item, id) => {
              return <TileMapperField key={id} field={item} data={this.props.dataEntry} list={this.props.list} languageRefs={this.props.languageRefs}/>;
            })
          }

        </div>
      </div>
    );
  }

}