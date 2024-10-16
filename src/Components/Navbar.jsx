import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex items-center my-1 mx-4'>
        <img src="/images/logo.png" alt="logo-ponpes" width={70} className='mr-auto' />
        <div className='flex gap-5 mr-4'>
            <NavLink to={"/"}>Beranda</NavLink>
            <NavLink to={"tentang"}>Tentang Ponpes</NavLink>
            <NavLink to={"akademik"}>Akademik</NavLink>
            <NavLink to={"fasilitas"}>Fasilitas</NavLink>
            <NavLink to={"pendaftaran"}>Pendaftaran</NavLink>
            <NavLink to={"kontak"}>Kontak</NavLink>
        </div>
    </nav>
  )
}



