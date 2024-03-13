import React from 'react'
import { Card } from "../../components/card/card";


export const Home = () => {
  const [data,setData] = React.useState([]);

  React.useEffect(() => {
   fetch("https://fakestoreapi.com/products").then((res)=> res.json()).then((data)=> {
     setData(data);
   })
  })
  return (
    <div className="container pt-5">
    <div className=" grid grid-cols-4">
    {data.map((item)=> <Card key={item.id} {...item}/>)}
    </div>
   </div>
  )
}
