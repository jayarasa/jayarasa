import Image from 'next/image'
import React from 'react'

const DoughnutsSeries = () => {
  return (
    <div className='flex justify-center mt-10'>
        <div className="">
            <p className="text-center">DOUGHNUTS SERIES</p>
            <div className=" w-[80%] md:w-full md:mx-0 mt-8">
                <div className='md:flex gap-20'> 
                    <div className="w-[80vw] h-[60vh] md:w-[33vw] rounded-3xl overflow-hidden">
                    <Image className="w-[100%] h-[100%] scale-125 hover:scale-150 transition duration-500" src="/catalogue/frozen_half_baked_goods/original_doughnut.jpeg" width={500} height={500}/>
                    </div>
                    <div className='md:mt-32 md:w-[30vw]'>
                        <p className="mt-2 font-semibold text-xl">04. Original Doughnut</p>
                        <p className="ms-1 mt-2">50 gram/pcs</p>
                        <p className="ms-1">40 pcs/bag * 10 bags/carton</p>
                        <p className="ms-1 font-semibold text-xl mt-6">Rp 697.613 - Without Icing Sugar</p>
                        <p className="ms-1 font-semibold text-xl mt-2">Rp 720.866 - With Icing Sugar</p>
                    </div>
                </div>
                <div className='mt-4 md:flex md:flex-row-reverse'>
                    <div className="w-[80vw] h-[60vh] md:w-[33vw] rounded-t-[220px] overflow-hidden">
                        <Image className="w-[100%] h-[100%] scale-110 hover:scale-125 transition duration-500" src="/catalogue/frozen_half_baked_goods/blueberry_doughnut.jpeg" width={500} height={500}/>
                    </div>
                    <div className='md:mt-32 md:w-[30vw]'>
                        <p className="mt-2 font-semibold text-xl">05. Blueberry Doughnut</p>
                        <p className="ms-1 mt-2">50 gram/pcs</p>
                        <p className="ms-1">15 pcs/bag * 5 bags/carton</p>
                        <p className="ms-1 font-semibold text-xl mt-6">Rp 906.896 - Without Icing Sugar</p>
                        <p className="ms-1 font-semibold text-xl mt-2">Rp 837.135 - With Icing Sugar</p>
                    </div>
                </div>
                <div className='md:flex gap-20 mt-4'> 
                    <div className="w-[80vw] h-[60vh] md:w-[33vw] rounded-tr-[180px] overflow-hidden">
                        <Image className="w-[100%] h-[100%] scale-125 hover:scale-150 transition duration-500" src="/catalogue/frozen_half_baked_goods/strawberry_doughnut.jpeg" width={500} height={500}/>
                    </div>
                    <div className='md:mt-32 md:w-[30vw]'>
                        <p className="mt-2 font-semibold text-xl">06. Strawberry Doughnut</p>
                        <p className="ms-1 mt-2">50 gram/pcs</p>
                        <p className="ms-1">15 pcs/bag * 5 bags/carton</p>
                        <p className="ms-1 font-semibold text-xl mt-6">Rp 813.881 - Without Icing Sugar</p>
                        <p className="ms-1 font-semibold text-xl mt-2">Rp 790.628 - With Icing Sugar</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoughnutsSeries