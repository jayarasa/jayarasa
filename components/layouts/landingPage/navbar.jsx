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


function Navbarr({opened, toggle}) {
  const router = useRouter()
  console.log()
  return (
    <div className='w-[100vw] fixed top-0 right-0 h-[10vh] z-[999999999] shadow-md bg-yellow-800'>
      <div className="absolute top-0 left-0 w-[100%] h-16 md:h-10 bg-[url('/image/nav-web-bg.jpg')] lg:bg-[url('/image/nav-bg.jpg')] bg-left-top bg-no-repeat bg-contain md:bg-cover"></div>
      <div className='absolute bottom-0 bg-white w-[100vw] h-[80%] lg:h-[60%] flex justify-between px-8'>
        <img src="/logo.svg" alt="logo" className=''/>
        <div className='my-auto'>
          <div className='lg:hidden felx justify-center items-center'>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
          </div>
          <div className='hidden lg:block'>
            <ul className='flex gap-6 margin mr-20 font-bold '>
              <li>Home</li>
              <li>Menu</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbarr