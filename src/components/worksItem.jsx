import React, { Component } from "react";

class WorksItem extends Component {
  render() {
    const { image } = this.props;
    return (
      <div>
        <img src={image.url} alt="" />
      </div>
    );
  }
}

export default WorksItem;
