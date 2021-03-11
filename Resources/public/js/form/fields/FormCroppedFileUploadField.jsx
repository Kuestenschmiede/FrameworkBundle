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
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Swal from 'sweetalert2';
import loadImage from "blueimp-load-image/js";
import checkIfFieldIsRendered from "../../util/conditions";

export default class FormCroppedFileUploadField extends Component {
  constructor(props) {
    super(props);

    this.getCroppedImg = this.getCroppedImg.bind(this);
    this.onSelectFile = this.onSelectFile.bind(this);
    this.onImageLoaded = this.onImageLoaded.bind(this);
    this.onCropComplete = this.onCropComplete.bind(this);
    this.makeClientCrop = this.makeClientCrop.bind(this);
    this.onCropChange = this.onCropChange.bind(this);
    this.unsetImage = this.unsetImage.bind(this);

    this.state = {
      src: null,
      imageName: "",
      crop: {
        unit: '%',
        width: 90,
        height: 90,
        x: 5,
        y: 5
      },
      croppedImageUrl: null
    };

    if (this.props.data[this.props.field.name]) {
      this.state.src = this.props.data[this.props.field.name].path;
      this.state.imageName = this.props.data[this.props.field.name].name;
    }

    this.allowedFileTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg"
    ];
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      if (this.checkFileSize(e.target.files[0])) {
        if (this.allowedFileTypes.includes(e.target.files[0].type)) {
          const imageName = e.target.files[0].name;
          const imageType = e.target.files[0].type;
          loadImage(
              e.target.files[0],
              img => {
                var base64data = img.toDataURL(imageType);
                this.setState({ src: base64data, imageName: imageName });
              },
              { orientation: true, canvas: true }
          );
        } else {
          Swal.fire({
            icon: "error",
            title:  this.props.field.titleFileTooBig,
            text: this.props.field.textFileTooBig
          });
          e.target.value = "";
        }
      } else {
        Swal.fire({
          icon: "error",
          title: this.props.field.titleFileTooBig,
          text: this.props.field.textFileTooBig
        });
        e.target.value = "";
      }
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
    let newCrop = JSON.parse(JSON.stringify(this.state.crop));
    if (this.props.data[this.props.field.name]) {
      let importantPart = this.props.data[this.props.field.name].importantPart;
      newCrop.x = importantPart.x * this.imageRef.width;
      newCrop.y = importantPart.y * this.imageRef.height;
      newCrop.width = importantPart.width * this.imageRef.width;
      newCrop.height = importantPart.height * this.imageRef.height;
      newCrop.unit = "px";
      this.setState({crop: newCrop}, () => this.onCropComplete(newCrop));
      return false;
    }
  };

  async onCropComplete (crop) {
    await this.makeClientCrop(crop);
    let imageData = {
      imageData: this.state.src,
      importantPart: {
        x: crop.x / this.imageRef.width,
        y: crop.y / this.imageRef.height,
        width: crop.width / this.imageRef.width,
        height: crop.height / this.imageRef.height
      },
      imageName: this.state.imageName
    };
    let data = this.props.data;
    data[this.props.field.name] = imageData;
    this.props.form.props.updateFunction(this.props.form.props.name, data);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop: percentCrop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl: croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return canvas.toDataURL('image/jpeg');
  }

  checkFileSize(file) {
    let filesize = file.size;
    let sizeInKb, sizeInMb;
    if (filesize > 1000) {
      sizeInKb = filesize / 1000;
      if (sizeInKb > 1000) {
        sizeInMb = sizeInKb / 1000;
        if (sizeInMb > 6) {
          return false;
        }
      }
    }
    return true;
  }

  render() {
    // check condition
    if (!checkIfFieldIsRendered(this.props.field, this.props.data)) {
      return null;
    }

    let label = null;
    if (this.props.field.label) {
      if (this.props.field.required) {
        label = <label className={"label-file c4g-required"}>{this.props.field.label}</label>;
      } else {
        label = <label className={"label-file"}>{this.props.field.label}</label>
      }
    }

    const { crop, croppedImageUrl, src } = this.state;
    const fieldName = this.props.field.name;

    let description = null;
    if (this.props.field.description) {
      description = (<small className={"field-description form-text text-muted"}>{this.props.field.description}</small>);
    }
    return (
      <React.Fragment>
        <div className={"form-group"}>
          {label}
          <input type={"file"} accept=".jpg, .png, .jpeg" onChange={this.onSelectFile} id={fieldName}
                 name={fieldName + (this.props.field.max > 1 ? "[]" : "")} className={"form-control-file"}/>
          {description}
        </div>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )}
        {croppedImageUrl && (
          <button onClick={this.unsetImage} title={this.props.languageRefs.CLICK_TO_REMOVE_IMAGE}
                  className={"btn btn-primary remove-image " + this.props.field.name}>{this.props.languageRefs.REMOVE_IMAGE}</button>
        )}
      </React.Fragment>
    );
  }

  unsetImage() {
    let data = this.props.data;
    data[this.props.field.name] = null;
    this.setState({
      src: null,
      imageName: null,
      crop: null,
      croppedImageUrl: null
    });
    this.props.form.props.updateFunction(this.props.form.props.name, data);
  }
}