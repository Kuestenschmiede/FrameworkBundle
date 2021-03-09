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

const SubmitButton = React.lazy(() => import("./SubmitButton.jsx"));
const AsynchronousSubmitButton = React.lazy(() => import("./AsynchronousSubmitButton.jsx"));
const CustomSubmitButton = React.lazy(() => import("./CustomSubmitButton.jsx"));
const SetDataButton = React.lazy(() => import("./SetDataButton.jsx"));
const FilterButton = React.lazy(() => import("./FilterButton.jsx"));
const LinkButton = React.lazy(() => import("./LinkButton.jsx"));

export default class MapperButton extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    switch (this.props.button.type) {
      case "submit":
        return <SubmitButton {...this.props}/>;
      case "asynchronous-submit":
        return <AsynchronousSubmitButton {...this.props}/>;
      case "setData":
        return <SetDataButton {...this.props}/>;
      case "filter":
        return <FilterButton {...this.props}/>;
      case "custom-submit":
        return <CustomSubmitButton {...this.props}/>;
      case "link":
        return <LinkButton {...this.props}/>;
      default:
        return null;
    }
  }

}