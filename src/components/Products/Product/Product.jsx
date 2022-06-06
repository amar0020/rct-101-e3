import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = ({value}) => {
  // Note: this id should come from api
  const product = { id: value.id };
  const [count1,setCount1] = useState(0)

  useEffect(()=>{
    axios.get(`http://localhost:8080/cartItems/${product.id}`).then((res)=>setCount1(res.count))
  },[])

  useEffect(()=>{
    axios.patch(`http://localhost:8080/cartItems/${product.id}`,{count:count1})
  },[count1])

  const remove = ()=>{
    axios.delete(`http://localhost:8080/cartItems/${product.id}`)
  }
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{value.name}</h3>
      <h6 data-cy="product-description">{value.description}</h6>
      {count1 ? <><button data-cy="product-add-item-to-cart-button">Add to cart</button></>
      :<div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount1(count1+1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
          {count1}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount1(count1+1)}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>setCount1(count1+1)}>Remove</button>
      </div>}
      </div>
  );
};

export default Product;
