/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import hasConditions from "../../util/conditions";
import {AlertHandler} from "../../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js";

export default class CustomSubmitButton extends Component {
  constructor(props) {
    super(props);

    this.clickButton = this.clickButton.bind(this);
    this.submitCallback = this.submitCallback.bind(this);

    this.state = {
      active: true
    };
  }

  clickButton(event) {
    this.setState({active: false}, () => {
      if (this.props.form.props.component.renderAsForm) {
        this.props.form.activeButton = this;
      } else {
        this.submitCallback(this.props.form, event);
      }
    });
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
  submitData(requestData) {
    this.props.form.setLoading(true);
    jQuery.post(this.props.button.url, requestData).done((data) => {
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
          this.props.form.storePosition();
          window.location = redirectUrl;
        } else {
          this.props.form.setErrorTexts(data.fields);
          // call hook function for failed submit
          this.callSubmitFailed(requestData, data.fields);
        }
      }
      this.setState({active: true});
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
          if (field.name) {
            let fieldNode = $("#" + field.name);
            if (field.required && fieldNode.length && hasConditions(field, data, this.props.form.props.component.fields)) {
              let invalid = false;
              if (field.type === "number") {
                if (data[field.name] === null
                  || typeof data[field.name] === "undefined"
                  || data[field.name] === ""
                ) {
                  invalid = true;
                }
              } else if (field.type === "select") {
                if (
                  !data[field.name] ||
                  (typeof data[field.name] === 'string' && !data[field.name]) ||
                  (typeof data[field.name].forEach === 'function' && data[field.name].length === 0) ||
                  (typeof data[field.name] === 'object' && typeof data[field.name].forEach !== 'function' && !data[field.name].value)
                ) {
                  //console.log(typeof data[field.name] === 'string' && !data[field.name]);
                  //console.log(typeof data[field.name].forEach === 'function' && data[field.name].length === 0);
                  //console.log(typeof data[field.name] === 'object' && typeof data[field.name].forEach !== 'function' && !data[field.name].value);
                  //console.log(data[field.name]);
                  invalid = true;
                }
              } else {
                if (!data[field.name]) {
                  invalid = true;
                }
              }
              if (invalid) {
                if (field.type === "select") {
                  fieldNode = fieldNode.children()[1];
                  fieldNode.style.borderColor = '#dc3545';
                  fieldNode.style.boxShadow = 'none';
                  fieldNode.parentNode.nextSibling.addEventListener('select', function () {
                    fieldNode.style.removeProperty('borderColor');
                    fieldNode.style.removeProperty('boxShadow');
                  });
                } else {
                  fieldNode = fieldNode[0];
                  $(fieldNode).keyup(function () {
                    $(this).removeClass("is-invalid");
                    $(this).off("keyup");
                  });
                  fieldNode.classList.add("is-invalid");
                  if (!fieldNode.classList.contains('form-control')) {
                    fieldNode.classList.add('form-control');
                  }
                }
                fieldNode.focus();
                fieldNode.scrollIntoView({behavior: 'smooth'});

                this.callSubmitFailed(data, [field]);
                return false;
              } else {
                if (field.type === "select") {
                  fieldNode = fieldNode.children()[1];
                  fieldNode.style.removeProperty('borderColor');
                  fieldNode.style.removeProperty('boxShadow');
                }
              }
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

  callSubmitFailed(data, fields) {
    if (window.c4gHooks && window.c4gHooks.submitFailed) {
      for (let i = 0; i < window.c4gHooks.submitFailed.length; i++) {
        if (typeof window.c4gHooks.submitFailed[i] === "function") {
          window.c4gHooks.submitFailed[i](fields, data);
        }
      }
    }
    this.setState({active: true});
  }

  checkZipcode (data) {
    try {
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
            if (response.address.postcode === data.locationZip) {
              this.submitData(data);
            } else {
              const fieldNode = $("#locationZip");
              fieldNode.focus();
              fieldNode.keyup(function () {
                $(this).removeClass("is-invalid");
                $(this).off("keyup");
              });
              fieldNode.addClass("is-invalid");
              const ah = new AlertHandler();
              let title = this.props.languageRefs.CHECK_POSITION;
              let content = this.props.languageRefs.POSITION_OUT_OF_RANGE;
              ah.showConfirmDialog(title, content, ()=> {this.submitData(data)}, ()=> {}, this.props.languageRefs.POSITION_OUT_OF_RANGE_CONFIRM, this.props.languageRefs.POSITION_OUT_OF_RANGe_CANCEL);
            }
          } else {
            // show error hint
            this.submitData(data);
          }

        }).fail(() => {
          this.submitData(data);

        });
        return false;
      } else {
        return true;
      }
    } catch (e) {
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
          let data = this.props.form.props.component.data;
          data.geoy = result.lat;
          data.geox = result.lon;
          if (this.validateData(data)) {
            this.submitData(data);
          }
        };
        const cancelCallback = () => {
          let data = this.props.form.props.component.data;
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
      if (!city && response.address) {
        city = response.address.city || response.address.town || response.address.village;
        alertText += "<b>Ort:</b> " + city + "<br>";
      }
      if (!street && response.address) {
        street = response.address.road || response.address.street;
        alertText += "<b>Straße:</b> " + street + "<br>";
      }
      if (!streetnumber && response.address && response.address.house_number) {
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
    if (this.state.active) {
      return (
        <button className={this.props.button.className + " btn btn-primary mr-3"} type="submit" onClick={this.clickButton}>{this.props.button.caption}</button>
      );
    } else {
      return (
        <button className={this.props.button.className + " btn btn-primary mr-3"} type="submit" onClick={this.clickButton} disabled={true}>{this.props.button.caption}</button>
      );
    }

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