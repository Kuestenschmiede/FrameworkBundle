/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";

const ListTypeTileImageField = React.lazy(() => import("./ListTypeTileHeadlineField.jsx"));
const ListTypeTileHeadlineField = React.lazy(() => import("./ListTypeTileHeadlineField.jsx"));
const ListTypeTileTextField = React.lazy(() => import("./ListTypeTileTextField.jsx"));
const ListTypeTileLinkField = React.lazy(() => import("./ListTypeTileLinkField.jsx"));
const ListTypeTileDescriptionPriceDateTimeField = React.lazy(() => import("./ListTypeTileDescriptionPriceDateTimeField.jsx"));
const ListTypeTileTagLinkField = React.lazy(() => import("./ListTypeTileTagLinkField.jsx"));
const ListTypeTileModalFormButtonField = React.lazy(() => import("./ListTypeTileModalFormButtonField.jsx"));
const TileLinkButtonField = React.lazy(() => import("./../TileLinkButtonField.jsx"));
const TileOSMOpeningHoursField = React.lazy(() => import("./../TileOSMOpeningHoursField.jsx"));


export default class ListTypeTileMapperField extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    switch (this.props.field.type) {
      case "image":
        return <ListTypeTileImageField {...this.props}/>;
      case "headline":
        return <ListTypeTileHeadlineField {...this.props}/>;
      case "text":
        return <ListTypeTileTextField {...this.props}/>;
      case "link":
        return <ListTypeTileLinkField {...this.props}/>;
      case "description-price-date-time":
        return <ListTypeTileDescriptionPriceDateTimeField {...this.props}/>;
      case "icon-link":
        return <ListTypeTileTagLinkField {...this.props}/>;
      case "linkbutton":
        return <TileLinkButtonField {...this.props}/>;
      case "modal-form-button":
        return <ListTypeTileModalFormButtonField {...this.props}/>;
      case "osm-opening-hours":
        return <TileOSMOpeningHoursField {...this.props}/>;
      default:
        return null;
    }
  }
}