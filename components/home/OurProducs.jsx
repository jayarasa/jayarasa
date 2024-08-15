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
    <div className=' bg-[#FFFFFF] ff mt-8 md:mt-20 lg:mt-20 mb-20 animate-atas'>
        <h2 className='font-semibold text-center mb-16 mt-16 md:mt-20 lg:mt-28'>OUR BEST SELLER PRODUCT</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-2 w-[93%] lg:w-[80%] mx-auto lg:h-[80vh]">
            <div className="col-span-2 lg:col-span-1 row-span-1 lg:row-span-2  overflow-hidden relative w-full aspect-square lg:aspect-auto">
                <img src="/landingpage/menu/1.jpg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Kue Ketapang</TitleProd>
            </div>
            <Wrap>
                <img src="/landingpage/menu/2.jpg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Kue Ketapang</TitleProd>
            </Wrap>
            <Wrap>
                <img src="/landingpage/menu/3.jpg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Kue Ketapang</TitleProd>
            </Wrap>
            <Wrap>
                <img src="/landingpage/menu/4.jpg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Kue Ketapang</TitleProd>
            </Wrap>
            <Wrap>
                <img src="/landingpage/menu/5.jpg" className='hover:scale-110 transition duration-500 w-full h-full' />
                <TitleProd>Kue Ketapang</TitleProd>
            </Wrap>
        </div>
    </div>
  )
}

export default OurProducs