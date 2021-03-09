import React, {Component} from "react";

const TileMapperField = React.lazy(() => import("./fields/TileMapperField.jsx"));

export default class ExperimentalGridTile extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="c4g-list-element">

        <div className="c4g-list-element__inner">

          {
            this.props.fields.map((item, id) => {
              return <TileMapperField key={id} field={item} data={this.props.dataEntry} list={this.props.list} fields={this.props.fields}/>;
            })
          }

        </div>
      </div>
    );
  }

}