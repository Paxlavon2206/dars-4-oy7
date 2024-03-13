import React from "react";
import { add } from "../redux/reducers/cart";
import { useDispatch } from "react-redux";

export const Card = ({ description, id, title, image, price }) => {
  const dispatch = useDispatch();
  const addStore = () => {
    dispatch(add({ description, id, title, image, price }));
  };

  return (
    <div className="border flex flex-col justify-between border-amber-600 p-5 bg-slate-200">
      <div>
        <div className="w-[200px] h-[300px]">
          <img className="w-full h-full object-contain" src={image} alt="img" />
        </div>
        <h2>{title}</h2>
        <strong>{price} $</strong>
        <p>
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>
      </div>
      <button onClick={addStore} className="w-full bg-violet-500 py-2 text-white hover:bg-violet-700">
        Add
      </button>
    </div>
  );
};
