"use client";

import React, { useState, useEffect } from "react";
import { getBooks } from "../../network/lib/Kitaplar";
import Link from "next/link";

const BookList = ({ category }) => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Number of items per page
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order
  const [sortBy, setSortBy] = useState("baslik"); // Default sort attribute
  const [totalBooks, setTotalBooks] = useState(0); // Total number of books

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      let sortedBooks = response.data;

      // Filter by category
      if (category) {
        sortedBooks = sortedBooks.filter(
          (book) => book.kategoriID === category
        );
      }

      setTotalBooks(sortedBooks.length);

      // Sorting
      sortedBooks = sortedBooks.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortOrder === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        // Handle non-string sorting
        return sortOrder === "asc"
          ? aValue > bValue
            ? 1
            : -1
          : aValue < bValue
          ? 1
          : -1;
      });

      // Pagination
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedBooks = sortedBooks.slice(
        startIndex,
        startIndex + itemsPerPage
      );

      setBooks(paginatedBooks);
    };

    fetchBooks();
  }, [category, currentPage, sortOrder, sortBy]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBooks / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center w-full p-6 max-w-[1080px]">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-end w-full">
        <select
          onChange={handleSortChange}
          value={sortBy}
          className="mb-4 md:mb-0 md:mr-4 p-2 border border-gray-300 rounded"
        >
          <option value="baslik">Title</option>
          <option value="yazarID">Author ID</option>
          {/* Add more sorting options as needed */}
        </select>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="p-2 bg-[#6600ff] text-white rounded shadow hover:bg-blue-600"
        >
          {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {books?.map((book, index) => (
          <Link
            href={{
              pathname: "/kitap",
              query: {
                id: book.kitapID,
              },
            }}
            key={index}
            className="group"
          >
            <div className="w-full h-[350px] bg-white text-black p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="h-48 mb-4 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                <img
                  src={book.image || "https://via.placeholder.com/150"}
                  alt={book.baslik}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-xl font-bold mb-2 truncate">{book.baslik}</h1>
              <p className="text-sm text-green-700 font-bold mb-2 truncate">
                Price: ${book.fiyat}
              </p>
              <p className="text-sm text-gray-600 line-clamp-2">
                {book.aciklama}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center">
        {pageNumbers.map((number, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === number ? "bg-[#6600ff] text-white" : "bg-gray-200"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookList;
