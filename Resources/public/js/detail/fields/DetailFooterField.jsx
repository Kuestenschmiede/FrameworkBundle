import React, {Component} from "react";

export default class DetailFooterField extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let footerButtons = [];
    this.props.field.footerButtons.forEach((item, id) => {
       footerButtons.push(<a className={"btn " + item.class}
                href={this.props.data[item.linkField]}>{item.label}</a>);
    });
    return (
      <div className={"col-12 detail-footer-field-wrapper"}>
        <div className={"col-12 text-center detail-footer-inner-info"}>
          <p className={"mb-2 mt-2" + (this.props.field.footerTextClass ? " " + this.props.field.footerTextClass : "")}>
            {this.props.field.footerText}
          </p>
        </div>
        <div className={"col-12 text-center detail-footer-buttons"}>
          {footerButtons}
        </div>
      </div>
    );
  }

}