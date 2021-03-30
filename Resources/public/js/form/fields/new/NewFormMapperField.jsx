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

const NewFormTextAreaField = React.lazy(() => import("./NewFormTextAreaField.jsx"));

export default class NewFormMapperField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.type) {
      case "textarea":
        return <NewFormTextAreaField {...this.props}/>;
      default:
        return null;
    }
  }
}