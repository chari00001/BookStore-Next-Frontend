"use client";

import React, { useEffect, useState } from "react";
import { getMusteri } from "@/network/lib/Musteriler";
import Orders from "@/components/Orders/Orders";

const ProfilePage = () => {
  const id = 16;

  const [musteri, setMusteri] = useState(null);

  useEffect(() => {
    getMusteri(id).then((response) => {
      console.log(response);
      setMusteri(response.data);
    });
  }, []);

  if (!musteri) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg max-w-sm mx-auto">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile Picture"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{`${musteri.Ad} ${musteri.Soyad}`}</h2>
      <p className="text-gray-600 mb-2">E-posta: {musteri.Eposta}</p>
      <p className="text-gray-600 mb-2">Telefon: {musteri.TelefonNumarasi}</p>
      <p className="text-gray-600 mb-2">Adres: {musteri.Adres}</p>
      <p className="text-gray-600">
        Hesap Türü: {musteri.isAdmin ? "Admin" : "Kullanıcı"}
      </p>
      <Orders />
    </div>
  );
};

export default ProfilePage;
