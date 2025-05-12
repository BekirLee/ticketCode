import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementCount,
  decrementCount,
} from "../../features/basket/Basket";

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);

  return (
    <div>
      <h2>Sepet</h2>
      {basketItems.length === 0 ? (
        <p>Empty</p>
      ) : (
        basketItems.map((item) => (
          <div
            key={item.id}
            style={{ borderBottom: "1px solid #ccc", padding: "10px" }}
          >
            <h4>{item.name}</h4>
            <p>Fiyat: {item.price} USD</p>
            <p>Adet: {item.count}</p>
            <button onClick={() => dispatch(incrementCount({ id: item.id }))}>
              +
            </button>
            <button onClick={() => dispatch(decrementCount({ id: item.id }))}>
              -
            </button>
            <button onClick={() => dispatch(removeItem({ id: item.id }))}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Basket;
