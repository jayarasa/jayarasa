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
    <nav className="bg-[#BFDBDB] p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* <div class="block lg:hidden">
                <button id="nav-toggle" class="text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div> */}
            <div className="flex lg:items-center w-auto" id="nav-content">
                <ul className=" flex items-center space-x-4">
                    {navLinks.map((nl, i)=>(
                      <li key={i}><Link href={nl.href} className="">{nl.judul ? nl.judul : <img src={nl?.img?.src} alt={nl.img.slt} width={65}/>}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar