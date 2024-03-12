import React from "react";
import { Card } from "./components/card/card";


function App() {
 const [data,setData] = React.useState([]);

 React.useEffect(() => {
  fetch("https://fakestoreapi.com/products").then((res)=> res.json()).then((data)=> {
    setData(data);
  })
 })
  return (
    <div className="container">
      {data.map((item)=> <Card key={item.id} {...item}/>)}
    </div>
  )
}

export default App
