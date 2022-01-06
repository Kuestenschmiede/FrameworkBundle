/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/*
 * This script is the entry point for the projects UI. It renders the c4g-ui-manager.
 */

import {C4gUiManager} from "./C4gUiManager.jsx";
import React, {Component} from "react";
import ReactDOM from "react-dom";

jQuery(document).ready(function() {
    window.frameworkData.forEach(function (configuration) {
      if (configuration && configuration.entryPoint) {
        ReactDOM.render(
            React.createElement(C4gUiManager, configuration),
            document.querySelector("#" + configuration.entryPoint)
        );
      }
    }, this);
});