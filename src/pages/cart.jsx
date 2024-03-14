import React from "react";
import { useSelector } from "react-redux";
import { StoreCard } from "../components/store-card";



export const Cart = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="container bg-slate-100 pt-4 pb-4">
      <h2 className="font-bold">{(totalPrice).toFixed(2)} $</h2>
      {products.map((item) => (
        <StoreCard key={item.id} {...item} />
      ))}
    </div>
  );
};
