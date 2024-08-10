"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import BookList from "@/components/BookList/BookList";
import CategoryList from "@/components/CategoryList/CategoryList";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/userSlice";

const page = () => {
  const [category, setCategory] = useState(null);

  const onCategoryChange = (category) => {
    console.log("Selected category:", category);

    setCategory(category);
  };

  const count = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  console.log(localStorage.getItem("musteriID"));

  return (
    <div className="flex flex-col items-center w-full">
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <CategoryList onCategoryChange={onCategoryChange} />
      <BookList category={category} />
    </div>
  );
};

export default page;
