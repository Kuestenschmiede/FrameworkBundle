/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class DetailModalImageGalleryField extends Component {

  constructor(props) {
    super(props);
    this.state = {
        'src': this.props.data[this.props.field.name][0].src,
        'alt': this.props.data[this.props.field.name][0].alt,
        'showModal': false
    };
  }

  toggleModal(state) {
      this.setState(state);
  }

  render() {
    let modalClass = 'modal';
    if (this.state.showModal) {
        modalClass += ' modal-show';
    }
    if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].length > 0) {
      return (
        <div className={"detail-field-simple-image-gallery" + (this.props.field.class ? " " + this.props.field.class : "")}>
          <div className={modalClass}>
              <span className={"modal-close"} onClick={this.toggleModal.bind(this, {'showModal': false})}>&times;</span>
              <img className={"modal-content"} src={this.state.src} alt={this.state.alt} />
          </div>
          <div className={"modal-gallery-images"}>
          {this.props.data[this.props.field.name].map((value, index) => {
            return <div className={"modal-gallery-image"} key={index}>
              <img src={value.src} alt={value.alt} onClick={this.toggleModal.bind(this, {
                  'src': value.src,
                  'alt': value.alt,
                  'showModal': true
              })}/>
            </div>
          })}
          </div>
        </div>
      );
    } else {
      return ('');
    }
  }
}