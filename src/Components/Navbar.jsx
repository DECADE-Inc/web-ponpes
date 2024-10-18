import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/images/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeStyle =
    "after:bg-onPrimary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 pb-1 after:w-[100%] after:transition-all after:duration-500 after:content-['']";
  const notActiveStyle =
    "after:bg-onPrimary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 pb-1 after:w-0 after:transition-all after:duration-500 after:content-['']";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 pb-3 pt-1">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-4">
          <img src={logo} alt="logo-ponpes" width={70} />
          <h1 className="font-bold text-onPrimary">PPSBK</h1>
        </Link>

        {/* Burger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-onPrimary text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 font-semibold">
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
            to={"/tentang"}
          >
            Tentang Ponpes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
            to={"/akademik"}
          >
            Akademik
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
            to={"/fasilitas"}
          >
            Fasilitas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
            to={"/pendaftaran"}
          >
            Pendaftaran
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
            to={"/kontak"}
          >
            Kontak
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-white shadow-lg`}
        >
          <ul className="flex flex-col items-center gap-4 p-4 font-semibold">
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to={"/"}
            >
              Beranda
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to={"/tentang"}
            >
              Tentang Ponpes
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to={"/akademik"}
            >
              Akademik
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to={"/fasilitas"}
            >
              Fasilitas
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to={"/pendaftaran"}
            >
              Pendaftaran
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to={"/kontak"}
            >
              Kontak
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
