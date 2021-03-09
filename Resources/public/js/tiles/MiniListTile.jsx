import React, {Component, Suspense} from "react";
const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class MiniListTile extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let wrappedFields = [];
    let fields = [];
    this.props.fields.map((item, id) => {
      // let field = mapper.default.mapTileField(item.type);
      if (item.type === "wrapper") {
        wrappedFields = wrappedFields.concat(item.wrappedFields);
        // fields.push(React.createElement(field, {key: id, field: item, data: this.props.dataEntry, fields: this.props.fields, list: this.props.list}));
        fields.push(<TileMapperField key={id} field={item} data={this.props.dataEntry} fields={this.props.fields} list={this.props.list}/>);
      } else {
        if (!wrappedFields.includes(item.name)) {
          // only render non-wrapped fields
          // since the wrapped fields will be rendered by the wrapper
          fields.push(<TileMapperField key={id} field={item} data={this.props.dataEntry} fields={this.props.fields} list={this.props.list}/>);
        }
      }
    });

    return (
      <div className={"row globalListItem"}>
        {
          fields
        }
      </div>
    );
  }
}