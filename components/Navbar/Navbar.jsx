import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
      <div className="text-xl font-bold">
        <Link href="/">
          <p className="text-[#6600ff]">BookStore</p>
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/books">
            <p className="hover:text-gray-800 text-[#6600ff] font-bold">
              Books
            </p>
          </Link>
        </li>
        <li>
          <Link href="/authors">
            <p className="hover:text-gray-800 text-[#6600ff] font-bold">
              Authors
            </p>
          </Link>
        </li>
        <li>
          <Link href="/categories">
            <p className="hover:text-gray-800 text-[#6600ff] font-bold">
              Categories
            </p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="hover:text-gray-800 text-[#6600ff] font-bold">
              About Us
            </p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="hover:text-gray-800 text-[#6600ff] font-bold">
              Contact
            </p>
          </Link>
        </li>
      </ul>
      <div className="flex space-x-4">
        {localStorage.getItem("musteriID") ? (
          <Link href="/profil">
            <p className="hover:text-gray-800 text-[#6600ff] font-bold">
              Profil
            </p>
          </Link>
        ) : (
          <Link href="/login">
            <p className="hover:text-gray-800 text-[#6600ff] font-bold">
              Login
            </p>
          </Link>
        )}
        <Link href="/sepet">
          <div className="relative hover:text-gray-800 text-[#6600ff] font-bold">
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
