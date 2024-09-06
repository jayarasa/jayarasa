import Image from 'next/image'
import React from 'react'

const TitleProd =({children})=>{
    return (
        <p className='absolute bottom-0 left-0 right-0 text-center px-4 pb-4 pt-10 text-white text-lg ' style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6), transparent)"}}>{children}</p>
    )
}
const Wrap = ({children, className=""})=>{
    return(
        <div className={`col-span-1 overflow-hidden relative w-full row-span-1 ${className}`}>
            {children}
        </div>
    )
}
const OurProducs = () => {
  return ( 
    <div className=' bg-[#FFFFFF] ff mt-20 md:mt-20 lg:mt-20 mb-20 animate-atas'>
        <h2 className='font-semibold text-center mb-16 mt-16 md:mt-20 lg:mt-28'>OUR BEST SELLER PRODUCT</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2 w-[93%] lg:w-[80%] mx-auto lg:h-[80vh]">
            <Wrap>
                <Image src="/landingpage/menu/portugueseEggTartMini.jpeg" width={200} height={200} className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>portuguese egg tart mini</TitleProd>
            </Wrap>
            <Wrap>
                <img src="/landingpage/menu/portugueseEggTartPremium.jpeg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Portuguese egg tart premium</TitleProd>
            </Wrap>
            <Wrap>
                <img src="/landingpage/menu/DonatOriginalWithSugar.jpeg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Donat Original (With sugar)</TitleProd>
            </Wrap>
            <Wrap>
                <img src="/landingpage/menu/donatStrobryWithSugar.jpeg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Donat stoberi (With sugar)</TitleProd>
            </Wrap>
            <Wrap>
                <img src="/landingpage/menu/donatBlueBerryWithSugar.jpeg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Donat Blueberi (With sugar)</TitleProd>
            </Wrap>
            <Wrap>
                <img src="/landingpage/menu/kulisPortugisPremiumIncludeIsianPortuguFrozen.jpeg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Kulit portugis premium include isian portugis (Frozen)</TitleProd>
            </Wrap>
        </div>
    </div>
  )
}

export default OurProducs