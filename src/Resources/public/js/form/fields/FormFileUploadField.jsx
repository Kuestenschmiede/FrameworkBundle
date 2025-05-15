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
import {FormFileUploadLoadedFile} from "../FormFileUploadLoadedFile.jsx";

export default class FormFileUploadField extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const scope = this;
        let file = event.target.files[0];

        let reader = new FileReader();
        let sendData = {};
        sendData.name = file.name;
        sendData.date = file.date;
        sendData.size = file.size;
        sendData.type = file.type;
        sendData.fieldName = this.props.field.name; // the field in which the file will be stored
        sendData.dataId = this.props.data.id; // dataset has to exist
        sendData.width = file.width;
        sendData.height = file.height;
        reader.onload = function (fileData) {
            sendData.fileData = fileData.target.result;
            jQuery.post(scope.props.field.uploadUrl, sendData).done((data) => {
                scope.props.form.props.addDataFunction(scope.props.form.props.name, {path: data.filePath}, scope.props.field.name);
            });
        }

        reader.readAsDataURL(file);

    }

    render() {

        let fieldName = this.props.field.name;
        let description = null;
        if (this.props.field.description) {
            description = (<small className={"field-description text-muted"}>{this.props.field.description}</small>);
        }

        let loadedFiles = [];
        if (this.props.data[fieldName]) {
            for (let i = 0; i < this.props.data[fieldName].length; i++) {
                loadedFiles.push(<img src={this.props.data[fieldName][i].path} alt=""/>)
            }
        }

        return (
            <React.Fragment>
                <div
                    className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-group"}>
                    {description}
                    {loadedFiles}
                    <div key={"fileInput"}>
                        <label className={"label-file"} htmlFor={fieldName}
                               required={this.props.field.required}>{this.props.field.label}</label>
                        <input type={"file"}
                               id={fieldName}
                               name={fieldName + (this.props.field.max > 1 ? "[]" : "")}
                               onChange={this.handleChange}
                               className={"form-control-file"}/>
                    </div>

                </div>
            </React.Fragment>
        );
    }

}