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
import hasConditions from "../../util/conditions";
import {AlertHandler} from "../../../../../../CoreBundle/Resources/public/js/AlertHandler.js";

export default class CustomSubmitButton extends Component {
  constructor(props) {
    super(props);

    this.clickButton = this.clickButton.bind(this);
    this.submitCallback = this.submitCallback.bind(this);
  }

  clickButton(event) {
    if (this.props.form.props.component.renderAsForm) {
      this.props.form.activeButton = this;
    } else {
      this.submitCallback(this.props.form, event)
    }
  }

  submitCallback(form, event) {
    event.preventDefault();
    event.stopPropagation();
    let data = this.props.form.props.component.data;
    if (this.geopickerFieldExists()) {
      data = this.setGeoData(data);
    }
    if (data) {
      if (this.validateData(data)) {
        this.submitData(data);
      }
    }
  }
  submitData(data) {
    this.props.form.setLoading(true);
    jQuery.post(this.props.button.url, data).done((data) => {
      this.props.form.setLoading(false);
      if (this.props.button.redirectUrl) {
        if (data.success) {
          // catch newly created dataset
          let redirectUrl = this.props.button.redirectUrl;
          if (this.props.button.redirectUrl.endsWith("/")) {
            if (data.alias) {
              redirectUrl += data.alias;
            }
          }
          window.location = redirectUrl;
        } else {
          this.props.form.setErrorTexts(data.fields)
        }
      }
    });

  }
  setGeoData(data) {
    let mapController = this.props.form.mapControllerRef;
    let geopicker = mapController.mapsControls.controls.geopicker;
    let editor = mapController.mapsControls.controls.editor;
    if (geopicker && geopicker.$fieldGeoX && geopicker.$fieldGeoY) {
      let geox = geopicker.$fieldGeoX.val();
      let geoy = geopicker.$fieldGeoY.val();
      data.geox = geox;
      data.geoy = geoy;
      if (!data.geox && !data.geoy && data.locationCity && data.locationStreet) {
        this.addPosition(data, mapController);
        return false;
      }
      else if (data.geox && data.geoy && (!data.locationCity || !data.locationStreet || !data.locationStreetNumber)) {
        this.addAddress(data, mapController);
        return false;
      }
    }
    else if (editor && mapController.data.editor && mapController.data.editor.inputField) {
      let geojson = $(mapController.data.editor.inputField).val();
      data.geojson = geojson;
    }

    return data;
  }

