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
const MapController = React.lazy(() => import('../../../../../../MapsBundle/Resources/public/js/components/c4g-maps.jsx'));

export default class DetailMapLocationField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: true
    };
  }

  render() {
    let map = null;
    let mapData = this.props.detail.props.component.mapData;
    mapData.mapDiv = "c4g_map";
    let geoxField = this.props.field.geoxField;
    let geoyField = this.props.field.geoyField;
    if (!this.state.initial) {
      let geox = this.props.data[geoxField];
      let geoy = this.props.data[geoyField];
      map = <MapController mapData={mapData}/>;
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
    return (
      <div className={"detail-field-map" + (this.props.field.class ? " " + this.props.field.class : "")}>
        <div id={"c4g_map_" + mapData.mapId} className={"c4g_map"}></div>
        {map}
      </div>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    if (this.state.initial) {
      this.setState({initial: false});
    }
  }

}