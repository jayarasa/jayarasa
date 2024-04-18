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
    <div className='w-[100vw] fixed top-0 right-0 h-[10vh] z-30 bg-red-200'>
      <div className="absolute top-0 left-0 w-[100%] h-16 md:h-10 bg-[url('/image/nav-web-bg.jpg')] lg:bg-[url('/image/nav-bg.jpg')] bg-left-top bg-no-repeat bg-contain md:bg-cover"></div>
      <div className='bg-blue-500'>asassasasaaaaaaaaaa</div>
    </div>
  )
}

export default Navbarr