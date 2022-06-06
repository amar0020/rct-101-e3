import axios from "axios";
import React, { useEffect, useState } from "react";

import Product from "./Product/Product";

const Products = () => {

  const [data1,setData] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/products").then((res)=>{
      setData(res.data)
      console.log(res.data)
    })

    console.log(data1)
  },[])
  return (<div>

    {data1.map((index)=>{
      return <Product value={index}></Product>
    })}
  
  </div>);
};

export default Products;
