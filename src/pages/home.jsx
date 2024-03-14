import React from "react";
import { Card } from "../components/card";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

export const Home = () => {
  const [data, setData] = React.useState([]);
  const {count} = useSelector((state) => state.cart);
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="container pt-5 mb-5">
     <button className=" bg-violet-500 text-white py-2 px-5 rounded-[25px] "> <Link  to="/cart"><FaCartPlus/></Link></button>
     <p className=" absolute top-4 left-[80px] font-bold text-white">{count}</p>
      <div className="grid grid-cols-4 mt-3">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
