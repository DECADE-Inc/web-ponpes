import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mt-12 flex w-full items-center justify-center">
      <div className="mx-4 text-center">
        <h1 className="mb-1 text-6xl font-bold">404</h1>
        <h2 className="text-4xl">Halaman tidak ditemukan.</h2>
        <img className="mx-auto" src="/images/404.png" width={350} alt="" />
        <Link to={"/"} className="bg-onPrimary px-3 py-2 rounded-lg text-white text-xl">Kembali ke beranda</Link>
      </div>
    </div>
  );
}
