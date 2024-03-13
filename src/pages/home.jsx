import React from "react";
import { Card } from "../components/card";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="container pt-5 mb-5">
      <Link className=" py-2 px-3 rounded-[26px] hover:bg-red-700 bg-red-500 text-white " to="/cart">Korzinka</Link>
      <div className="grid grid-cols-4 mt-3">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
