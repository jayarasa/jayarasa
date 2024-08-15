import React from 'react'
// import { FaInstagram, FaWhatsapp, FaTiktok  } from "react-icons/fa";
// import { MdLocationOn, MdEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { Footer } from "flowbite-react";
import { useMediaQuery } from '@mantine/hooks';
import { BsFillHouseHeartFill } from "react-icons/bs"

function Footerr() {
  const matches = useMediaQuery('(min-width: 1024px)');
  console.log(matches)
  return (
    <div className='w-full h-[60vh] mb-12'>
      <img src="/footer/headerFooter.jpeg" className='w-full h-[33%]'/>
      <div className='flex mt-6 md:mt-12 mb-2 flex-col md:flex-row'>
        <div className='w-[50%] mx-auto'>
          <img src="/footer/contact.png" alt=""  className='mx-auto'/>
        </div>
        <div className='w-[100%] mt-6 md:mt-0 md:w-[50%]'>
          <div className='mx-auto w-fit'>
            <p className='text-[#1E6EBC] font-bold text-xl mb-2'>PT JAYARAYA FOOD INTERNATIONAL</p>
            <ol className='text-lg '>
              <li className='flex items-center'>
                <PiPhoneCallFill className='text-[#1E6EBC] text-xl'/>
                <p className='ms-2 text-[#1e6dbcf4]'>(+62) 812 8889 3333</p>
              </li>
              <li className='flex items-center'>
                <MdEmail className='text-[#1E6EBC] text-xl'/>
                <p className='ms-2 text-[#1e6dbcf4]'>Jayarasafoodinternational88@gmail.com</p>
              </li>
              <li className='flex items-center'>
                <TbWorld className='text-[#1E6EBC] text-xl'/>
                <p className='ms-2 text-[#1e6dbcf4]'>www.aokunbakery.com</p>
              </li>
              <li className='flex items-center'>
                <BsFillHouseHeartFill className='text-[#1E6EBC] text-xl'/>
                <p className='ms-2 text-[#1e6dbcf4]'>Ruko Boston No 11 Blok D, Pik 2 <span className='block leading-none'>Kab. Tangerang, Banten 15145 Jakarta</span></p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className='h-[10%] mt-6 md:mt-0'>
        <p className='text-center text-[#1e6dbcf4] text-xl font-bold'>Jayarasa Food International adalah satu satunya platform di indonesia  <span className='md:block leading-none'>yang resmi dibawah naungan Ligao Foods, Okoon.</span></p>
      </div>
    </div>
  )

  
  // if(matches){
  //   return (
  //     <footer>
  //       <img src="/footer/foot-bg.jpg" alt="bg-footer" />
  //       <div className='flex'>
  //         <div className='w-[50vw] ps-16 px-8 pt-10 md:pt-16 pb-14'>
  //           <div className='ms-20'>
  //             <div className='w-[13%] mb-6'>
  //               <img src="/logo.svg" alt="logo" />
  //             </div>
  //             <ul className='flex gap-6 font-semibold mt-2 mb-4'>
  //               <li>Home</li>
  //               <li>About</li>
  //             </ul>
  //             <p className='text-[0.9rem]'>Copyright  @ 2023 Jayarasa, Ltd. Semua hak dilindungi undang-undang. No. 2021004804 Powered by vancheer</p>
  //           </div>
  //         </div>
  //         <div className='px-8 pt-10 md:pt-16 pb-14 bg-[#e4e4e4] w-[50vw] flex justify-center gap-10'>
  //           <div>
  //             <div className='text-center'>
  //               <p>Hotline</p>
  //               <p className='text-[#1266AA] text-xl'>400-7878-788</p>
  //             </div>
  //             <div className='flex justify-center gap-2 md:gap-4 mt-4 md:mt-6'>
  //               <a href="" className='bg-[#fff] p-3 rounded-full'>
  //                 <img src="/footer/1.png" />
  //               </a>
  //               <a href="" className='bg-[#fff] p-3 rounded-full'>
  //                 <img src="/footer/2.png" />
  //               </a>
  //               <a href="" className='bg-[#fff] p-3 rounded-full'>
  //                 <img src="/footer/3.png" />
  //               </a>
  //               <a href="" className='bg-[#fff] p-3 rounded-full'>
  //                 <img src="/footer/4.png" />
  //               </a>
  //             </div>
  //           </div>
  //           <div className='flex justify-center w-[8vw]'>
  //             <div>
  //               <img src="/footer/qr.jpg" className='mx-auto' />
  //               <p className='text-center text-[0.7rem]'>Ligao Foods Wechat Public</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </footer>
  //   )
  // }else{
  //   return (
  //     <footer className='bg-[#e4e4e4] '>
  //       <div className='px-8 pt-10 md:pt-16 pb-14'>
  //         <div>
  //           <div className='text-center'>
  //             <p>Hotline</p>
  //             <p className='text-[#1266AA] text-xl'>400-7878-788</p>
  //           </div>
  //           <div className='flex justify-center gap-2 md:gap-4 mt-4 md:mt-6'>
  //             <a href="" className='bg-[#fff] p-3 rounded-full'>
  //               <img src="/footer/1.png" />
  //             </a>
  //             <a href="" className='bg-[#fff] p-3 rounded-full'>
  //               <img src="/footer/2.png" />
  //             </a>
  //             <a href="" className='bg-[#fff] p-3 rounded-full'>
  //               <img src="/footer/3.png" />
  //             </a>
  //             <a href="" className='bg-[#fff] p-3 rounded-full'>
  //               <img src="/footer/4.png" />
  //             </a>
  //           </div>
  //         </div>
  //         <div className='flex justify-center mt-8'>
  //           <div>
  //             <img src="/footer/qr.jpg" className='mx-auto' />
  //             <p style={{fontSize:"0,7rem"}}>Ligao Foods Wechat Public</p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className='text-center px-2' style={{fontSize:"0,8rem"}}>
  //         <p>Copyright  @ 2023 Jayarasa, Ltd. Semua hak dilindungi undang-undang. No. 2021004804 Powered by vancheer</p>
  //       </div>
  //     </footer>
  //   )
  // }
}

export default Footerr