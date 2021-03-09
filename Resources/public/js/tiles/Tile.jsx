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

const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class Tile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let itemType = null;
    if (this.props.dataEntry.itemType) {
      itemType = this.props.dataEntry.itemType;
    }
    // split fields if needed
    let headerFields = [];
    let contentFields = [];
    let footerFields = [];
    for (let key in this.props.fields) {
      if (this.props.fields.hasOwnProperty(key)) {
        switch (this.props.fields[key].renderSection) {
          case "header":
            headerFields.push(this.props.fields[key]);
            break;
          case "content":
            contentFields.push(this.props.fields[key]);
            break;
          case "footer":
            footerFields.push(this.props.fields[key]);
            break;
        }
      }
    }
    let headerSection = null;
    if (headerFields.length > 0) {
      headerSection = <div className={"c4g-tile-header"}>
        {
          headerFields.map((item, id) => {
            // let field = FieldTypeMapper.mapTileField(item.type);
            // return React.createElement(field, {key: id, field: item, data: this.props.dataEntry});
            return <TileMapperField key={id} field={item} data={this.props.dataEntry} list={this.props.list} fields={this.props.fields}/>;
          }, this)
        }
      </div>;
    }
    let contentSection = null;
    if (contentFields.length > 0) {
      contentSection = <div className={"c4g-tile-content"}>
        {
          contentFields.map((item, id) => {
            // let field = FieldTypeMapper.mapTileField(item.type);
            // return React.createElement(field, {key: id, field: item, data: this.props.dataEntry});
            return <TileMapperField key={id} field={item} data={this.props.dataEntry} list={this.props.list} fields={this.props.fields}/>;
          }, this)
        }
      </div>
    }
    let footerSection = null;
    if (footerFields.length > 0) {
      footerSection = <div className={"c4g-tile-footer"}>
        {
          footerFields.map((item, id) => {
            // let field = FieldTypeMapper.mapTileField(item.type);
            // return React.createElement(field, {key: id, field: item, data: this.props.dataEntry});
            return <TileMapperField key={id} field={item} data={this.props.dataEntry} list={this.props.list} fields={this.props.fields}/>;
          }, this)
        }
      </div>;
    }

    let className = this.props.className;
    if (className) {
      className += " c4g-tile";
    } else {
      className += "c4g-tile";
    }
    if (this.props.conditionalClasses) {
      for (let field in this.props.conditionalClasses) {
        if (this.props.dataEntry[field] === true) {
          className += " " + this.props.conditionalClasses[field];
        }
      }
    }

    return (
      <div className={className} itemScope={itemType} itemType={itemType}>
        {headerSection}
        {contentSection}
        {footerSection}
      </div>
    );
  }

}