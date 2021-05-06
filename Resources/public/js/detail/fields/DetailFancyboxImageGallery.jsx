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

export default class DetailFancyboxImageGallery extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    let imageData = this.createImageData();
    if (imageData.length === 0) {
      return null;
    }
    return (
      <div className={this.props.field.class}>
        <div className={"detail-view__image-gallery-inner"}>
          {imageData.map((value, index) => {
            return <a key={index} data-fancybox={"gallery_" + this.props.field.name} href={value.src} className={this.props.field.name + "-item" + (index === 0 ? " first" : "")}>
              <img className={"img-fluid"} src={value.src} alt={value.alt} width="100%" height="100%" />
            </a>;
          })}
        </div>
      </div>
    );
  }

  /**
   * Creates formatted data for display from the given input data.
   */
  createImageData() {
    const name = this.props.field.name;
    const data = this.props.data;
    let images = [];
    let index = 0;
    while (data[name + "_" + index]) {
      images.push(data[name + "_" + index]);
      index++;
    }

    return images;

  }
}