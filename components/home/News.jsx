import React, { useState } from 'react'


const DivNews = ({src=1, tahun="", paragraf=""}) => {
  return (
    <div className='news-hover w-full lg:w-[30%] flex flex-row lg:flex-col'>
      <div className='overflow-hidden w-[45%] lg:w-full'>
        <img src={`/news/${src}.jpg`} className='hover:scale-110 transition duration-500 w-full h-full'/>
      </div>
      <div className='flex flex-col ps-4 lg:ps-0 lg:pt-2 w-[55%] lg:w-full'>
        <p className='inline-block'>{tahun}</p>
        <p className='paragraf lg:text-lg lg:my-2 text-sm'>{paragraf}</p>
        <div className='panah-kanan flex justify-start items-center text-[#1266AA]'>
          <span>More</span>
          <em></em>
        </div>
      </div>
    </div>
  )
}
const News = () => {
  const [tabSection, setTabSection] = useState(1)
  return (
    <div className='ff pt-16 mb-20' style={{boxShadow: "inset 0 26px 4px 0 #f7f8f9"}}>
        <div className='bg-[#fff] w-[95vw] lg:w-[80%] mx-auto '>
            <div className='flex lg:flex-row flex-col lg:w-full justify-between mb-10 gap-4'>
                <h2 className='text-xl'>NEWS & RESOURCES</h2>
                <ul className='flex gap-[0.30rem] md:gap-6 menus font-bold text-xs md:text-sm lg:text-[1.05rem] '>
                    <li className={`cursor-pointer relative ${tabSection == 1 ? "aktif" : ""} hover:text-[#1266aa]`} onClick={()=>setTabSection(1)}>What's New</li>
                    <li className={`cursor-pointer relative ${tabSection == 2 ? "aktif" : ""} hover:text-[#1266aa]`} onClick={()=>setTabSection(2)}>Product Release</li>
                </ul>
            </div>
            <div>
              {tabSection == 1 && <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-0'>
                <DivNews src="1" paragraf='Xinxianni Hawthorn Fruit Filling-Fresh to Market' tahun='2023.10.20'/>
                <DivNews src="2" paragraf='Recipe Gallery丨Cheesecake, a little touch of sweetness in the fall~' tahun='2023.08.17'/>
                <DivNews src="3" paragraf='Xinxianni Strawberry Fruit Filling丨 "Berry" theme series of cakes, diversified, anti-emo!' tahun='2023.09.28'/>
              </div>}
              {tabSection == 2 && <div className='lg:min-h-[35vh] min-h-[42vh]'></div>}
            </div>
        </div>
    </div>
  )
}

export default News