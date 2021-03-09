import React, {Component} from "react";
const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class CarouselTile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let itemType = null;
    if (this.props.dataEntry.itemType) {
      itemType = this.props.dataEntry.itemType;
    }

    return (
      <a className={this.props.className || ""} href={this.props.dataEntry.href} itemScope={itemType} itemType={itemType}>
        {
          this.props.fields.map((item, id) => {
            return <TileMapperField key={id} field={item} data={this.props.dataEntry}/>;
          })
        }
      </a>
    );
  }

}