"use client";

import React from "react";
import CartItems from "@/components/CartItems/CartItems";
import {
  getCartItemsByUserId,
  deleteCartItem,
  updateCartItem,
} from "@/network/lib/Sepetler";
import { useEffect } from "react";

const page = () => {
  return (
    <div>
      <CartItems />
    </div>
  );
};

export default page;
