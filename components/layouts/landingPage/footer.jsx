import React from 'react'
import { FaInstagram, FaWhatsapp, FaTiktok  } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Footer } from "flowbite-react";

function Footerr() {
  return ( 
    <Footer className=" bg-black rounded-b-none rounded-t-md">
      <div className='w-full text-white flex flex-col md:flex-row-reverse md:justify-between p-4'>
        <div className='ms-auto flex gap-3 mb-2'>
          <FaInstagram style={{display:"inline"}}/>
          <FaTiktok style={{display:"inline"}}/>
          <FaWhatsapp style={{display:"inline"}}/>
        </div>
        <div className='divide-y'>
          <p className='text-sm'><MdLocationOn style={{display:"inline"}}/> Ruko Boston Blok D No.11, Pik-2, Kelurahan Salembaran, Kecamatan Kosambi, Kabupaten Tangerang Banten</p>
          <Footer.Copyright href="#" by="Jayarasa™" year={2024} />
        </div>
      </div>
        {/* <p className='text-center mb-5 text-xs'>PT Jayarasa Food Internasional</p>
        <div className="flex flex-col  md:flex-row w-full">
          <div className='basis-1/2'>
            <h3 className='text-center font-bold mb-2'>Sosial Media</h3>
            <p className='ms-3 mb-1 font-semibold'><FaInstagram style={{display:"inline"}}/>  @JayarasaaIG</p>
            <p className='ms-3 mb-1 font-semibold'><FaTiktok style={{display:"inline"}}/>  @JayarasaaTiktok</p>
            <div className='ms-3 mb-1'> 
              <p className="font-bold"><MdLocationOn style={{display:"inline"}}/> Alamat</p>  
              <p> Ruko Boston Blok D No.11, Pik-2, Kelurahan Salembaran, Kecamatan Kosambi, Kabupaten Tangerang Banten </p>
            </div>
          </div>
          <div className='basis-1/2'>
            <h3 className='text-center font-bold mb-2'>Contact us</h3>
            <p className='text-xs break-keep text-[9px] font-bold mb-1'>Jayarasafoodinternasional88@gmail.com</p>
            <p><FaWhatsapp style={{display:"inline"}}/> (+62) 812-8889-3333</p>
            <div className='flex '>
              <img src="/halal.png" alt="logo halal" width={90}/>
              <img src="/logo.svg" alt="logo jayarasa" width={90}/>
            </div>
          </div>
        </div>
        <p className='text-center text-[0.60rem]'>2024 <sup>TM</sup></p> */}
    </Footer>
  )
}

export default Footerr