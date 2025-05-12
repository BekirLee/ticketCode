import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/products/Products";
import Product from "../Product/Product";
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="allproducts">
      <h1>Our Products</h1>
      <div className="row" style={{ width: "100%" }}>
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default Products;
