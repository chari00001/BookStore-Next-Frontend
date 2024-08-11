"use client";

import React, { useState } from "react";
import BookList from "@/components/BookList/BookList";
import CategoryList from "@/components/CategoryList/CategoryList";

const page = () => {
  const [category, setCategory] = useState(null);

  const onCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <CategoryList onCategoryChange={onCategoryChange} />
      <BookList category={category} />
    </div>
  );
};

export default page;
