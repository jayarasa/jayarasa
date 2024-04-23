import React from 'react'
import Garis from '../ui/garis'

const CompanyProfile = () => {
  return (
      <div className="h-[120vh] lg:h-[80vh] bg-[#F8FAFC]">
        <div className=" bg-[#F8FAFC] py-28 relative">
            <div className="bg-[#E1EDF8] w-[100vw] lg:w-[50vw] h-[50vh] lg:h-[60vh] top-[200%] lg:top-0 rounded-b-0 lg:rounded-b-[20%] right-0 absolute z-0"></div>
            <div className="flex flex-col lg:flex-row absolute ">
            <div className="  w-[100vw] lg:w-[50vw]  ps-36 pe-6 mb-[200px]">     
                <h2 className="ff mb-4">COMPANY PROFILE</h2>
                <Garis/>
                <p className="ff mb-4 text-3xl text-[#1266AA] font-bold">Perusahaan Jayarasa</p>
                <p className="text-slate-400 ff">Jayarasa,Kode saham: 300973, adalah perusahaan tercatat berskala besar yang mengintegrasikan R&D, produksi dan penjualan bahan roti dan produk roti beku, dengan produk utamanya meliputi krim, produk buah, saus, coklat, dan bahan roti lainnya sebagai serta makanan roti beku, dan beberapa makanan ringan. Anak perusahaan Jayarasa, Jayarasa Foods, Aokun dan Hao Dao Foods (Meihuang), bergerak dalam bisnis bahan roti, produk roti beku, dan saus roti..</p>
            </div>
            <div className="lg:ps-auto">
                <div className="w-[90%] ms-auto me-auto lg:me-0 z-[9999] overflow-hidden">
                  <img src="company.jpg" alt="jayarasa" className="w-[100%] hover:scale-110 transition duration-500"/>
                </div>
            </div>
            </div>
        </div>
      </div>
  )
}

export default CompanyProfile