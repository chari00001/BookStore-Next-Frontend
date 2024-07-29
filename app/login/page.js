"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { login } from "../../network/lib/Musteriler";

const LoginForm = () => {
  const [eposta, setEposta] = useState("");
  const [sifre, setSifre] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      Eposta: eposta,
      Sifre: sifre,
    };

    try {
      const response = await login(credentials);
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          showConfirmButton: false,
          timer: 1500,
        });
        setError("Invalid MusteriID or Sifre");
      }
    } catch (error) {
      console.error("Login failed", error);
      setError("An error occurred during login. Please try again.");
    }
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="eposta"
              className="block text-sm font-medium text-gray-700"
            >
              E-posta
            </label>
            <input
              id="eposta"
              name="eposta"
              type="text"
              required
              value={eposta}
              onChange={(e) => setEposta(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="sifre"
              className="block text-sm font-medium text-gray-700"
            >
              Sifre
            </label>
            <input
              id="sifre"
              name="sifre"
              type="password"
              required
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {error && <div className="text-sm text-red-500">{error}</div>}
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleRegister}
              className="w-full px-4 py-2 font-medium text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
