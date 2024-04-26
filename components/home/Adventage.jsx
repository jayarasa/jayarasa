import React, { useState } from 'react'
import Garis from '../ui/garis'
import 'animate.css';
import { useHover } from '@mantine/hooks';

const ImageDiv= ({classWrap="", clasImage="", no=1, noActive=1, description="", onClick=()=>{}})=>{
  return (
        <div className={`relative ${classWrap} w-max lg:w-[10vw] flex flex-col justify-items-center`} onClick={()=>onClick(no)}>
          <div className={`border w-[48px] h-[48px] lg:w-[80px] mx-auto  lg:h-[80px] rounded-full flex justify-center ${no == noActive ? "bg-[#1266AA]":""}`}>
            <img src={`/landingpage/logotab/${no == noActive ? "" :"color/"}${no}.png`} className={`${clasImage} m-auto object-cover `} />
          </div>
          <p className='mb-4 text-center text-xs lg:text-base'>{description}</p>
          {no == noActive && <div class="animate__animated animate__fadeInDown absolute mx-auto right-0  bottom-0 left-0 w-0 h-0 border-solid border-transparent border-[6px] border-t-[#5f5e5e] "></div>}
        </div>
  )
}
const TabSection = ({no, judul, description})=>{
  const { hovered, ref } = useHover();
  return (
        <div className='flex h-max lg:h-[75%] flex-col lg:flex-row bg-white w-[90vw] lg:w-full mx-auto animate__animated animate__fadeIn transition duration-300 shadow-md'>
          <div className="w-full lg:w-2/5 p-2 lg:p-4"> 
            <div className='w-full h-full'>
              <p className='text-end text-7xl lg:text-9xl font-bold text-[#F4F6F9]'>{`0${no}`}</p>
              <div className='w-[100%] lg:w-[78%] ms-auto'>
                <h3 className='text-3xl text-[#1266AA] mb-4 xl:mb-10'>{judul}</h3>
                <p className='mb-8 xl:mb-20'>{description}...</p>
                <div className='transisi mb-2 lg:mb-0 w-max lg:aspect-square transition duration-500 relative ' ref={ref}>
                  <button className='bg-[#1266AA] text-white rounded-full px-7 py-2 ff transition duration-500 '>More <span className='font-bold ms-2'>+</span></button>
                 {hovered && <div className='w-[90%] h-[3%] p-1  bayangan bottom-0 rounded-full'></div>}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5 overflow-hidden">
            <img src={`/landingpage/adventage/${no}.jpg`} className='w-full h-full hover:scale-110 transition duration-500'/>
          </div>
        </div>
  )
}

const Adventage = () => {
  const [noActive, setNoActive] = useState(1)
  return (
    <div className='bg-[#F6FAFE] h-max lg:h-[93vh] pt-20 ff overflow-hidden'>
        <div className='flex flex-col h-max lg:h-[25%] lg:flex-row gap-4 lg:gap-0 justify-between w-[94%] lg:w-[80%] mx-auto'>
            <div className='mx-auto'>
                <p className='mb-4'>CORE ADVANTAGE</p>
                <Garis className='mx-auto'/>
            </div>
            <div className='flex gap-1 lg:gap-4 justify-between'>
                <ImageDiv no={1} noActive={noActive} description="Rantai Lini Produksi Cerdas" onClick={(no)=>setNoActive(no)}/>
                <ImageDiv no={2} noActive={noActive} description='Rantai Logistik Pendingin' onClick={(no)=>setNoActive(no)}/>
                <ImageDiv no={3} noActive={noActive} description='Kekuatan Produk' onClick={(no)=>setNoActive(no)}/>
                <ImageDiv no={4} noActive={noActive} description='pelayanan kami' onClick={(no)=>setNoActive(no)}/>
            </div>
        </div>
        {noActive == 1 && <TabSection no={1} judul="Intelligent Production Line Chain" description="Introduced the global technology production equipment, including Germany Siemens, Switzerland RONDO, Japan Shikoku, Holland Redmark and other international brands, synchronized with the" />}
        {noActive == 2 && <TabSection no={2} judul="Rantai Logistik Rantai Dingin" description="Perusahaan sistem rantai dingin pertama yang dibangun sendiri di industri roti beku Tiongkok, dengan 3.000+ kendaraan berdasarkan kontrak, mencakup 31 provinsi, kotamadya dan daerah otonom, 300+ kotamadya " />}
        {noActive == 3 && <TabSection no={3} judul="Kekuatan Produk" description="Dengan lebih dari 1.000 kategori produk, Ligao Group dapat sepenuhnya memenuhi kebutuhan pembelian dan konsumsi terpadu berbagai jenis pelanggan hilir dengan berbagai produk dan spesifikasi." />}
        {noActive == 4 && <TabSection no={4} judul="Pelayanan Kami" description="Tata letak nasional yang terdiri dari 1000+ elit pemasaran, bagi pelanggan koperasi untuk menyediakan pengembangan saluran, program penjualan, teknologi produk, layanan purna jual, pengembangan bakat, dan lainnya" />}
    </div>
  )
}

export default Adventage