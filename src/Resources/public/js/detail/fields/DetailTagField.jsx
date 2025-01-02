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

const DetailTextField = React.lazy(() => import("./DetailTextField.jsx"));
const DetailImageField = React.lazy(() => import("./DetailImageField.jsx"));
const DetailMapperField = React.lazy(() => import("./DetailMapperField.jsx"));

export default class DetailTagField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let tags = [];

    let tagData = this.props.data[this.props.field.name];
    if (!tagData || !tagData.length || (tagData.length === 0)) {
      return null;
    }
    let label = null;
    if (this.props.field.label) {
      label = <h4>{this.props.field.label}</h4>
    }
    let tagFields = [];
    for (let i = 0; i < tagData.length; i++) {
      let image = null;
      if (tagData[i].image) {
        image = <DetailImageField field={{name: "image", withPopover: true, popoverField: "name"}} data={tagData[i]}/>;
      }

      if (tagData[i].fields) {
        tagFields.push(tagData[i].fields.map((item, index) => {
          item.class = item.class || tagData[i].technicalKey || "";
          return <DetailMapperField key={index} field={item} data={this.props.data}
                  class={item.class || tagData[i].technicalKey || ""} tagType={tagData[i].technicalKey}/>
        }));
      }
      let tag = <div className={"tag-entry " + tagData[i].technicalKey} key={i}>
          {image}
          <DetailTextField field={{name: "name", class: tagData[i].technicalKey || ""}} data={tagData[i]}/>
      </div>;
      tags.push(tag);
    }

    return (
        <div className={"detail-field-wrapper"}>
          {label}
          <div className={"detail-field-wrapper__tags"}>
            {tags}
          </div>
          <div className={"detail-field-wrapper__tag-fields"}>
            {tagFields}
          </div>
        </div>
    );
  }

}