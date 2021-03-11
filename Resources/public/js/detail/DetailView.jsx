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

import {DetailAnchorMenu} from "./DetailAnchorMenu.jsx";

const DetailMapperField = React.lazy(() => import("./fields/DetailMapperField.jsx"));

export default class DetailView extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let sections = [];
    let compSections = this.props.component.sections;
    if (Object.keys(compSections).length > 0) {
      // reorder fields
      let contentFields = {};
      this.props.fields.forEach((elem, index) => {
        let idx = elem.section;
        if (!contentFields[idx]) {
          contentFields[idx] = [];
        }
        contentFields[idx].push(elem);
      });
      let sectionCtr = Object.keys(compSections).length;
      let fieldKey = 0;
      let rowKey = 0;
      for (let i = 1; i<= sectionCtr; i++) {
        let section = null;
        if (this.props.component.showAnchorMenu && this.props.component.menuSectionIndex === i) {
          section = <DetailAnchorMenu key={i} sections={compSections} menuSection={compSections[i]} page={this.props.component}/>
        } else {
          if (!contentFields[i]) {
            // no content for this index
            continue;
          }
          let className = "";
          if (compSections[i].className) {
            className = compSections[i].className;
          }

          let sectionContent = null;
          if (compSections[i].rowForEachField) {
            sectionContent = contentFields[i].map((item, id) => {
              return (<div key={id} className={"c4g-row"}>
                <DetailMapperField data={this.props.data} field={item} fields={this.props.fields} key={id} detail={this} languageRefs={this.props.languageRefs}/>
              </div>);
            });
          } else {
            sectionContent = contentFields[i].map((item, id) => {
              return <DetailMapperField data={this.props.data} field={item} fields={this.props.fields} key={fieldKey++} detail={this} languageRefs={this.props.languageRefs}/>
            });
          }

          if (!sectionContent) {
            continue;
          }

          if (compSections[i].container) {
            if (compSections[i].rowForEachField) {
              section = <div key={i} className={className} id={"detail-section-" + i}>
                <div className={"c4g-container"}>
                    {sectionContent}
                </div>
              </div>;
            } else {
              section = <div key={i} className={className} id={"detail-section-" + i}>
                <div className={"c4g-container"}>
                  <div className={"c4g-row"}>
                    {sectionContent}
                  </div>
                </div>
              </div>;
            }
          } else {
            section = <div key={i} className={className} id={"detail-section-" + i}>
              {sectionContent}
            </div>;
          }
        }

        sections.push(section);
      }
      return <div className={"detail-view"}>{sections}</div>
    } else {
      return (
        <div className={"detail-view"}>
          <div className={"c4g-container"}>
            <div className={"c4g-row"}>
              <div className={"c4g-col"}>
                {
                  this.props.fields.map((item, id) => {
                    return <DetailMapperField data={this.props.data} field={item} fields={this.props.fields} key={id} detail={this} languageRefs={this.languageRefs}/>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}