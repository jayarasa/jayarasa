import React, { useEffect, useRef } from 'react'
import Garis from '../ui/garis'
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@mantine/hooks';

const CompanyProfile = () => {
  const matches = useMediaQuery('(min-width: 1024px)');
  const [ref, inView] = useInView();
  const animatedRef = useRef(null);
  const animatedRefKanan = useRef(null);
    useEffect(() => {
    if (inView) {
      animatedRef.current.classList.add('animate-kiri');
      animatedRefKanan.current.classList.add('animate-kanan');
    }else{
      animatedRef.current.classList.remove('animate-kiri');
      animatedRefKanan.current.classList.remove('animate-kanan');
    }
  }, [inView]);
  return (
      <div className="h-[120vh] lg:h-[88vh] bg-[#F8FAFC]" ref={ref}>
        <div className=" bg-[#F8FAFC] py-28 relative ">
            {matches && <div className="bg-[#E1EDF8] w-[50vw] h-[60vh] lg:top-0 rounded-b-0 lg:rounded-b-[20%] right-0 absolute z-0"></div>}
            <div className="flex flex-col lg:flex-row absolute  lg:w-full">
              <div className="  w-[100vw] lg:w-[50vw] ps-6 lg:ps-36 pe-6 mb-[100px] lg:mb-[200px]" ref={animatedRef}>     
                  <h2 className="ff mb-4">COMPANY PROFILE</h2>
                  <Garis/>
                  <p className="ff mb-4 text-3xl text-[#1266AA] font-bold">Perusahaan Jayarasa</p>
                  <p className="text-slate-400 ff">Jayarasa,Kode saham: 300973, adalah perusahaan tercatat berskala besar yang mengintegrasikan R&D, produksi dan penjualan bahan roti dan produk roti beku, dengan produk utamanya meliputi krim, produk buah, saus, coklat, dan bahan roti lainnya sebagai serta makanan roti beku, dan beberapa makanan ringan. Anak perusahaan Jayarasa, Jayarasa Foods, Aokun dan Hao Dao Foods (Meihuang), bergerak dalam bisnis bahan roti, produk roti beku, dan saus roti..</p>
              </div>
              <div className={`w-full lg:ms-auto lg:w-[47%] relative ${!matches && "bg-[#E1EDF8] pt-10 pb-16"}`}>
                  {/* {!matches && <div className="bg-[#E1EDF8] w-[100vw] h-[38vh] md:h-[50vh] top-0 rounded-b-0 right-0 absolute z-0 -mt-10"></div>} */}
                  <div className=" mx-auto lg:me-0 z-[9999] overflow-hidden z-99999">
                    <img src="company.jpg" alt="jayarasa" className={`mx-auto w-[92%] md:w-[96%] lg:w-full h-full hover:scale-110 transition duration-500`} ref={animatedRefKanan}/>
                  </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export default CompanyProfile