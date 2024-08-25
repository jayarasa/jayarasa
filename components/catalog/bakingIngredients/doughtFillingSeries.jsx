import Image from 'next/image'
import React from 'react'

const DoughFillingSeries = () => {
  return (
    <div className='flex justify-center'>
        <div className="mt-10">
            <p className="text-2xl text-center mb-1">BAKING INGREDIENTS</p>
            <p className="text-center">DOUGH & FILLING SERIES</p>
            <div className='md:flex gap-4 mt-8'> 
                <div className="w-[80vw] mx-auto md:mx-0 h-[40vh] md:w-[33vw] overflow-hidden">
                    <Image className="w-[100%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/baking_ingredients/pizza_dough.jpeg" width={500} height={500}/>
                </div>
                <div className='md:w-[30vw] md:grid grid-cols-2 grid-rows-2 mt-8 ms-4 md:ms-0'>
                    <div className='row-start-1 col-start-1 md:ms-8'>
                        <p className="mt-2 font-semibold text-xl">11. Pizza Dough</p>
                        <p className="ms-1 mt-1">800 gram/pcs</p>
                        <p className="ms-1">11 pcs/bag * 1 bags/carton</p>
                        <p className="ms-1 font-semibold text-xl mt-2">Rp 725.682</p>
                    </div>
                    <div className='row-start-2 col-start-2 mt-8 md:mt-0'>
                        <p className="mt-2 font-semibold text-xl">12. Dough Blanket</p>
                        <p className="ms-1 mt-1">115 gram/pcs</p>
                        <p className="ms-1">80 pcs / carton</p>
                        <p className="ms-1 font-semibold text-xl mt-2">Rp 897.864</p>
                    </div>
                </div>
            </div>
            <div className='md:flex md:flex-row-reverse mt-12'>
                <div className="w-[80vw] h-[60vh] md:h-[70vh] md:w-[25vw] overflow-hidden mx-auto md:mx-0">
                    <Image className="mx-auto w-[90%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/baking_ingredients/frozen_strawberry_filling.jpeg" width={500} height={500}/>
                </div>
                <div className='ms-4 md:ms-32 mt-10'>
                    <p className="mt-2 font-semibold text-xl">13. Frozen Strawberry Filling</p>
                    <p className="ms-1">15 gram/pcs</p>
                    <p className="ms-1">2 pcs/carton</p>
                    <p className="ms-1 font-semibold text-xl">Rp -</p>
                </div>
            </div>
            <div className='md:flex mt-12'> 
                <div className="w-[80vw] mx-auto md:mx-0 h-[70vh] md:w-[25vw] rounded-md overflow-hidden md:-mt-96">
                    <Image className="mx-auto w-[90%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/baking_ingredients/salad_dressing _lactobacillus_flavour.jpeg" width={500} height={300}/>
                </div>
                <div className='ms-4 md:m-0'>
                    <p className="mt-2 font-semibold text-xl">14. Salad Dressing - Lactobacillus Flavour</p>
                    <p className="ms-1">5 kg/pcs</p>
                    <p className="ms-1">2 pcs / carton</p>
                    <p className="ms-1 font-semibold text-xl">Rp 1.029.600</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoughFillingSeries