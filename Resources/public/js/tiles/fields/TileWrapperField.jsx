import React, {Component} from "react";

const TileMapperField = React.lazy(() => import("./TileMapperField.jsx"));

export default class TileWrapperField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: [],
      setup: false
    };
  }

  render() {
    let wrappedFields = [];
    let fields = this.props.fields;
    for (let i = 0; i < fields.length; i++) {
      if (this.props.field.wrappedFields.includes(fields[i].name)) {
        wrappedFields.push(fields[i]);
      }
    }

    let innerFields = [];
    wrappedFields.map((item, id) => {
      innerFields.push(<TileMapperField key={id} field={item} data={this.props.data} list={this.props.list} fields={this.props.fields}/>)
    });

    return (
      <div className={this.props.field.class}>
        {
          innerFields
        }
      </div>
    );
  }
}