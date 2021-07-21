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
import ReactDOM from "react-dom";

const MapController = React.lazy(() => import("../../../../../../MapsBundle/Resources/public/js/components/c4g-maps.jsx"));

export default class DetailMapLocationField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: true,
      showMap: false
    };
    this.myRef = React.createRef();
    this.mapData = this.props.field.asyncMapData ? null : this.props.detail.props.component.mapData;
  }


  render() {
    let map = null;
    let mapData = this.mapData;
    if (mapData !== null) {
      mapData.mapDiv = "c4g_map";
      let geoxField = this.props.field.geoxField;
      let geoyField = this.props.field.geoyField;
      if (!this.state.initial) {
        let geox = this.props.data[geoxField];
        let geoy = this.props.data[geoyField];

        if (this.state.showMap) {
          map = <Suspense fallback={<div>loading...</div>}><MapController mapData={mapData}/></Suspense>;
        }

        var anotherHookFunction = function(layerController) {
          let map = layerController.mapController.map;
          setTimeout(function() {
            map.updateSize();
            map.render();
          }, 1000);
        };
        window.c4gMapsHooks = window.c4gMapsHooks || {};
        window.c4gMapsHooks.hook_layer = window.c4gMapsHooks.hook_layer || [];
        window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
        window.c4gMapsHooks.layer_loaded.push(anotherHookFunction);
      }
    }

    return (
      <div className={"detail-field-map" + (this.props.field.class ? " " + this.props.field.class : "")} ref={this.myRef}>
        <div id={"c4g_map_" + (mapData !== null ? mapData.mapId : 0)} className={"c4g_map"}></div>
        {map}
      </div>
    );
  }

  componentDidMount() {
    if (this.state.initial) {
      if (this.props.field.asyncMapData) {
        fetch(this.props.field.asyncMapDataUrl)
          .then(response => response.json())
          .then(data => {
            this.mapData = data;
            this.setState({initial: false});
          });
      } else {
        this.setState({initial: false});
      }
    }
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.observer.unobserve(this.myRef.current);
          this.setState({
            showMap: true
          });
        }
      });
    });
    this.observer.observe(this.myRef.current);
  }
  componentWillUnmount() {
    this.observer.unobserve(this.myRef.current);
  }

}