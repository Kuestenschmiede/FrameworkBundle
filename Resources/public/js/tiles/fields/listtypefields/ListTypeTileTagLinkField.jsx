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

const TileLinkButtonField = React.lazy(() => import("../TileLinkButtonField.jsx"));

export default class ListTypeTileTagLinkField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let icons = [];
    if (this.props.data[this.props.field.name].icons) {
        this.props.data[this.props.field.name].icons.forEach((item, index) => {
            icons.push(
                <div className={"item "+item.class} key={index}>
                  <img className={"entry-content img-fluid"} loading={"lazy"} src={item.imageSource} alt={item.imageAlt} title={item.imageAlt} width="100%" height="100%" />
                  <a href={item.linkHref} rel={"noreferrer noopener"}>{item.linkLabel}</a>
                </div>
            );
        }, this);
    }
    let links = [];
    if (this.props.data[this.props.field.name].links) {
        this.props.data[this.props.field.name].links.forEach((item, index) => {
          links.push(
            <a className={"btn btn-primary mt-2"} href={item.href} key={index} rel={"noreferrer noopener"}>
              {item.label} <i className={item.iconClass}></i>
            </a>
          );
        }, this);
    }

    let buttonLink = null;
    this.props.fields.map((item, id) => {
      if (item.type === "linkbutton") {
        if (!buttonLink) {
          buttonLink = [];
        }
        buttonLink.push(<TileLinkButtonField key={id} field={item} data={this.props.data} fields={this.props.fields} list={this.props.list}/>);
      }
    });

    if (icons || links) {
      return (
        <div className={"row"}>
          <div className={"col-md-12"}>
            <div className={"row mt-3"}>
              <div className={"col-md-6"}>
                <div className={"tags"}>
                    {icons}
                </div>
              </div>
              <div className={"col-md-6 text-right"}>
                {buttonLink}
                  {links}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return ('')

  }

}