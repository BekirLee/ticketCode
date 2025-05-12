import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/basket/Basket"; // doğru yolu kontrol et

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-card col-xl-3 col-md-4 col-sm-6">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>{product.price} USD</span>

      <div style={{ height: "300px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>

      <button onClick={handleAddToBasket} style={{ marginTop: "10px" }}>
        Sepete Ekle
      </button>
    </div>
  );
};

export default Product;
