/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, lazy} from "react";
import MapController from "../../../../../../MapsBundle/Resources/public/js/components/c4g-maps.jsx";
// const MapController = React.lazy(() => import("../../../../../../MapsBundle/Resources/public/js/components/c4g-maps.jsx"));

export default class FormGeopickerField extends Component {

  constructor(props) {
    super(props);

    this.mapData = this.props.field.mapData || this.props.form.props.component.mapData;
    this.geoxName = this.props.field.geoxName || this.props.field.geoxName;
    this.geoyName = this.props.field.geoyName || this.props.field.geoyName;
    this.geoJsonName = this.props.field.geoJsonName || this.props.field.geoJsonName;

    this.state = {
      initial: true
    };

  }

  render() {
    this.mapData.mapDiv = "c4g_map";
    let map = null;
    if (!this.state.initial) {
      map = <MapController ref={(node) => {this.props.form.mapControllerRef = node;}} mapData={this.mapData} />;
    }
    let description = null;
    if (this.props.field.label) {
      description = (<span className={"field-description"}>{this.props.field.description}</span>);
    }
    let inputField = null;
    if (this.mapData.geopicker && this.mapData.geopicker.type === "frontend") {
      inputField = <React.Fragment>
        <input type="text" id={this.geoxName} name={this.geoxName} defaultValue={this.props.data[this.geoxName]} disabled={true}/>
        <input type="text" id={this.geoyName} name={this.geoyName} defaultValue={this.props.data[this.geoyName]} disabled={true}/>
      </React.Fragment>;
    }
    else if (this.mapData.editor) {
      inputField = <input type="text" id={this.geoJsonName} name={this.geoJsonName} defaultValue={this.props.data[this.geoJsonName]}/>
    }
    return (
      <React.Fragment>
        <div id={"c4g_map_" + this.mapData.mapId}></div>
        {map}
        <label htmlFor="">{this.props.field.label}</label>
        {inputField}
        {description}
      </React.Fragment>
    );
  }

  componentDidMount() {
    if (this.state.initial) {
      this.setState({initial: false});
    }
  }

}