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

const DetailTextField = React.lazy(() => import("./DetailTextField.jsx"));
const DetailDateField = React.lazy(() => import("./DetailDateField.jsx"));
const DetailImageField = React.lazy(() => import("./DetailImageField.jsx"));
const DetailHTMLField = React.lazy(() => import("./DetailHTMLField.jsx"));
const DetailImageGalleryField = React.lazy(() => import("./DetailImageGalleryField.jsx"));
const DetailModalImageGalleryField = React.lazy(() => import("./DetailModalImageGalleryField.jsx"));
const DetailModalFormButtonField = React.lazy(() => import("./DetailModalFormButtonField.jsx"));
const DetailFancyboxImageGallery = React.lazy(() => import("./DetailFancyboxImageGallery.jsx"));
const DetailContactField = React.lazy(() => import("./DetailContactField.jsx"));
const DetailMapLocationField = React.lazy(() => import("./DetailMapLocationField.jsx"));
const DetailOSMOpeningHoursField = React.lazy(() => import("./DetailOSMOpeningHoursField.jsx"));
const DetailPDFField = React.lazy(() => import("./DetailPDFField.jsx"));
const DetailHeadlineField = React.lazy(() => import("./DetailHeadlineField.jsx"));
const DetailTagField = React.lazy(() => import("./DetailTagField.jsx"));
const DetailLinkField = React.lazy(() => import("./DetailLinkField.jsx"));
const DetailVideoPreviewField = React.lazy(() => import("./DetailVideoPreviewField.jsx"));
const DetailFooterField = React.lazy(() => import("./DetailFooterField.jsx"));

export default class DetailMapperField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.field.type) {
      case "text":
        return <DetailTextField {...this.props}/>;
      case "date":
        return <DetailDateField  {...this.props}/>;
      case "image":
        return <DetailImageField {...this.props}/>;
      case "html":
        return <DetailHTMLField  {...this.props}/>;
      case "image-gallery":
        return <DetailImageGalleryField {...this.props}/>;
      case "modal-image-gallery":
        return <DetailModalImageGalleryField {...this.props}/>;
      case "fancybox-image-gallery":
        return <DetailFancyboxImageGallery {...this.props}/>;
      case "modal-form-button":
        return <DetailModalFormButtonField {...this.props}/>;
      case "contact":
        return <DetailContactField {...this.props}/>;
      case "osm-opening-hours":
        return <DetailOSMOpeningHoursField {...this.props}/>;
      case "pdf":
        return <DetailPDFField {...this.props}/>;
      case "map-location":
        return <DetailMapLocationField {...this.props}/>;
      case "headline":
        return <DetailHeadlineField {...this.props}/>;
      case "tag":
        return <DetailTagField {...this.props}/>;
      case "link":
        return <DetailLinkField {...this.props}/>;
      case "video-preview":
        return <DetailVideoPreviewField {...this.props}/>;
      case "footer":
        return <DetailFooterField {...this.props}/>
    }
  }

}