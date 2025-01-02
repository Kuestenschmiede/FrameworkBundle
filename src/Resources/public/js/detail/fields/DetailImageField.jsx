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

export default class DetailImageField extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.data[this.props.field.name]) {
      let label = null;
      if (this.props.field.label) {
        label = <span>{this.props.field.label}</span>;
      }
      let src = this.props.data[this.props.field.name].src;
      let altName = this.props.data[this.props.field.name].alt;
      let width = this.props.data[this.props.field.name].width;
      let height = this.props.data[this.props.field.name].height;
      let imageNode = null;
      if (this.props.field.withPopover && this.props.field.popoverField && this.props.data[this.props.field.popoverField]) {
        imageNode = <img className={"img-fluid"} src={src} alt={altName} data-toggle={"tooltip"} width={width} height={height} data-content={this.props.data[this.props.field.popoverField]} title={this.props.data[this.props.field.popoverField]}/>;
      } else {
        imageNode = <img className={"img-fluid"} src={src} alt={altName} title={altName} width={width} height={height}/>;
      }

      if (this.props.field.addWrappingDiv) {

        let wrapperClass = "";
        if (this.props.field.wrappingDivClass) {
          wrapperClass = this.props.field.wrappingDivClass;
        }
        let image = null;
        if (this.props.field.renderAsFigure) {
          image = <React.Fragment>
            {imageNode}
            <figcaption>{altName}</figcaption>
          </React.Fragment>;
        } else {
          image = <React.Fragment>
            {label}
            {imageNode}
          </React.Fragment>;
        }
        return (
          <div className={wrapperClass}>
            <div className={this.props.field.class ? this.props.field.class : "detail-field-image"}>
              {image}
            </div>
          </div>
        );
      } else {
        if (this.props.field.renderAsFigure) {
          return (
            <figure>
              {imageNode}
              <figcaption>{altName}</figcaption>
            </figure>
          );
        } else {
          return (
            <div className={this.props.field.class ? this.props.field.class : "detail-field-image"}>
              {label}
              {imageNode}
            </div>
          );
        }

      }
    } else {
      return ('');
    }
  }

}