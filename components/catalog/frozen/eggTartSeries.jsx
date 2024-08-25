import Image from 'next/image'
import React from 'react'

const EggTartSeries = () => {
  return (
    <div className='flex justify-center'>
        <div className="">
            <p className="text-xl text-center">FROZEN HALF BAKED GOODS</p>
            <p className="text-center">EGG TART SERIES</p>
            <div className="md:grid md:grid-cols-2 w-[80%] mx-auto md:w-full md:mx-0 md:grid-rows-2 gap-8 mt-1">
            <div className='row-start-1 col-start-1'> 
                <div className="w-[80vw] h-[60vh] md:w-[33vw] rounded-xl overflow-hidden">
                <Image className="w-[100%] h-[100%] scale-110 hover:scale-125 transition duration-500" src="/catalogue/frozen_half_baked_goods/portuguese_egg_tart_sheel_Y1207.png" width={500} height={500}/>
                </div>
                <p className="mt-2 font-semibold text-xl">01. Portuguese Egg Tart Shell Y1207</p>
                <p className="ms-1">20 gram/pcs</p>
                <p className="ms-1">40 pcs/bag * 10 bags/carton</p>
                <p className="ms-1 font-semibold text-xl">Rp 1.209.195</p>
            </div>
            <div className='row-start-1 row-end-3 col-start-2 mt-4 md:mt-0'>
                <div className="w-[80vw] h-[60vh] md:w-[33vw] rounded-tl-[220px] overflow-hidden">
                <Image className="w-[100%] h-[100%] scale-110 hover:scale-125 transition duration-500" src="/catalogue/frozen_half_baked_goods/premium_portugueses_egg_tart_shell207.png" width={500} height={500}/>
                </div>
                <p className="mt-2 font-semibold text-xl">02. Premium Portuguese Egg Tart Shell 207</p>
                <p className="ms-1">20 gram/pcs</p>
                <p className="ms-1">30 pcs/bag * 10 bags/carton</p>
                <p className="ms-1 font-semibold text-xl">Rp 1.209.195</p>
                <p className="ms-1 mt-2">Combination Set :</p>
                <p className="ms-1">5 bags 207 egg tart shell + 6 bottles filling</p>
                <p className="ms-1 font-semibold text-xl">Rp 1.124.528</p>
                <div className="w-[80vw] h-[70vh] md:w-[33vw] rounded-md overflow-hidden">
                    <Image className="mx-auto w-[50%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/frozen_half_baked_goods/portuguese_egg_tart_filling.png" width={500} height={300}/>
                </div>
                <p className="mt-2 font-semibold text-xl">Portuguese Egg Tart Filling</p>
                <p className="ms-1">907 g/bottle * 12 bottles/carton</p>
                <p className="ms-1 font-semibold text-xl">Rp 1.287.900</p>
            </div>
            <div className='row-start-2 col-start-1 mt-6 md:-mt-14'>
                <div className="w-[80vw] h-[70vh] md:w-[33vw] rounded-md overflow-hidden">
                    <Image className="w-[100%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/frozen_half_baked_goods/mini_portuguese_egg_tart_shell_206.png" width={500} height={500}/>
                </div>
                <p className="mt-2 font-semibold text-xl">03. Mini Portuguese Egg Tart Shell 206</p>
                <p className="ms-1">9.5 gram/pcs</p>
                <p className="ms-1">60 pcs/bag * 10 bags/carton</p>
                <p className="ms-1 font-semibold text-xl">Rp 1.147.185</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EggTartSeries