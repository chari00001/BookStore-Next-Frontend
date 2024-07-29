import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
      <div className="text-xl font-bold">
        <Link href="/">
          <p className="text-black">BookStore</p>
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/books">
            <p className="text-gray-800 hover:text-blue-500">Books</p>
          </Link>
        </li>
        <li>
          <Link href="/authors">
            <p className="text-gray-800 hover:text-blue-500">Authors</p>
          </Link>
        </li>
        <li>
          <Link href="/categories">
            <p className="text-gray-800 hover:text-blue-500">Categories</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="text-gray-800 hover:text-blue-500">About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="text-gray-800 hover:text-blue-500">Contact</p>
          </Link>
        </li>
      </ul>
      <div className="flex space-x-4">
        <Link href="/login">
          <p className="text-gray-800 hover:text-blue-500">Login</p>
        </Link>
        <Link href="/cart">
          <div className="relative text-gray-800 hover:text-blue-500">
            <p>Cart (0)</p>
            <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs text-center text-white bg-red-500 rounded-full">
              0
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
