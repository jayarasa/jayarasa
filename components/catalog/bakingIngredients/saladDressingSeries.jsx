import Image from 'next/image'
import React from 'react'

const SaladDressingSeries = () => {
  return (
    <div className='flex justify-center'>
        <div className="mt-16">
            <p className="text-center mb-6">SALAD DRESSING SERIES</p>
            <div className='md:grid grid-rows-2'>
                <div className='flex flex-col md:flex-row-reverse row-start-1 mt-2'> 
                    <div className="mx-auto md:mx-0 w-[60vw] h-[70vh] md:h-[98vh] md:w-[18vw] overflow-hidden">
                        <Image className="mx-auto w-[100%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/baking_ingredients/salad_dressing _for_baking_purpose.jpeg" width={500} height={500}/>
                    </div>
                    <div className='mt-4 ms-4'>
                        <p className="mt-2 font-semibold text-xl">15. Salad Dressing - For Baking Purpose</p>
                        <p className="ms-1">900g/bag * 12 bags/carton</p>
                        <p className="ms-1 font-semibold text-xl mt-2">Rp 831.600</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-col-reverse row-start-2 md:-translate-y-1/2 mt-8'>
                    <div className="mx-auto md:mx-0 w-[80vw] h-[70vh] md:h-[80vh] md:w-[20vw] overflow-hidden">
                        <Image className="mx-auto w-[90%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/baking_ingredients/salad_dressing_sweetened.jpeg" width={500} height={500}/>
                    </div>
                    <div className='mt-2 ms-4'>
                        <p className="mt-2 font-semibold text-xl">16. Salad Dressing - Sweetened</p>
                        <p className="ms-1 mt-1">1000g/bag * 12 bags/carton</p>
                        <p className="ms-1 font-semibold text-xl mt-2">Rp 1.181.400</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-col-reverse row-start-2 md:-translate-y-1/2'> 
                    <div className="mx-auto md:mx-0 w-[80vw] h-[70vh] md:h-[80vh] md:w-[20vw] overflow-hidden">
                        <Image className="mx-auto w-[90%] h-[100%] hover:scale-110 transition duration-500" src="/catalogue/baking_ingredients/salad_dressing_bread_filling.jpeg" width={500} height={300}/>
                    </div>
                    <div className='mt-2 ms-4'>
                        <p className="mt-2 font-semibold text-xl">17. Salad Dressing - Bread Filling</p>
                        <p className="ms-1 mt-1">900g/bag * 12 bags/carton</p>
                        <p className="ms-1 font-semibold text-xl mt-2">Rp 1.095.600</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaladDressingSeries