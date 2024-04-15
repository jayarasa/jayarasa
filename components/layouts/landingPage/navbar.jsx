import React from 'react'
import Link from "next/link";
import { Navbar, Flowbite  } from "flowbite-react";
import { useRouter } from 'next/router';


const customTheme = {
  navbar:{
    root: {
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between md:justify-around h-full md:container",
      }
    },
  }
};


function Navbarr() {
  const router = useRouter()
  console.log()
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar fluid className='md:h-[10vh] border-2 border-slate-200 fixed top-0 left-0 right-0 z-50'>
        <Navbar.Brand as={Link} href="/">
          <img src="/logo.svg" className="mr-3 h-10 sm:h-9" alt="Logo Jayarasa" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Jayarasa</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className=' md:w-[50%] md:flex gap-2 '>
          <Navbar.Link href="/" active={router?.pathname == "/"} className='text-xl'>
            Home
          </Navbar.Link>
          <Navbar.Link active={router?.pathname == "menu"} href="/menu" className='text-xl'>
            Menu
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  )
}

export default Navbarr