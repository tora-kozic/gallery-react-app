import React from "react";
import { Link } from "react-router-dom";
import ProductPage from "./productPage";

const Product = (props) => {
  const { product } = props;

  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="figure">
              <Link
                to={{
                  pathname: `/store/products/${product.id}`,
                  state: {
                    product: product,
                  },
                }}
              >
                <img
                  src={product.src}
                  alt={product.shortDesc}
                  className="img-thumbnail img-fluid"
                />
              </Link>
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>{product.name} </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
