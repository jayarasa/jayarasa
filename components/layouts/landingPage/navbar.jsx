import React from 'react'
import Link from 'next/link'

function Navbar() {
  const navLinks = [
    {href: "/contact", judul: "Contact", },
    {href: "/about", judul: "About us", },
    {href: "/", img:{src:"/logo.svg", alt:"logo jayarasa"}},
    {href: "/menu", judul: "Menu", },
    {href: "/faq", judul: "FAQ", }
  ]
  return (
    <nav className="bg-[#BFDBDB] px-8 py-4">
            <ul className="flex justify-between items-center">
                {navLinks.map((nl, i)=>(
                  <li key={i}><Link href={nl.href} className="inline-block">{nl.judul ? nl.judul : <img src={nl?.img?.src} alt={nl.img.slt} width={65}/>}</Link></li>
                ))}
            </ul>
    </nav>
  )
}

export default Navbar