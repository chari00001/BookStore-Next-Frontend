"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { register } from "../../network/lib/Musteriler";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    Ad: "",
    Soyad: "",
    Eposta: "",
    Sifre: "",
    Adres: "",
    TelefonNumarasi: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register({ ...formData, isAdmin: 0 });
      console.log(response);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          Ad: "",
          Soyad: "",
          Eposta: "",
          Sifre: "",
          Adres: "",
          TelefonNumarasi: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          showConfirmButton: false,
          timer: 1500,
        });
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration failed", error);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Register
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="Ad"
              className="block text-sm font-medium text-gray-700"
            >
              Ad
            </label>
            <input
              id="Ad"
              name="Ad"
              type="text"
              required
              value={formData.Ad}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="Soyad"
              className="block text-sm font-medium text-gray-700"
            >
              Soyad
            </label>
            <input
              id="Soyad"
              name="Soyad"
              type="text"
              required
              value={formData.Soyad}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="Eposta"
              className="block text-sm font-medium text-gray-700"
            >
              Eposta
            </label>
            <input
              id="Eposta"
              name="Eposta"
              type="email"
              required
              value={formData.Eposta}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="Sifre"
              className="block text-sm font-medium text-gray-700"
            >
              Sifre
            </label>
            <input
              id="Sifre"
              name="Sifre"
              type="password"
              required
              value={formData.Sifre}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="Adres"
              className="block text-sm font-medium text-gray-700"
            >
              Adres
            </label>
            <textarea
              id="Adres"
              name="Adres"
              required
              value={formData.Adres}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="TelefonNumarasi"
              className="block text-sm font-medium text-gray-700"
            >
              Telefon Numarasi
            </label>
            <input
              id="TelefonNumarasi"
              name="TelefonNumarasi"
              type="text"
              required
              value={formData.TelefonNumarasi}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {error && <div className="text-sm text-red-500">{error}</div>}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-[#6600ff] rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
