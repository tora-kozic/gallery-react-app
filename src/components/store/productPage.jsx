import React, { Component } from "react";
import { useLocation } from "react-router";
import withContext from "../../withContext";

const ProductPage = (props) => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div>
      <img src={product.src} alt="" className="img-fluid" />
      <h1>{product.name}</h1>
      <p>{product.shortDesc}</p>
      {product.stock > 0 ? (
        <small>{product.stock + " Available"}</small>
      ) : (
        <small className="has-text-danger">Out Of Stock</small>
      )}
      <div className="is-clearfix">
        <button
          className="button is-small is-outlined is-primary is-pulled-right"
          onClick={() =>
            props.context.addToCart({
              id: product.name,
              product,
              amount: 1,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default withContext(ProductPage);
