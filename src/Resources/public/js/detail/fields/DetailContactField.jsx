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
import DetailOSMOpeningHoursField from "./DetailOSMOpeningHoursField.jsx";
import DetailLinkField from "./DetailLinkField.jsx";

export default class DetailContactField extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let label = null;
    let email = null;
    let phone = null;
    let website = null;
    let openingTimes = null;
    let address = null;
    let socialMedia = null;

    if (this.props.data[this.props.field.emailFieldName] ||
        this.props.data[this.props.field.phoneFieldName] ||
        this.props.data[this.props.field.websiteFieldName] ||
        this.props.data[this.props.field.openingTimesFieldName] ||
        this.props.field.addressFieldnamePrefix ||
        this.props.field.withSocialMedia
    ) {
      if (this.props.field.label) {
        label = <h2>{this.props.field.label}</h2>;
      }
    }

    if (this.props.data[this.props.field.emailFieldName]) {
      let emailAddress = this.props.data[this.props.field.emailFieldName];
      let href = "mailto:" + emailAddress;
      email = (<React.Fragment>
        <span className={"entry-content email"} itemProp={"email"}>
            <a href={href}>{emailAddress}</a>
          </span>
      </React.Fragment>);
    }
    if (this.props.data[this.props.field.phoneFieldName]) {
      let phoneNumber = this.props.data[this.props.field.phoneFieldName];
      let href = "tel:" + phoneNumber;
      phone = (<React.Fragment><span className={"entry-content phone"} itemProp={"phone"}>
            <a href={href}>{phoneNumber}</a>
      </span></React.Fragment>);
    }
    if (this.props.data[this.props.field.websiteFieldName]) {
      let href = this.props.data[this.props.field.websiteFieldName];
      website = (<span className={"entry-content website"}>
          <a href={href}>{this.props.languageRefs.WEBSITE}</a>
        </span>);
    }
    if (this.props.data[this.props.field.openingTimesFieldName]) {
      let field = this.props.field;
      field.name = this.props.field.openingTimesFieldName;
      openingTimes = <DetailOSMOpeningHoursField data={this.props.data} field={field} languageRefs={this.props.languageRefs}/>
    }

    if (this.props.field.addressFieldnamePrefix) {
      let addressData = this.createAddressData();
      address = <div>
        <h3 className={"entry-content name"}>{addressData.name}</h3>
        <span className={"entry-content additionalName"}>{addressData.additionalName}</span>
        <div className={"street"}>
          <span className={"street"}>{addressData.street}</span>
          &nbsp;
          <span className={"streetNumber"}>{addressData.streetNumber}</span>
        </div>
        <div className={"entry-content"}>
          <span className={"zip"}>{addressData.zip}</span>
          &nbsp;
          <span className={"city"}>{addressData.city}</span>
        </div>
      </div>
    }

    if (this.props.field.withSocialMedia) {
      socialMedia = this.props.field.socialMediaFields.map((item, index) => {
        return <DetailLinkField key={index} field={item} data={this.props.data} languageRefs={this.props.languageRefs}/>
      });
    }
    return (
      <div className={"detail-field-contact" + (this.props.field.class ? " " + this.props.field.class : "")}>
        {label}
        {address}
        {phone}
        {email}
        {website}
        {openingTimes}
        {socialMedia}
      </div>
    );
  }

  createAddressData() {
    let prefix = this.props.field.addressFieldnamePrefix;
    let fallback = this.props.field.addressFieldnameFallbackPrefix;
    const data = this.props.data;
    let addressData = {};
    // name
    if (data[prefix + "Name"]) {
      addressData.name = data[prefix + "Name"];
    } else if (data[fallback + "Name"]) {
      addressData.name = data[fallback + "Name"];
    }
    // additional name
    if (data[prefix + "AdditionalName"]) {
      addressData.additionalName = data[prefix + "AdditionalName"];
    } else if (data[fallback + "AdditionalName"]) {
      addressData.additionalName = data[fallback + "AdditionalName"];
    }
    // street
    if (data[prefix + "Street"]) {
      addressData.street = data[prefix + "Street"];
    } else if (data[fallback + "Street"]) {
      addressData.street = data[fallback + "Street"];
    }
    // streetnumber
    if (data[prefix + "StreetNumber"]) {
      addressData.streetNumber = data[prefix + "StreetNumber"];
    } else if (data[fallback + "StreetNumber"]) {
      addressData.streetNumber = data[fallback + "StreetNumber"];
    }

    if (addressData.streetNumber === 0 || addressData.streetNumber === '0') {
      addressData.streetNumber = '';
    }

    // zip
    if (data[prefix + "Zip"]) {
      addressData.zip = data[prefix + "Zip"];
    } else if (data[fallback + "Zip"]) {
      addressData.zip = data[fallback + "Zip"];
    }
    // city
    if (data[prefix + "City"]) {
      addressData.city = data[prefix + "City"];
    } else if (data[fallback + "City"]) {
      addressData.city = data[fallback + "City"];
    }

    return addressData;
  }
}