"use client";

import React, { useEffect, useState } from "react";
import CartItems from "@/components/CartItems/CartItems";
import Checkout from "@/components/Checkout/Checkout";
import {
  getCartItemsByUserId,
  deleteCartItem,
  updateCartItem,
} from "@/network/lib/Sepetler";

const page = () => {
  const [cartItems, setCartItems] = useState([]);
  const [state, setState] = useState("cart");

  // Dummy data for demo purposes. Replace these with real data in a real application.
  const musteriID = localStorage.getItem("musteriID") || 0;
  const teslimatAdresi = "Your Address"; // Replace with actual address
  const odemeYontemi = "Credit Card"; // Replace with selected payment method

  useEffect(() => {
    getCartItemsByUserId(musteriID)
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleProceed = (state) => {
    setState(state);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.Fiyat * item.Adet, 0);
  };

  return (
    <div>
      {state === "cart" && (
        <CartItems
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleProceed={handleProceed}
        />
      )}
      {state === "checkout" && (
        <Checkout
          cartItems={cartItems}
          musteriID={musteriID}
          toplamTutar={calculateTotal()}
          teslimatAdresi={teslimatAdresi}
          odemeYontemi={odemeYontemi}
          siparisTarihi={new Date().toISOString()} // Optional
          handleOrder={(orderData) => {
            // Implement order handling here
            console.log("Order data:", orderData);
          }}
        />
      )}
    </div>
  );
};

export default page;
