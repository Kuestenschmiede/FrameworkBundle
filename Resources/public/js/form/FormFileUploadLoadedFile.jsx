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

export class FormFileUploadLoadedFile extends Component {
  constructor(props) {
    super(props);

    this.deleteFile = this.deleteFile.bind(this);
  }

  deleteFile(event) {
    this.props.form.props.deleteDataFunction(this.props.form.props.name, this.props.field.fileFieldName, this.props.index);
  }

  convertBytesToString(fileSizeInBytes) {
    let i = -1;
    let byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  }

  render() {
    return (
      <React.Fragment>
        <div className={"loadedFile"} key={"loadedFile_" + this.props.index}>
          <input type={"hidden"}
                 name={this.props.field.name + "[]"}
                 value={this.props.data[this.props.field.fileFieldName][this.props.index]['fileName']}
          />
          <span>{this.props.data[this.props.field.fileFieldName][this.props.index]['fileName']}</span>
          <span>{this.convertBytesToString(this.props.data[this.props.field.fileFieldName][this.props.index]['fileSize'])}</span>
          <button type={"button"} onClick={this.deleteFile}><i className={"fas fa-trash-alt"}></i></button>
        </div>
      </React.Fragment>
    );
  }

}