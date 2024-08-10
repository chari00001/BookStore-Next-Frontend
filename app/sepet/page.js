"use client";

import React, { useEffect, useState } from "react";
import CartItems from "@/components/CartItems/CartItems";
import {
  getCartItemsByUserId,
  deleteCartItem,
  updateCartItem,
} from "@/network/lib/Sepetler";

const page = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItemsByUserId(localStorage.getItem("musteriID"))
      .then((res) => {
        console.log(res.data);

        setCartItems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <CartItems cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default page;
