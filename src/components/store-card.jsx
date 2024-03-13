import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleProduct, deleteItem } from "../redux/reducers/cart";

export const StoreCard = ({
  description,
  id,
  title,
  image,
  price,
  userCount,
  userPrice,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="border flex w-full gap-[40px] items-center border-amber-600 p-5">
      <div>
        <div className="w-[200px] h-[300px]">
          <img className="w-full h-full object-contain" src={image} alt="img" />
        </div>
      </div>
      <div>
        <h2>{title}</h2>
        <strong>{userPrice} $</strong>
        <p>
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>
        <button
          onClick={() => dispatch(toggleProduct({ type: "icrement", id }))}
          className="border border-gray-400 p-3 py-1 hover:bg-slate-400 mr-3"
        >
          +
        </button>
        <strong>{userCount}</strong>
        {userCount == 1 ? (
          <button
            className="border border-gray-400 p-3 py-1 hover:bg-slate-400 ml-3"
            onClick={() => dispatch(deleteItem({ id }))}
          >
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch(toggleProduct({ type: "decrement", id }))}
            className="border border-gray-400 p-3 py-1 hover:bg-slate-400 ml-3"
          >
            -
          </button>
        )}
      </div>
    </div>
  );
};
