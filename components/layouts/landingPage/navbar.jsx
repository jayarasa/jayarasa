import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import { Burger } from '@mantine/core';

const customTheme = {
  navbar:{
    root: {
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between md:justify-around h-full md:container",
      }
    },
  }
};

const isActive = (pathname)=>{
  const router = useRouter()
  const pathnameActive = router.pathname
  console.log({pathnameActive})
  return pathnameActive == pathname ? "inline-block text-[#1C6DB8] border-b-4 border-[#1C6DB8] pb-1" : ""
}

function Navbarr({opened, toggle}) {
  console.log()
  return (
    <div className='w-[100vw] fixed top-0 right-0 h-[12vh] z-[99999] shadow shadow-black'>
      <div className="absolute top-0 left-0 w-[100%] h-16 md:h-10 bg-[url('/image/nav-web-bg.jpg')] lg:bg-[url('/image/nav-bg.jpg')] bg-left-top bg-no-repeat bg-contain md:bg-cover"></div>
      <div className='absolute bottom-0 bg-white w-[100vw] h-[80%] lg:h-[60%] flex justify-between px-8'>
        <img src="/logo.png" alt="logo" className='h-[100%] lg:h-[180%] lg:-mt-10'/>
        <div className='my-auto'>
          <div className='lg:hidden felx justify-center items-center'>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
          </div>
          <div className='hidden lg:block'>
            <ul className='flex gap-6 margin mr-20 font-bold text-lg'>
              <li className={`${isActive("/")}`}><Link href="/">Home</Link></li>
              <li className={`${isActive("/about")}`}><Link href="/about">About Us</Link></li>
              <li className={`${isActive("/catalog")}`}><Link href="/catalog">Catalogue</Link></li>
              <li className={`${isActive("/contact")}`}><Link href="/contact">Contact Me</Link></li>
              <li className={`${isActive("/article")}`}><Link href="/article">Article</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbarr