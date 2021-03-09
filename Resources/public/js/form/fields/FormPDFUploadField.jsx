import React, {Component} from "react";
import checkIfFieldIsRendered from "../../util/conditions";
import Swal from "sweetalert2";

export default class FormPDFUploadField extends Component {

  constructor(props) {
    super(props);

    this.allowedFileTypes = ["application/pdf"];
    this.onSelectFile = this.onSelectFile.bind(this);
    this.checkFileSize = this.checkFileSize.bind(this);
    this.processPdf = this.processPdf.bind(this);
  }

  onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      if (this.checkFileSize(e.target.files[0])) {
        if (this.allowedFileTypes.includes(e.target.files[0].type)) {
          const fileName = e.target.files[0].name;
          const fileType = e.target.files[0].type;
          this.processPdf(e.target.files[0], fileName, fileType);
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
  }

  checkFileSize(file) {
    if (this.props.field.maxFileSize === -1) {
      return true;
    }
    return file.size <= this.props.field.maxFileSize;
  }

  processPdf(file, fileName, fileType) {
    // TODO pdf viewer zur preview

    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      const base64 = data.replace(/^[^,]*,/, '');

      const fileInfo = {
        name: fileName,
        data: base64
      }
      if (this.props.field.setChangedFlag) {
        fileInfo.changed = true;
      }
      let formData = this.props.form.props.component.data;
      formData[this.props.field.name] = fileInfo;
      this.props.form.props.updateFunction(this.props.form.props.name, formData);
    }

    reader.readAsDataURL(file);
  }

  render() {
    // check condition
    if (!checkIfFieldIsRendered(this.props.field, this.props.data)) {
      return null;
    }

    let label = null;
    let ariaLabel = null;
    if (this.props.field.label) {
      let labelClass = "";
      if (this.props.field.required) {
        labelClass = "c4g-required";
        label = <label className={labelClass} htmlFor={this.props.field.name}>{this.props.field.label}</label>;
      } else {
        label = <label htmlFor={this.props.field.name}>{this.props.field.label}</label>;
      }
    } else {
      if (this.props.field.placeholder) {
        ariaLabel = this.props.field.placeholder;
      }
    }
    let description = null;

    let descriptionLink = null;
    if (this.props.field.descriptionLink && this.props.field.descriptionLinkLabel) {
      descriptionLink = <a className={"form-description-link btn btn-info btn-sm"} href={this.props.field.descriptionLink} target="_blank"><i
        className="fas fa-info-circle"></i> {this.props.field.descriptionLinkLabel}</a>;
    }

    if (this.props.field.label) {
      description = (<small className={"field-description form-text text-muted"}>{this.props.field.description} {descriptionLink}</small>);
    }

    let className = "";
    if (this.props.field.className) {
      className = this.props.field.className + " " + this.props.field.name;
    }
    let fieldName = this.props.field.name;
    let fileLabel = this.props.field.noFileSelectedLabel || "Keine Datei ausgewählt";
    if (this.props.data[fieldName] && this.props.data[fieldName].name) {
      fileLabel = this.props.data[fieldName].name;
    }
    return (
      <div>
        {label}
        <div className={className + " file-label"}>{fileLabel}</div>
        <input ref={input => this.inputElement = input} type={"file"} accept=".pdf" onChange={this.onSelectFile} id={fieldName}
               name={fieldName + (this.props.field.max > 1 ? "[]" : "")} style={{display: "none"}}/>
        <input type="button" value={"Datei auswählen"} onClick={(e) => {
          e.preventDefault();
          this.inputElement.click();
        }} className={className + "btn"}/>
       {description}
      </div>
    );
  }

}