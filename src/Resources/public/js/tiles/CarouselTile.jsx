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
const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class CarouselTile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let itemType = null;
    if (this.props.dataEntry.itemType) {
      itemType = this.props.dataEntry.itemType;
    }

    return (
      <a className={this.props.className || ""} href={this.props.dataEntry.href} itemScope={itemType} itemType={itemType}>
        {
          this.props.fields.map((item, id) => {
            return <TileMapperField key={id} field={item} data={this.props.dataEntry}/>;
          })
        }
      </a>
    );
  }

}