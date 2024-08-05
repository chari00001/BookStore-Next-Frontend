"use client";

import React, { useState, useEffect } from "react";
import { getCategories } from "../../network/lib/Kategoriler";

const CategoryList = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        console.log("Categories:", response.data);

        setCategories(response.data); // Adjust based on the actual API response structure
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (kategoriID) => {
    setSelectedCategory(kategoriID);
    onCategoryChange(kategoriID);
  };

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="relative">
        <div className=" p-2 flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300">
          {categories.map((category, index) => (
            <div
              onClick={() => handleCategoryClick(category.kategoriID)}
              key={index}
              className={`p-4 rounded-lg shadow-md flex-none w-64 transition duration-300 cursor-pointer ${
                selectedCategory === category.kategoriID
                  ? "bg-[#6600ff] text-white"
                  : "bg-[#F9F5FF] hover:bg-gray-100 "
              } border-2 hover:shadow-lg hover:scale-105 border-[#6600ff] border-opacity-20`}
            >
              <h2 className="text-xl font-semibold">{category.kategoriAdi}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
