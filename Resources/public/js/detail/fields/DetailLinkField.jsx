import React, {Component} from "react";

export default class DetailLinkField extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    if (this.props.data[this.props.field.name]) {
      let icon = null;
      if (this.props.field.icon) {
        icon = <i className={this.props.field.icon}></i>;
      }
      let className = "";
      if (this.props.field.class) {
        className = this.props.field.class;
      }
      if (this.props.tagType) {
        className += " " + this.props.tagType;
      }

      return (
        <div className={className}>
          {icon}
          <a href={this.props.data[this.props.field.name]}>{this.props.data[this.props.field.linkTextName] || this.props.field.linkText}</a>
        </div>
      );
    } else {
      return null;
    }
  }
}