  validateData(data) {
    if (data.published) {
      let fields = this.props.form.props.component.fields;
      for (let fieldId in fields) {
        if (fields.hasOwnProperty(fieldId)) {
          const field = fields[fieldId];
          if (field.required && hasConditions(field, data)) {
            if (!data[field.name]) {
              const fieldNode = $("#" + field.name);
              fieldNode.focus();
              fieldNode.keyup(function(){
                $(this).removeClass("field-invalid");
                $(this).off("keyup");
              })
              fieldNode.addClass("field-invalid");
              return false;
            }
          }
        }
      }
      if (!this.checkZipcode(data)) {
        return false;
      }
    }

    return true;
  }
  checkZipcode (data) {
    if (data.geox && data.geoy && data.locationZip) {
      const mapController = this.props.form.mapControllerRef;
      let url = mapController.data.geosearch.url + "reverse.php?key=";
      url += mapController.data.geosearch.reverseKey;
      url += "&lon=" + data.geox;
      url += "&lat=" + data.geoy;
      url += "&format=json";
      jQuery.ajax({
        dataType: "json",
        url: url
      }).done((response) => {
        if (response && response.address && response.address.postcode) {
          if(response.address.postcode === data.locationZip) {
            this.submitData(data)
          }
          else {
            const fieldNode = $("#locationZip");
            fieldNode.focus();
            fieldNode.keyup(function(){
              $(this).removeClass("field-invalid");
              $(this).off("keyup");
            })
            fieldNode.addClass("field-invalid");
            const ah = new AlertHandler();
            let title = this.props.languageRefs.CHECK_POSITION;
            let content = this.props.languageRefs.POSITION_OUT_OF_RANGE;
            ah.showErrorDialog(title, content);
          }
        } else {
          // show error hint
          this.submitData(data);
        }

      }).fail(()=> {
        this.submitData(data);

      })
      return false;
    }
    else {
      return true;
    }
  }
  addPosition(data, mapController) { // add a position when none is provided but address is
    let city = data.locationCity;
    let street = data.locationStreet;
    let streetnumber = data.locationStreetNumber;
    let url = mapController.data.geosearch.url + "search.php?format=json&limit=1";
    let key = mapController.data.geosearch.searchKey;
    url += city ? "&city=" + encodeURIComponent(city) : "";
    url += street ? "&street=" + encodeURIComponent(streetnumber + " " + street) : "";
    url += "&key=" + key;
    jQuery.ajax({
      dataType: "json",
      url: url
    })
    .done((response) => {
      if (response[0] && response[0].lon && response[0].lat) {
        let result = response[0];
        const ah = new AlertHandler();
        let alertText = "<b>Breite:</b> " + result.lat + " <br><b>Länge:</b> " + result.lon;
        let alertHeadline = this.props.languageRefs.ADD_GEOLOCATION;
        let textConfirm = this.props.languageRefs.SAVE_WITH_POSITION;
        let textCancel = this.props.languageRefs.SAVE_WITHOUT_POSITION;
        const confirmCallback = () => {
          let data = this.props.form.props.component.data
          data.geoy = result.lat;
          data.geox = result.lon;
          if (this.validateData(data)) {
            this.submitData(data);
          }
        };
        const cancelCallback = () => {
          let data = this.props.form.props.component.data
          if (this.validateData(data)) {
            this.submitData(data);
          }
        };
        ah.showConfirmDialogHTML(alertHeadline, alertText, confirmCallback, cancelCallback, textConfirm, textCancel);
      }
      else {
        if (this.validateData(data)) {
          this.submitData(data);
        }
      }
    })
    .fail(() => {
      if (this.validateData(data)) {
        this.submitData(data);
      }
    });
  }
  addAddress (data, mapController) { //add an address when none is provided but position is
    let url = mapController.data.geosearch.url + "reverse.php?key=";
    url += mapController.data.geosearch.reverseKey;
    url += "&lon=" + data.geox;
    url += "&lat=" + data.geoy;
    url += "&format=json";
    jQuery.ajax({
      dataType: "json",
      url: url
    })
    .done((response) => {
      const ah = new AlertHandler();
      let city = data.locationCity;
      let street = data.locationStreet;
      let streetnumber = data.locationStreetNumber;
      let alertText = "";
      if (!city) {
        city = response.address.city || response.address.town || response.address.village;
        alertText += "<b>Ort:</b> " + city + "<br>";
      }
      if (!street) {
        street = response.address.road || response.address.street;
        alertText += "<b>Straße:</b> " + street + "<br>";
      }
      if (!streetnumber) {
        streetnumber = response.address.house_number;
        alertText += "<b>Hausnummer:</b> " + streetnumber + "<br>";
      }


      let alertHeadline = this.props.languageRefs.ADD_ADDRESS;
      let textConfirm = this.props.languageRefs.SAVE_WITH_ADDRESS;
      let textCancel = this.props.languageRefs.SAVE_WITHOUT_ADDRESS;
      const confirmCallback = () => {
        let data = this.props.form.props.component.data
        data.locationCity = city;
        data.locationStreet = street;
        data.locationStreetNumber = streetnumber;
        if (this.validateData(data)) {
        this.submitData(data);
      }
      };
      const cancelCallback = () => {
        let data = this.props.form.props.component.data
        if (this.validateData(data)) {
        this.submitData(data);
      }
      };
      if (alertText) {
        ah.showConfirmDialogHTML(alertHeadline, alertText, confirmCallback, cancelCallback, textConfirm, textCancel);
      }
      else {
        if (this.validateData(data)) {
        this.submitData(data);
      }
      }
    })
    .fail(() => {
      if (this.validateData(data)) {
        this.submitData(data);
      }
    });
  }

  render() {
    return (
      <button className={this.props.button.className + " btn btn-primary mr-3"} type="submit" onClick={this.clickButton}>{this.props.button.caption}</button>
    );
  }

  geopickerFieldExists() {
    let fields = this.props.form.props.component.fields;
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].type === "geopicker") {
        return true;
      }
    }
    return false;
  }

}