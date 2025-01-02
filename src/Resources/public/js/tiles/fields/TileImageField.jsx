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

const Condition = React.lazy(() => import("../../condition/Condition.jsx"));

export default class TileImageField extends Component {
  constructor(props) {
    super(props);
    this.hasValidExternalLink = this.hasValidExternalLink.bind(this);
    this.executeAsyncCall = this.executeAsyncCall.bind(this);
  }

  hasValidExternalLink() {
    if (!this.props.field.externalLinkField) {
      return false;
    }

    try {
      let valid = false;
      if (this.props.field.externalLinkFieldConditionField.length === 0) {
        return true;
      }
      if (this.props.field.externalLinkFieldConditionField.length === this.props.field.externalLinkFieldConditionValue.length) {
        this.props.field.externalLinkFieldConditionField.forEach(
            function (element, index) {
              if (String(this.props.data[element]) === String(this.props.field.externalLinkFieldConditionValue[index])) {
                valid = true;
              }
            },
            this
        );
        return valid;
      }
    } catch (e) {
      return false;
    }
  }

  render() {
    if (this.props.data[this.props.field.name] || this.props.field.imageSource) {
      let label = null;
      if (this.props.field.label) {
        label = <span className={"entry-label"}>{this.props.field.label}</span>;
      }
      let itemProp = null;
      if (this.props.field.itemProp) {
        itemProp = this.props.field.itemProp;
      }
      let height, width;
      if (this.props.data[this.props.field.name]) {
        if (this.props.data[this.props.field.name].height) {
          height = this.props.data[this.props.field.name].height;
        }
        if (this.props.data[this.props.field.name].width) {
          width = this.props.data[this.props.field.name].width;
        }
      }
      if (!height && this.props.field.height) {
        height = this.props.field.height;
      }
      if (!width && this.props.field.width) {
        width = this.props.field.width;
      }

      let href = this.props.field.href;

      if (this.hasValidExternalLink()) {
        href = this.props.data[this.props.field.externalLinkField];
      } else {
        if (this.props.field.hrefFields) {
          this.props.field.hrefFields.map((item, id) => {
            href = href.replace(item, this.props.data[item]);
          });
        }
      }

      if (href) {
        return (
          <Condition data={this.props.data} conditions={this.props.field.conditions}>
          <div className={this.props.field.wrapperClass}>
            {label}
            <a href={href} rel={"noreferrer noopener"} data-name={this.props.data['name']} data-moreurl={href}>
            <img className={this.props.field.class}
                 height={height}
                 width={width}
                 itemProp={itemProp} loading={"lazy"}
                 src={this.props.field.imageSource || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].src)}
                 alt={this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
                 title={this.props.field.title || this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
            />
            </a>
          </div>
          </Condition>
        );
      } else {
        return (
          <Condition data={this.props.data} conditions={this.props.field.conditions}>
          <div className={this.props.field.wrapperClass}>
            {label}
            <img className={this.props.field.class}
                 itemProp={itemProp} loading={"lazy"}
                 height={height}
                 width={width}
                 src={this.props.field.imageSource || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].src)}
                 alt={this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
                 title={this.props.field.title || this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
            />
          </div>
          </Condition>
        );
      }

    }
    return ('')

  }

  executeAsyncCall(href) {
    const scope = this;

    let data = new FormData();
    Object.entries(this.props.data).forEach((entry) => {
      data.set(entry[0], String(entry[1]));
    });

    fetch(href, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        'X-Requested-With' : 'XMLHttpRequest'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data
    }).then((response) => {
      try {
        response.json().then((json) => {
          if (String(this.props.field.redirectPageOnSuccess) !== '') {
            window.location = String(this.props.field.redirectPageOnSuccess);
          }
          if (json.updatedData) {
            let newDataEntry = this.props.data;
            let newData = this.props.list.props.data;
            if (json.updateType === "single") {
              for (let key in json.updatedData) {
                if (json.updatedData.hasOwnProperty(key)) {
                  newDataEntry[key] = json.updatedData[key];
                }
              }
              for (let i = 0; i < newData.length; i++) {
                if (newData[i].id === newDataEntry.id) {
                  newData[i] = newDataEntry;
                  break;
                }
              }
            } else if (json.updateType === "all") {
              newData = json.updatedData;
            } else {
              // if nothing set, fall back to all
              newData = json.updatedData;
            }
            scope.props.list.props.setFunction(scope.props.list.props.name, newData, []);
          }
        });
      } catch (e) {}
    });

    // check for hook that needs to be executed
    if (this.props.field.hookAfterClick && this.props.field.hookName) {
      if (window.c4gHooks && window.c4gHooks[this.props.field.hookName]) {
        for (let i = 0; i < window.c4gHooks[this.props.field.hookName].length; i++) {
          if (typeof window.c4gHooks[this.props.field.hookName][i] === "function") {
            window.c4gHooks[this.props.field.hookName][i](this.props.field, this.props.data);
          }
        }
      }
    }
  }

}