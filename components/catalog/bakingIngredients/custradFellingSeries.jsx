import Image from 'next/image'
import React from 'react'

const CustardFillingSeries = () => {
  return (
    <div className='flex justify-center'>
        <div className="md:-mt-72 mt-16">
            <p className="text-center">CUSTARD FILLING SERIES</p>
            <div className='md:flex gap-12 mt-2'> 
                <div className="md:-ms-6 mx-auto md:mx-auto w-[70vw] h-[70vh] md:h-[100vh] md:w-[20vw] overflow-hidden">
                    <Image className="mx-auto w-[80%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/baking_ingredients/ketan_hitam_flavour.jpeg" width={500} height={500}/>
                </div>
                <div className="mt-2 mx-auto md:mx-auto mb-2 md:-ms-6 w-[70vw] h-[70vh] md:h-[100vh] md:w-[20vw] overflow-hidden md:translate-y-52">
                    <Image className="mx-auto w-[80%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/baking_ingredients/milk_cheese_flavour.jpeg" width={500} height={500}/>
                </div>
                <div className="md:-ms-6 mx-auto md:mx-auto w-[70vw] h-[70vh] md:h-[100vh] md:w-[20vw] overflow-hidden md:translate-y-1/2">
                    <Image className="mx-auto w-[80%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/baking_ingredients/avocado_flavour.jpeg" width={500} height={500}/>
                </div>
            </div>
            <div className='mt-12'>
                <p className="mt-2 font-semibold text-xl">17. Custard Filling</p>
                <p className="ms-1 mt-4 mb-4">1 kg/bag * 6 bag/carton</p>
                <p className="ms-1 font-semibold text-xl">Rp 712.800 - Ketan Hitam Flavour</p>
                <p className="ms-1 font-semibold text-xl mb-1 mt-1">Rp 600.600 - Milk Cheese Flavour</p>
                <p className="ms-1 font-semibold text-xl">Rp 600.600 - Avocado Flavour</p>
            </div>
        </div>
    </div>
  )
}

export default CustardFillingSeries