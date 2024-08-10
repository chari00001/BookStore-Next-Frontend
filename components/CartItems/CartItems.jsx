"use client";

import React from "react";
import { deleteCartItem, updateCartItem } from "@/network/lib/Sepetler";

const CartItems = ({ cartItems, setCartItems }) => {
  const handleRemoveItem = async (itemId) => {
    try {
      await deleteCartItem(itemId);
      setCartItems(cartItems.filter((item) => item.SepetID !== itemId));
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleQuantityChange = async (itemId, quantity) => {
    try {
      await updateCartItem(itemId, { Adet: quantity });
      setCartItems(
        cartItems.map((item) =>
          item.SepetID === itemId ? { ...item, Adet: quantity } : item
        )
      );
    } catch (error) {
      console.error("Failed to update item quantity:", error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.Fiyat * item.Adet, 0);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.SepetID}
                className="flex items-center p-4 bg-white rounded-lg shadow-md"
              >
                <img
                  src={item.image || "https://via.placeholder.com/100x100"}
                  alt={item.Baslik}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.Baslik}</h2>
                  <p className="text-gray-600">
                    Price: ${item.Fiyat.toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <label
                      htmlFor={`quantity-${item.SepetID}`}
                      className="mr-2"
                    >
                      Quantity:
                    </label>
                    <input
                      id={`quantity-${item.SepetID}`}
                      type="number"
                      min="1"
                      value={item.Adet}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.SepetID,
                          parseInt(e.target.value)
                        )
                      }
                      className="w-16 p-2 border rounded-md"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.SepetID)}
                  className="ml-4 text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </h2>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
