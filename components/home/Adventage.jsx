import React, { useState } from 'react'
import Garis from '../ui/garis'

const ImageDiv= ({classWrap="", clasImage="", no=1, noActive=1, description="", onClick=()=>{}})=>{
  return (
        <div className={`  relative ${classWrap} w-[18vw] lg:w-[10vw] flex flex-col justify-items-center`} onClick={()=>onClick(no)}>
          <div className={`border w-[50px] h-[50px] lg:w-[80px] mx-auto  lg:h-[80px] rounded-full flex justify-center ${no == noActive ? "bg-[#1266AA]":""}`}>
            <img src={`/landingpage/logotab/${no == noActive ? "" :"color/"}${no}.png`} className={`${clasImage} m-auto object-cover `} />
          </div>
          <p className='mb-4 text-center'>{description}</p>
          {no == noActive && <div class="absolute mx-auto right-0  bottom-0 left-0 w-0 h-0 border-solid border-transparent border-[6px] border-t-[#5f5e5e] "></div>}
        </div>
  )
}
const Adventage = () => {
  const [noActive, setNoActive] = useState(1)
  return (
    <div className='bg-[#F6FAFE] h-[80vh] pt-20 ff'>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between w-[94%] lg:w-[80%] mx-auto'>
            <div className='mx-auto'>
                <p className='mb-4'>CORE ADVANTAGE</p>
                <Garis className='mx-auto'/>
            </div>
            <div className='flex gap-2 lg:gap-4 justify-between'>
                <ImageDiv no={1} noActive={noActive} description="Rantai Lini Produksi Cerdas" onClick={(no)=>setNoActive(no)}/>
                <ImageDiv no={2} noActive={noActive} description='Rantai Logistik Pendingin' onClick={(no)=>setNoActive(no)}/>
                <ImageDiv no={3} noActive={noActive} description='Kekuatan Produk' onClick={(no)=>setNoActive(no)}/>
                <ImageDiv no={4} noActive={noActive} description='pelayanan kami' onClick={(no)=>setNoActive(no)}/>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Adventage