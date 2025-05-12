import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/products/Products";
import Product from "../Product/Product";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <Product key={product._id} product={product} /> 
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Products;
