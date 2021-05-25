import React from "react";
import withContext from "../../withContext";
import Product from "./product";

const ProductList = (props) => {
  const { products } = props.context;
  return (
    <div className="container">
      <div className="row">
        {products && products.length ? (
          products.map((product, index) => (
            <div className="col-4" key={index}>
              <Product
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            </div>
          ))
        ) : (
          <div>
            <span>No products found!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default withContext(ProductList);
