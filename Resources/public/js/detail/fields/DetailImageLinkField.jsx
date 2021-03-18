import React, {Component} from "react";

export default class DetailImageField extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    const data = this.props.data[this.props.field.name];
    if (data) {
      let content;
      if (Array.isArray(data)) {
        content = data.map((item, index) => {
          return <a href={item.href} className={this.props.field.class} key={index}>
            <img src={item.src} alt={item.alt} className={this.props.field.innerClass}/>
          </a>
        });
      } else {
        content = <a href={data.href} className={this.props.field.class}>
          <img src={data.src} alt={data.alt} className={this.props.field.innerClass}/>
        </a>;
      }

      return (
        <div className={this.props.field.wrapperClass}>
          {content}
        </div>
      );
    } else {
      return null;
    }
  }
}