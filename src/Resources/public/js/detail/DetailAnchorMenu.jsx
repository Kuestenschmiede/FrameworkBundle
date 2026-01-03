/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export class DetailAnchorMenu extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const sections = this.props.sections;

    let result = [];
    Object.keys(sections).forEach((element, index) => {
      let currentSection = sections[element];
      if (currentSection.showInSectionMenu) {
        let href = window.location.href;
        if (href.indexOf('#') !== -1) {
          // contains a hash
          href = href.substr(0, href.indexOf('#'));
        }
        href += "#detail-section-" + element;
        result.push(
          <li key={element}><a href={href}>{currentSection.name}</a></li>
        );
      }
    });
    if (this.props.page.additionalLinks && this.props.page.additionalLinks.length > 0) {
      this.props.page.additionalLinks.map((item, id) => {
        let href = window.location.href;
        if (href.indexOf('#') !== -1) {
          // contains a hash
          href = href.substr(0, href.indexOf('#'));
        }
        href += item.href;
        result.push(
          <li key={result.length + id}><a href={href}>{item.label}</a></li>
        );
      });
    }

    if (this.props.menuSection.container) {
      return (
        <div id={"anchor-menu"}>
          <div className={"anchor-menu__inner"}>
            <ul className={"anchor-menu__list"}>
              {result}
            </ul>
            <div className={"anchor-menu__share"}></div>
          </div>
        </div>
      );
    } else {
      return (
        <ul id={"anchor-menu"} className={"anchor-menu__list"}>
          {result}
        </ul>
      );
    }

  }
}