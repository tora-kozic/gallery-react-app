import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { NavLink } from "react-router-dom";
import "./cover.css";

const Cover = () => {
  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1920/850/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1920/850/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1920/850/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];

  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner cover-bg">
        <div className="container">
          <div class="inner cover">
            <h1 class="cover-heading text-capitalize fw-light text-center text-white">
              Tora Kozic
            </h1>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
