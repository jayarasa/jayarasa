import React from 'react'
import { FaInstagram, FaWhatsapp, FaTiktok  } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="border-2 border-double border-black ">
        <p className='text-center mb-5 text-xs'>PT Jayarasa Food Internasional</p>
        <div className="flex  flex-row w-full">
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
        <p className='text-center text-[0.60rem]'>2024 <sup>TM</sup></p>
    </footer>
  )
}

export default Footer