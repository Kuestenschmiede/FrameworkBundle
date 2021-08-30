/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
import {
  getGeolocation,
  calculateDistance,
  geolocationActive,
  formatDistance
} from "../Geolocation";

const CarouselTile = React.lazy(() => import("./CarouselTile.jsx"));
const ExperimentalGridTile = React.lazy(() => import("./ExperimentalGridTile.jsx"));
const InfiniteScroll = React.lazy(() => import("react-infinite-scroll-component"));

export default class TileView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      asyncLoading: props.component.asyncUrl !== '',
      filterWasReset: false,
      textFilterContent: ""
    };

    this.asyncUrl = this.props.component.asyncUrl;

    this.positionActive = false;

    this.position = [];

    this.checkPosition();
    if (this.positionActive) {
      this.addDistances(props.data);
    }
    
    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.applyTextFilter = this.applyTextFilter.bind(this);
  }

  render() {
    let headline = null;
    if (this.props.component.headline) {
      if (this.props.component.headlineLevel) {
        switch (this.props.component.headlineLevel) {
          case 1:
            headline = <h1 className={"c4g-tile-headline"}>{this.props.component.headline}</h1>
            break;
          case 2:
            headline = <h2 className={"c4g-tile-headline"}>{this.props.component.headline}</h2>
            break;
          case 3:
            headline = <h3 className={"c4g-tile-headline"}>{this.props.component.headline}</h3>
            break;
          case 4:
            headline = <h4 className={"c4g-tile-headline"}>{this.props.component.headline}</h4>
            break;
          case 5:
            headline = <h5 className={"c4g-tile-headline"}>{this.props.component.headline}</h5>
            break;
          case 6:
            headline = <h6 className={"c4g-tile-headline"}>{this.props.component.headline}</h6>
            break;
        }
      }
    }

    let textFilter = null;
    if (this.props.component.withTextFilter) {
      textFilter = <div className={"detail-view__list-filter-wrapper"}>
        <input className={"detail-view__list-filter-input"} type="text" placeholder={"Suchbegriff eingeben"} onInput={this.applyTextFilter} defaultValue={this.state.textFilterContent}/>
      </div>
    }

    if (this.props.data.length === 0) {
      if (!this.props.updated && this.props.textBeforeUpdate) {
        return <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-dark" role="alert">
                {this.props.textBeforeUpdate}
              </div>
            </div>
          </div>
        </div>;
      } else if (this.props.updated && this.props.textAfterUpdate) {
        return <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-dark" role="alert">
                {this.props.textAfterUpdate}
              </div>
            </div>
          </div>
        </div>;
      }
    }

    let className = this.props.component.className;
    if (this.props.filterChanged && this.props.component.classAfterFilter) {
      className = this.props.component.classAfterFilter;
    }
    if (this.state.filterWasReset) {
      className = this.props.component.className;
    }

    let scrollProps = {
      dataLength: this.props.data.length,
      next: this.fetchMoreData,
      hasMore: this.state.asyncLoading,
      loader: this.props.showSpinner ? <div className={"preloader-image-wrapper"}
                   style={{textAlign: "center", margin: "auto"}}>{this.props.component.loadingText ||
      <img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/>}</div> : null,
      className: className,
      scrollThreshold: this.props.component.scrollThreshold
    };
    if (this.props.component.layoutType === "carousel") {
      return <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img
        src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>}>
        <InfiniteScroll {...scrollProps}>
          <div className="container c4g-container">
            <div className="slider explorer owl-wrapper c4g-carousel-wrapper">
              <div className="owl-carousel owl-theme c4g-carousel-theme">
                {
                  this.props.data.map((item, id) => {
                    let className = this.props.component.tileClass;
                    if (this.props.component.conditionalTileClassName && this.props.component.conditionalTileClassField) {
                      if (typeof item[this.props.component.conditionalTileClassField] !== "undefined") {
                        if (item[this.props.component.conditionalTileClassField] === this.props.component.conditionalTileClassValue) {
                          className += ' ' + this.props.component.conditionalTileClassName;
                        }
                      }
                    }
                    return <CarouselTile className={className}
                                         dataEntry={item}
                                         key={id}
                                         fields={this.props.fields}
                                         conditionalClasses={this.props.component.conditionalClasses}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </InfiniteScroll>
      </Suspense>;
    } else {
      const list = <React.Fragment>
        <div className={"c4g-tile-headline-wrapper"}>{headline}</div>
        {textFilter}
        <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img
          src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>}>
          <InfiniteScroll {...scrollProps}>
            <div className="c4g-list-elements">
              {
                this.props.data.map((item, id) => {
                  let className = this.props.component.tileClass;
                  if (this.props.component.conditionalTileClassName && this.props.component.conditionalTileClassField) {
                    if (typeof item[this.props.component.conditionalTileClassField] !== "undefined") {
                      if (item[this.props.component.conditionalTileClassField] === this.props.component.conditionalTileClassValue) {
                        className += ' ' + this.props.component.conditionalTileClassName;
                      }
                    }
                  }
                  return <ExperimentalGridTile className={className}
                                               dataEntry={item}
                                               key={id}
                                               fields={this.props.fields}
                                               conditionalClasses={this.props.component.conditionalClasses}
                                               list={this}
                  />
                })
              }
            </div>
          </InfiniteScroll>
        </Suspense>
      </React.Fragment>;
      if (this.props.component.listWrapper) {
        return <div id={this.props.component.wrapperId} className={this.props.component.wrapperClass}>
          {list}
        </div>;
      } else {
        return list;
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let delta = false;
    const currentFilterData = this.props.component.filterData;
    const prevFilterData = prevProps.component.filterData;
    let filterWasReset = this.checkIfFilterWasReset(prevFilterData, currentFilterData);
    let keys = [];
    if (typeof prevFilterData === 'undefined' && typeof currentFilterData !== 'undefined') {
      delta = true;
    } else {
      if (typeof currentFilterData === 'object' && currentFilterData !== null) {
        keys = Object.keys(currentFilterData);
        keys.forEach(function(key, index) {
          if (delta === false) {
            if (typeof key !== 'undefined') {
              if ((currentFilterData[key] !== prevFilterData[key])) {
                if ((Array.isArray(currentFilterData[key]) && currentFilterData[key].length === 0)
                      && (Array.isArray(prevFilterData[key]) && prevFilterData[key].length === 0)) {
                  // nothing
                } else {
                  if (Array.isArray(currentFilterData[key]) && Array.isArray(prevFilterData[key])) {
                    // check for length
                    // when equals, iterate and check each entry
                    if (currentFilterData[key].length === prevFilterData[key].length) {
                      for (let i = 0; i < currentFilterData[key].length; i++) {
                        if (currentFilterData[key][i] !== prevFilterData[key][i]) {
                          delta = true;
                          break;
                        }
                      }
                    } else {
                      // not equal length
                      delta = true;
                    }
                  } else {
                    delta = true;
                  }
                }
              }
            }
          }
        }, this);
      } else {
        if (typeof prevFilterData === 'object' && prevFilterData !== null) {
          keys = Object.keys(prevFilterData);
          keys.forEach(function(key, index) {
            if (delta === false) {
              if (typeof key !== 'undefined') {
                if (currentFilterData[key] !== prevFilterData[key]) {
                  delta = true;
                }
              }
            }
          }, this);
        }
      }
    }
    if (this.props.component.checkAsyncWhileUpdate) {
      if (typeof this.props.component.asyncLoading !== 'undefined'
        && this.props.component.asyncLoading !== null) {
        if (this.props.component.asyncLoading !== this.state.asyncLoading) {
          this.setState({
            asyncLoading: this.props.component.asyncLoading,
            filterWasReset: filterWasReset
          });
        }
      }
    }

    if (delta === true && this.state.asyncLoading === true) {
      this.fetchMoreData();
    }
  }

  checkIfFilterWasReset(prevFilterData, currentFilterData) {
    if (prevFilterData && !currentFilterData) {
      return true;
    }
    if (!prevFilterData) {
      return false;
    }
    const excludedFields = [
      'moduleId',
      'randKey'
    ];
    let filterSetBefore = false;
    for (let key in prevFilterData) {
      if (prevFilterData.hasOwnProperty(key)) {
        if (Array.isArray(prevFilterData[key])) {
          if (prevFilterData[key].length > 0) {
            filterSetBefore = true;
          }
        } else {
          if (prevFilterData[key]) {
            filterSetBefore = true
          }
        }
      }
    }
    let filterFieldsEmpty = {};
    let filterEmpty = true;
    // check if filter is cleared now
    for (let key in currentFilterData) {
      if (currentFilterData.hasOwnProperty(key)) {
        if (key === "sorting" && currentFilterData[key] === "random") {
          continue;
        }
        if (excludedFields.includes(key)) {
          continue;
        }
        if (Array.isArray(currentFilterData[key])) {
          filterFieldsEmpty[key] = currentFilterData[key].length === 0;
        } else {
          filterFieldsEmpty[key] = !currentFilterData[key];
        }
      }
    }

    for (let key in filterFieldsEmpty) {
      if (filterFieldsEmpty.hasOwnProperty(key)) {
        if (!filterFieldsEmpty[key]) {
          filterEmpty = false;
          break;
        }
      }
    }

    return filterEmpty && filterSetBefore;
  }

  /**
   * Checks if a distance field exists and if the geolocation is active.
   */
  checkPosition() {
    const fields = this.props.fields;
    let getPos = false;
    for (let key in fields) {
      if (fields.hasOwnProperty(key)) {
        if (fields[key].type === "distance") {
          getPos = true;
          this.geoxFieldname = fields[key].geox;
          this.geoyFieldname = fields[key].geoy;
          this.distanceFieldname = fields[key].name;
          break;
        }
      }
    }
    this.positionActive = getPos && geolocationActive();
  }

  fetchMoreData() {
    let loadData;
    if (this.props.component.onlySearchWithParam) {
      loadData = this.props.component.filterData[this.props.component.onlySearchWithParam] !== "";
    } else {
      loadData = true;
    }

    if (loadData) {
      this.setState({asyncLoading: false});
      let url = this.asyncUrl.replace("{offset}", this.props.data.length);
      url = new URL(url, window.location.protocol + window.location.hostname);
      if (typeof this.props.component.filterData !== 'undefined' && Object.keys(this.props.component.filterData).length !== 0) {
        let filterParams = this.props.component.filterData;
        filterParams = this.transformSelectOptions(filterParams);
        if (this.positionActive && filterParams.sorting === "distance") {
          if (this.position) {
            filterParams.pos = this.position;
          }
          url.search = new URLSearchParams(filterParams).toString();
        } else {
          url.search = new URLSearchParams(filterParams).toString();
        }
      }
      fetch(url.href)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.length === 0) {
              this.props.component.asyncLoading = false;
              // no new data
              this.setState({asyncLoading: false});
              // set updated to true
              this.props.setFunction(this.props.name, this.props.component.data, this.props.component.filterData);
            } else {
              // check for duplicates
              if (this.props.component.uniqueField) {
                responseData = this.removeDuplicates(this.props.component.data, responseData);
              }
              let data = this.props.data.concat(responseData);
              if (!this.state.asyncLoading) {
                let maxData = parseInt(this.props.component.maxData, 10);
                let loadStep = parseInt(this.props.component.loadStep, 10);
                let async = false;
                let maxDataReached = maxData > 0 && data.length === maxData;
                let expectedCountMatched = loadStep === responseData.length;
                if (maxDataReached) {
                  async = false;
                } else if (expectedCountMatched) {
                  async = true;
                }
                this.setState({asyncLoading: async});
              }
              this.props.updateFunction(this.props.name, data);
            }
          }
        );
    }
  }

  transformSelectOptions(data) {
    let result = {};
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let entry = data[key];
        if (entry && entry.length && entry.length > 0 && entry[0].value) {
          let tmpEntry = [];
          for (let i = 0; i < entry.length; i++) {
            tmpEntry.push(entry[i].value);
          }
          entry = tmpEntry;
        }
        result[key] = entry;
      }
    }

    return result;
  }

  addDistances(data) {
    const setPosition = (position) => {
      this.position = [position.coords.longitude, position.coords.latitude];

      data.forEach((element, index) => {
        element[this.distanceFieldname] =
          formatDistance(calculateDistance(this.position, [element[this.geoxFieldname], element[this.geoyFieldname]]));
      });
      this.props.updateFunction(this.props.name, data);
    }
    getGeolocation(setPosition);
  }

  removeDuplicates(currentData, newData) {
    let fieldName = this.props.component.uniqueField;

    const currentUniques = currentData.map((item, id) => {
      return item[fieldName];
    });

    let resultData = [];
    newData.forEach((item, id) => {
      let notContained = !currentUniques.includes(item[fieldName]);
      if (notContained) {
        resultData.push(item);
      }
    });

    return resultData;
  }

  applyTextFilter(event) {
    let searchString = event.target.value;
    const currentData = this.initialData;
    const filterFields = this.props.component.textFilterFields;
    let filteredData = [];
    currentData.forEach((value, index, array) => {
      for (let key in filterFields) {
        if (filterFields.hasOwnProperty(key)) {
          let field = filterFields[key];
          if (value[field].toUpperCase().indexOf(searchString.toUpperCase()) !== -1) {
            if (!filteredData.includes(value)) {
              filteredData.push(value);
            }
            // exit loop
            break;
          }
        }
      }
    });

    this.setState({textFilterContent: searchString});
    this.props.setFunction(this.props.name, filteredData, []);
  }

  componentDidMount() {
    if (this.props.component.withTextFilter) {
      this.initialData = JSON.parse(JSON.stringify(this.props.data));
    }
  }
}