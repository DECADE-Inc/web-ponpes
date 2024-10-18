import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "/images/logo.png";

export default function Navbar() {
  const activeStyle =
    "after:bg-onPrimary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 pb-1 after:w-[100%] after:transition-all after:duration-500 after:content-['']";
  const notActiveStyle =
    "after:bg-onPrimary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 pb-1 after:w-0 after:transition-all after:duration-500 after:content-['']";

  return (
    <nav className="flex items-center px-4 pb-3 pt-1 shadow-lg">
      <Link to={"/"} className="mr-auto flex items-center gap-4">
        <img src={logo} alt="logo-ponpes" width={70} />
        <h1 className="font-bold text-onPrimary">
          PPSBK
        </h1>
      </Link>
      <div className="mr-4 flex gap-5 font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? activeStyle : notActiveStyle
          }
          to={"/"}
        >
          Beranda
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeStyle : notActiveStyle
          }
          to={"tentang"}
        >
          Tentang Ponpes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeStyle : notActiveStyle
          }
          to={"akademik"}
        >
          Akademik
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeStyle : notActiveStyle
          }
          to={"fasilitas"}
        >
          Fasilitas
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeStyle : notActiveStyle
          }
          to={"pendaftaran"}
        >
          Pendaftaran
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeStyle : notActiveStyle
          }
          to={"kontak"}
        >
          Kontak
        </NavLink>
      </div>
    </nav>
  );
}
