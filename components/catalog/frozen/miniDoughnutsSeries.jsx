import Image from 'next/image'
import React from 'react'

const MiniDoughnutsSeries = () => {
  return (
    <div className='flex justify-center mt-14'>
        <div className="">
            <p className="text-center mb-6">MINI DOUGHNUTS SERIES</p>
            <div className="md:grid md:grid-cols-2 w-[80%] md:w-full md:mx-0 md:grid-rows-2 gap-12 mt-1">
            <div className='row-start-1 col-start-1'> 
                <div className="w-[80vw] h-[50vh] md:h-[60vh] md:w-[33vw] rounded-xl overflow-hidden">
                <Image className="w-[100%] h-[100%] translate-x-[-38px] scale-125 hover:scale-150 transition duration-500" src="/catalogue/frozen_half_baked_goods/mini_original_doughnut.jpeg" width={500} height={500}/>
                </div>
                <p className="mt-2 font-semibold text-xl">07. Mini Original Doughnut</p>
                <p className="ms-1 mt-1">20 gram/pcs</p>
                <p className="ms-1">18 pcs/bag * 9 bags/carton</p>
                <p className="ms-1 font-semibold text-xl mt-1">Rp 813.881*</p>
            </div>
            <div className='row-start-1 col-start-2 mt-4 md:mt-0'>
                <div className="w-[80vw] h-[50vh] md:h-[60vh] md:w-[33vw] rounded-t-[210px] overflow-hidden">
                <Image className="w-[100%] h-[100%] translate-x-[-38px] scale-125 hover:scale-150 transition duration-500" src="/catalogue/frozen_half_baked_goods/mini_bluberry_doughnut.jpeg" width={500} height={500}/>
                </div>
                <p className="mt-2 font-semibold text-xl">08. Mini Blueberry Doughnut</p>
                <p className="ms-1 mt-1">20 gram/pcs</p>
                <p className="ms-1">18 pcs/bag * 9 bags/carton</p>
                <p className="ms-1 font-semibold text-xl mt-1">Rp 976.658*</p>
            </div>
            <div className='row-start-2 col-start-1 mt-6 md:-mt-8'>
                <div className="w-[80vw] h-[50vh] md:h-[60vh] md:w-[33vw] rounded-t-[210px] overflow-hidden">
                    <Image className="w-[100%] h-[100%] translate-x-[-38px] scale-125 hover:scale-150 transition duration-500" src="/catalogue/frozen_half_baked_goods/mini_strawberry_doughnut.jpeg" width={500} height={500}/>
                </div>
                <p className="mt-2 font-semibold text-xl">09. Mini Strawberry Doughnut</p>
                <p className="ms-1 mt-1">20 gram/pcs</p>
                <p className="ms-1">18 pcs/bag * 9 bags/carton</p>
                <p className="ms-1 font-semibold text-xl mt-1">Rp 976.658*</p>
            </div>
            <div className='row-start-2 col-start-2 mt-6 md:-mt-8'>
                <div className="w-[80vw] h-[50vh] md:h-[60vh] md:w-[33vw] rounded-tr-[155px] overflow-hidden">
                    <Image className="w-[100%] h-[100%] translate-x-[-38px] scale-125 hover:scale-150 transition duration-500" src="/catalogue/frozen_half_baked_goods/mini_milk_cheese_doughnut.jpeg" width={500} height={500}/>
                </div>
                <p className="mt-2 font-semibold text-xl">10. Mini Milk Cheese Doughnut</p>
                <p className="ms-1 mt-1">20 gram/pcs</p>
                <p className="ms-1">18 pcs/bag * 9 bags/carton</p>
                <p className="ms-1 font-semibold text-xl">Rp 813.881*</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MiniDoughnutsSeries