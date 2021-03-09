import React, {Component} from "react";

const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class GridTypeTile extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-md-3 grid-list-item">

        <div className="item">

          {
            this.props.fields.map((item, id) => {
              return <TileMapperField key={id} field={item} data={this.props.dataEntry} list={this.props.list}/>;
            })
          }

        </div>
      </div>
    );
  }

}