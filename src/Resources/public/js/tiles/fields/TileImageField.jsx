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

const Condition = React.lazy(() => import("../../condition/Condition.jsx"));

export default class TileImageField extends Component {
  constructor(props) {
    super(props);
    this.hasValidExternalLink = this.hasValidExternalLink.bind(this);
    this.executeAsyncCall = this.executeAsyncCall.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);

    this.state = {
      orientation: ''
    };
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

  handleImageLoad(event) {
    if (this.props.field.checkOrientation) {
      const img = event.target;
      if (img.classList.contains('main-image')) {
        const orientation = img.naturalWidth / img.naturalHeight >= 1 ? 'landscape' : 'portrait';
        this.setState({ orientation });
      }
    }
  }

  render() {
    if (this.props.data[this.props.field.name] || this.props.field.imageSource) {
      let label = null;
      if (this.props.field.label) {
        label = <span className={"entry-label"}>{this.props.field.label}</span>;
      }

      const imageSource = this.props.field.imageSource ||
          (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].src);
      const imageAlt = this.props.field.imageAlt ||
          (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt);

      const imageElement = (
          <div className={`image-container${this.props.field.checkOrientation ? ` ${this.state.orientation}` : ''}`}>
            {this.props.field.checkOrientation && (
              <img
                  src={imageSource}
                  alt=""
                  loading="lazy"
                  className="background-image"
              />
            )}
            <img
                src={imageSource}
                alt={imageAlt}
                className={`${this.props.field.class || ''} main-image`}
                loading="lazy"
                decoding="async"
                fetchpriority="high"
                onLoad={this.handleImageLoad}
            />
          </div>
      );

      let href = this.props.field.href;
      let wrapperClass = 'image-wrapper '+this.props.field.wrapperClass;

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
              <div className={wrapperClass}>
                {label}
                <a href={href} rel="noreferrer noopener">
                  {imageElement}
                </a>
              </div>
            </Condition>
        );
      }

      return (
          <Condition data={this.props.data} conditions={this.props.field.conditions}>
            <div className={wrapperClass}>
              {label}
              {imageElement}
            </div>
          </Condition>
      );
    }

    return null;
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
        'X-Requested-With': 'XMLHttpRequest'
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
      } catch (e) {
      }
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