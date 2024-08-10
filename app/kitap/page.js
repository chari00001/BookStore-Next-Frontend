"use client";

import React, { useState, useEffect } from "react";
import { getBookById } from "@/network/lib/Kitaplar";
import { getAuthorById } from "@/network/lib/Yazarlar";
import { getCategoryById } from "@/network/lib/Kategoriler";
import { getPublisherById } from "@/network/lib/Yayinevleri";
import { useRouter, useSearchParams } from "next/navigation";
import { createCartItem } from "@/network/lib/Sepetler";
import BookDetail from "@/components/BookDetail/BookDetail";
import BookComments from "@/components/BookComments/BookComments";
import Swal from "sweetalert2";

const page = () => {
  const [book, setBook] = useState({});
  const [author, setAuthor] = useState({});
  const [category, setCategory] = useState({});
  const [publisher, setPublisher] = useState({});

  const id = useSearchParams().get("id");

  useEffect(() => {
    getBookById(id)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (book.yazarID && book.kategoriID && book.yayineviID) {
      getAuthorById(book.yazarID)
        .then((res) => {
          setAuthor(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (book.kategoriID) {
      getCategoryById(book.kategoriID)
        .then((res) => {
          setCategory(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    if (book.yayineviID) {
      getPublisherById(book.yayineviID)
        .then((res) => {
          setPublisher(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [book]);

  const handleAddToCart = () => {
    const cartItem = {
      MusteriID: parseInt(localStorage.getItem("musteriID")),
      KitapID: parseInt(id),
      Adet: 1,
    };

    createCartItem(cartItem)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Item added to cart",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <BookDetail
        book={book}
        author={author}
        category={category}
        publisher={publisher}
        handleAddToCart={handleAddToCart}
      />
      <BookComments kitapID={id} />
    </div>
  );
};

export default page;
