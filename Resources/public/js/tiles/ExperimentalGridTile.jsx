import React, {Component} from "react";

const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class ExperimentalGridTile extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let wrappedFields = [];
    for (let i = 0; i < this.props.fields.length; i++) {
      if (this.props.fields[i].type) {
        if (this.props.fields[i].wrappedFields) {
          wrappedFields = wrappedFields.concat(this.props.fields[i].wrappedFields);
        }
      }
    }

    return (
      <div className="c4g-list-element">

        <div className="c4g-list-element__inner">

          {
            this.props.fields.map((item, id) => {
              if (!wrappedFields.includes(item.name)) {
                return <TileMapperField key={id} field={item} data={this.props.dataEntry} list={this.props.list} fields={this.props.fields}/>;
              }
            })
          }

        </div>
      </div>
    );
  }

}