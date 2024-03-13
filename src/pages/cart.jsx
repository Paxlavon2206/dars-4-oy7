import React from "react";
import { useSelector } from "react-redux";
import { StoreCard } from "../components/store-card";

export const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <div className="container bg-slate-100">
      {products.map((item) => (
        <StoreCard key={item.id} {...item} />
      ))}
    </div>
  );
};
