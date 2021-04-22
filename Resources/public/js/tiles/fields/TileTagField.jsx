import React, {Component} from "react";

const TileImageField = React.lazy(() => import("./TileImageField.jsx"));
const TileLinkField = React.lazy(() => import("./TileLinkField.jsx"));

export default class TileTagField extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    let tags = this.props.data[this.props.field.name];
    let tagElements = [];
    if (tags && tags.length > 0) {
      let index = -1;
      tags.map((item, id) => {
        if (item.image) {
          let tagName = item.name;
          tagName = tagName.toLowerCase();
          tagName = tagName.replace(" ", "-");
          tagName = tagName.replace("ä", "ae");
          tagName = tagName.replace("Ä", "Ae");
          tagName = tagName.replace("ö", "oe");
          tagName = tagName.replace("Ö", "Oe");
          tagName = tagName.replace("ü", "ue");
          tagName = tagName.replace("Ü", "Ue");
          tagName = tagName.replace("ß", "ss");
          let tagField = {
            name: tagName,
            imageSource: item.image.src,
            imageAlt: item.image.alt,
            title: item.name,
            wrapperClass: this.props.field.class + ' ' + tagName,
            class: this.props.field.innerClass + ' ' + tagName,
            height: item.image.height,
            width: item.image.width
          };
          index += 1;
          tagElements.push(<TileImageField key={id + index} field={tagField} data={[]}/>);
        }
      });
    } else {
      return null;
    }
    return (
      <div className={this.props.field.wrapperClass}>
        {tagElements}
      </div>
    );
  }
}