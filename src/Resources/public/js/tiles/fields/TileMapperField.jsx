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
const TileTextField = React.lazy(() => import("./TileTextField.jsx"));
const TileReferenceField = React.lazy(() => import("./TileReferenceField.jsx"));
const TilePostalCityField = React.lazy(() => import("./TilePostalCityField.jsx"));
const TileStreetField = React.lazy(() => import("./TileStreetField.jsx"));
const TileHeadlineField = React.lazy(() => import("./TileHeadlineField.jsx"));
const TileAddressField = React.lazy(() => import("./TileAddressField.jsx"));
const TilePhoneField = React.lazy(() => import("./TilePhoneField.jsx"));
const TileEmailField = React.lazy(() => import("./TileEmailField.jsx"));
const TileHTMLField = React.lazy(() => import("./TileHTMLField.jsx"));
const TileIconField = React.lazy(() => import("./TileIconField.jsx"));
const TileImageField = React.lazy(() => import("./TileImageField.jsx"));
const TileLinkField = React.lazy(() => import("./TileLinkField.jsx"));
const TileLinkButtonField = React.lazy(() => import("./TileLinkButtonField.jsx"));
const TileModalButtonField = React.lazy(() => import("./TileModalButtonField.jsx"));
const TileDateField = React.lazy(() => import("./TileDateField.jsx"));
const TileDistanceField = React.lazy(() => import("./TileDistanceField.jsx"));
const TileTagField = React.lazy(() => import("./TileTagField.jsx"));
const TileWrapperField = React.lazy(() => import("./TileWrapperField.jsx"));
const TileOSMOpeningHoursField = React.lazy(() => import("./TileOSMOpeningHoursField.jsx"));

export default class TileMapperField extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    switch (this.props.field.type) {
      case "address":
        return <TileAddressField {...this.props}/>;
      case "text":
        return <TileTextField {...this.props}/>;
      case "reference":
        return <TileReferenceField {...this.props}/>;
      case "postalCity":
        return <TilePostalCityField {...this.props}/>;
      case "street":
        return <TileStreetField {...this.props}/>;
      case "phone":
        return <TilePhoneField {...this.props}/>;
      case "email":
        return <TileEmailField {...this.props}/>;
      case "html":
        return <TileHTMLField {...this.props}/>;
      case "icon":
        return <TileIconField {...this.props}/>;
      case "image":
        return <TileImageField {...this.props}/>;
      case "link":
        return <TileLinkField {...this.props}/>;
      case "linkbutton":
        return <TileLinkButtonField {...this.props}/>;
      case "modal-button":
        return <TileModalButtonField {...this.props}/>;
      case "date":
        return <TileDateField {...this.props}/>;
      case "distance":
        return <TileDistanceField {...this.props}/>;
      case "headline":
        return <TileHeadlineField{...this.props}/>;
      case "tag":
        return <TileTagField {...this.props}/>;
      case "wrapper":
        return <TileWrapperField {...this.props}/>;
      case "osm-opening-hours":
        return <TileOSMOpeningHoursField {...this.props}/>;
      default:
        return null;
    }
  }

}