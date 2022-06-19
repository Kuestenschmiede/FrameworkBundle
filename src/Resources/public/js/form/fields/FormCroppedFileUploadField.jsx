/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop';
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
        y: 5,
        scale: 1,
        rotate: 0,
        aspect: (16 / 9),
        completeCrop: 0
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
    this.inputRef = null;
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
                this.setState({ src: base64data, imageName: imageName, scale: 1, rotate: 0 });
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
  onImageLoaded = img => {
    var image = img.currentTarget;
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
        x: this.imageRef ? crop.x / this.imageRef.width : crop.x,
        y: this.imageRef ? crop.y / this.imageRef.height : crop.y,
        width: this.imageRef ? crop.width / this.imageRef.width : crop.width,
        height: this.imageRef ? crop.height / this.imageRef.height : crop.height
      },
      imageName: this.state.imageName
    };
    let data = this.props.data;
    data[this.props.field.name] = imageData;
    this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop: percentCrop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        this.state.scale,
        this.state.rotate
      );

      this.setState({croppedImageUrl: croppedImageUrl});
    }
  }

  getCroppedImg(image, crop, scale = 1, rotate = 0) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const TO_RADIANS = Math.PI / 180;

    if (!ctx) {
      throw new Error('No 2d context');
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    const pixelRatio = window.devicePixelRatio;
    // const pixelRatio = 1

    canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = 'high';

    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;

    const rotateRads = rotate * TO_RADIANS;
    const centerX = image.naturalWidth / 2;
    const centerY = image.naturalHeight / 2;

    ctx.save();

    // 5) Move the crop origin to the canvas origin (0,0)
    ctx.translate(-cropX, -cropY);
    // 4) Move the origin to the center of the original position
    ctx.translate(centerX, centerY);
    // 3) Rotate around the origin
    ctx.rotate(rotateRads);
    // 2) Scale the image
    ctx.scale(scale, scale);
    // 1) Move the center of the image to the origin (0,0)
    ctx.translate(-centerX, -centerY);
    ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
    );

    ctx.restore();
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
    if (!checkIfFieldIsRendered(this.props.field, this.props.data, this.props.fields)) {
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

    const fieldName = this.props.field.name;

    let description = null;
    if (this.props.field.description) {
      description = (<small className={"field-description form-text text-muted"}>{this.props.field.description}</small>);
    }

    this.state.scale = this.state.scale ? this.state.scale : 1;
    this.state.rotate = this.state.rotate ? this.state.rotate : 0;

    return (
      <React.Fragment>
        <div className={"form-group"}>
          {label}

          <div className="Crop-Controls">
            <input type={"file"} accept=".jpg, .png, .jpeg" onChange={this.onSelectFile} id={fieldName} ref={(node) => {this.inputRef = node;}}
                   name={fieldName + (this.props.field.max > 1 ? "[]" : "")} className={"form-control-file"}/>
            {description}
            <div>
              <label hidden={!this.state.src} htmlFor="scale-input">Skalieren: </label> {/*ToDo Language*/}
              <input
                  id="scale-input"
                  type="range"
                  step="0.1"
                  min="1"
                  max="2"
                  list="scale-list"
                  // defaultValue="1"
                  value={this.state.scale ? this.state.scale : 1}
                  disabled={!this.state.src}
                  hidden={!this.state.src}
                  onChange={(e) => {
                      this.setState({scale: Number(e.target.value)}, () => this.onCropComplete(this.state.crop));
                      e.target.value = "";
                    }
                  }
              />
              <output hidden={!this.state.src} className={"scale-output"} htmlFor="scale-input">{Math.trunc(this.state.scale*100)} %</output>
              <datalist id="scale-list">
                <option value="1" label="0%"></option>
                <option value="1.1"></option>
                <option value="1.2"></option>
                <option value="1.3"></option>
                <option value="1.4"></option>
                <option value="1.5" label="50%"></option>
                <option value="1.6"></option>
                <option value="1.7"></option>
                <option value="1.8"></option>
                <option value="1.9"></option>
                <option value="2" label="100%"></option>
              </datalist>
            </div>
            <div>
              <label hidden={!this.state.src} htmlFor="rotate-input">Rotieren: </label> {/*ToDo Language*/}
              <input
                  id="rotate-input"
                  type="range"
                  min="0"
                  max="360"
                  step="30"
                  list="rotate-list"
                  value={this.state.rotate ? this.state.rotate : 0}
                  disabled={!this.state.src}
                  hidden={!this.state.src}
                  onChange={(e) => {
                      this.setState({rotate: Number(e.target.value)}, () => this.onCropComplete(this.state.crop));
                      e.target.value = "";
                    }
                  }
              />
              <output hidden={!this.state.src} className={"rotate-output"}  htmlFor="rotate-input">{this.state.rotate} °</output>
              <datalist id="rotate-list">
                <option value="0" label="0"></option>
                <option value="30"></option>
                <option value="60"></option>
                <option value="90" label="90"></option>
                <option value="120"></option>
                <option value="150"></option>
                <option value="180" label="180"></option>
                <option value="210"></option>
                <option value="240"></option>
                <option value="270" label="270"></option>
                <option value="300"></option>
                <option value="330"></option>
                <option value="360" label="360"></option>
              </datalist>
            </div>
          </div>
          {Boolean(this.state.src) && (
              <ReactCrop
                  src={this.state.src}
                  crop={this.state.crop}
                  ruleOfThirds
                  onImageLoaded={this.onImageLoaded}
                  onChange={this.onCropChange}
                  onComplete={this.onCropComplete}
                  aspect={this.state.aspect}
              >
              <label>Originalbild</label>
              <img
                  ref={(node) => {this.inputRef = node;}}
                  alt="Crop me"
                  src={this.state.src}
                  style={{ transform: `scale(${this.state.scale}) rotate(${this.state.rotate}deg)`,
                    border: '1px solid black',
                    objectFit: 'contain',
                    maxWidth: '100%'}}
                  onLoad={this.onImageLoaded}
              />
              </ReactCrop>
          )}
          <label hidden={!this.state.croppedImageUrl}>Bild bearbeitet</label>
          {this.state.croppedImageUrl && (
            <img alt="Crop" src={this.state.croppedImageUrl} style={{
                  border: '1px solid black',
                  objectFit: 'contain',
                  maxWidth: '100%'
                }}
            />
          )}

          {this.state.src && (
              <button onClick={this.unsetImage} title={this.props.languageRefs.CLICK_TO_REMOVE_IMAGE}
                      className={"btn btn-primary btn-remove remove-image " + this.props.field.name}>{this.props.languageRefs.REMOVE_IMAGE}</button>
          )}
        </div>
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
      croppedImageUrl: null,
      scale: 1,
      rotate: 0
    });
    if (this.inputRef !== null) {
      // clear file selection
      this.inputRef.value = "";
    }
    this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
  }
}