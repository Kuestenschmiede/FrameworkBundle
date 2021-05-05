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
const ListTypeTileMapperField = React.lazy(() => import("./fields/listtypefields/ListTypeTileMapperField.jsx"));
const ListTypeTileImageField = React.lazy(() => import("./fields/listtypefields/ListTypeTileImageField.jsx"));

export default class ListTypeTile extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    let imageField = null;
    this.props.fields.map((item, id) => {
      if (item.type === 'image') {
        imageField = item;
      }
    });

    return (
      <div className="col-md-12 item">
        <div className="row">
          <div className="col-md-3">
            <ListTypeTileImageField field={imageField}
                                    data={this.props.dataEntry}
            />
          </div>
          <div className="col-md-9">
            {
              this.props.fields.map((item, id) => {
                if (item.type !== 'image') {
                  if (item.type !== "linkbutton") {
                    return <ListTypeTileMapperField key={id} field={item} data={this.props.dataEntry} fields={this.props.fields} list={this.props.list} languageRefs={this.props.languageRefs}/>
                  }
                }
              }, this)
            }
          </div>
        </div>
      </div>
    );
  }

}