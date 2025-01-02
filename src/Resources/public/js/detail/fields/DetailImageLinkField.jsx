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
    const data = this.props.data[this.props.field.name];
    if (data) {
      let content;
      if (Array.isArray(data)) {
        content = data.map((item, index) => {
          return <a href={item.href} className={this.props.field.class} key={index}>
            <img src={item.src} alt={item.alt} className={this.props.field.innerClass}/>
          </a>
        });
      } else {
        content = <a href={data.href} className={this.props.field.class}>
          <img src={data.src} alt={data.alt} className={this.props.field.innerClass}/>
        </a>;
      }

      return (
        <div className={this.props.field.wrapperClass}>
          {content}
        </div>
      );
    } else {
      return null;
    }
  }
}