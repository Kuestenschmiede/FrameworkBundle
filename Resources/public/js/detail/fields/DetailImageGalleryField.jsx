/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component} from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class DetailImageGalleryField extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    // is there at least one picture?
    if (this.props.data[this.props.field.name + "_0"]) {
      let label = null;
      if (this.props.field.label) {
        label = <span>{this.props.field.label}</span>;
      }
      let images = [];
      for (let i = 0; i < Object.keys(this.props.data).length; i++) {
        if (this.props.data[this.props.field.name + "_" + i]) {
          let value = this.props.data[this.props.field.name + "_" + i];
          let currentImage = <div key={i}>
            <img src={value.src} alt={value.alt}/>
            <p className={"legend"}>{value.alt}</p>
          </div>;
          images.push(currentImage);
        } else {
          // exit loop
          break;
        }
      }
      return (
        <Carousel renderThumbs={() => {
          return []
        }} className={"detail-field-image-gallery" + (this.props.field.class ? " " + this.props.field.class : "")}>
          {images}
        </Carousel>
      );
    } else {
      return ('');
    }
  }
}