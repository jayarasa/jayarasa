import React from 'react'
import { FaInstagram, FaWhatsapp, FaTiktok  } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Footer } from "flowbite-react";
import { useMediaQuery } from '@mantine/hooks';

function Footerr() {
  const matches = useMediaQuery('(min-width: 1024px)');
  console.log(matches)
  if(matches){
    return (
      <footer>Pc</footer>
    )
  }else{
    return (
      <footer className='bg-[#e4e4e4] '>
        <div className='px-8 pt-10 md:pt-16 pb-14'>
          <div>
            <div className='text-center'>
              <p>Hotline</p>
              <p className='text-[#1266AA] text-xl'>400-7878-788</p>
            </div>
            <div className='flex justify-center gap-2 md:gap-4 mt-4 md:mt-6'>
              <a href="" className='bg-[#fff] p-3 rounded-full'>
                <img src="/footer/1.png" />
              </a>
              <a href="" className='bg-[#fff] p-3 rounded-full'>
                <img src="/footer/2.png" />
              </a>
              <a href="" className='bg-[#fff] p-3 rounded-full'>
                <img src="/footer/3.png" />
              </a>
              <a href="" className='bg-[#fff] p-3 rounded-full'>
                <img src="/footer/4.png" />
              </a>
            </div>
          </div>
          <div className='flex justify-center mt-8'>
            <div>
              <img src="/footer/qr.jpg" className='mx-auto' />
              <p style={{fontSize:"0,7rem"}}>Ligao Foods Wechat Public</p>
            </div>
          </div>
        </div>
        <div className='text-center px-2' style={{fontSize:"0,8rem"}}>
          <p>Copyright  @ 2023 Jayarasa, Ltd. Semua hak dilindungi undang-undang. No. 2021004804 Powered by vancheer</p>
        </div>
      </footer>
    )
  }
}

export default Footerr