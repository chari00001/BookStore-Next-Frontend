"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const sendRequest = async () => {
    try {
      const response = await axios.get("http://localhost:3001/kitaplar");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="gap-12 flex flex-col mx-auto w-screen h-screen items-center justify-center">
      <div className="flex flex-col gap-2 justify-between bg-slate-300 p-2 rounded">
        <label htmlFor="" className="flex flex-row w-[20rem]">
          <span className="w-1/3 text-black">Kullanici</span>
          <input type="textarea" className="ml-2 w-2/3" />
        </label>
        <label htmlFor="" className="flex flex-row w-[20rem]">
          <span className="w-1/3 text-black">Sifre</span>
          <input type="text" className="ml-2 w-2/3" />
        </label>
        <div className="flex flex-row justify-end gap-1 w-full">
          <button
            onClick={sendRequest}
            className="w-1/3 bg-blue-500 text-white rounded-md p-2"
          >
            Giris Yap
          </button>
          <button className="w-1/3 bg-blue-500 text-white rounded-md p-2">
            Kayit ol
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
