import React, { Component } from "react";
import WorksItem from "./worksItem";
import Gallery from "react-photo-gallery";

class Works extends Component {
  render() {
    const { images } = this.props;

    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="container-fluid px-5">
            <h1 className="py-5">Work</h1>
            {/* {images.map((image) => (
          <WorksItem image={image} />
        ))} */}
            <Gallery photos={images} direction={"column"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
