import LayoutAdmin from "@/components/layouts/admin/layout"
import { useState } from "react";
import dynamic from 'next/dynamic';
import {  Label, TextInput, Select } from "flowbite-react";

const TextEditor = dynamic(() => import('@/components/ui/texteditor'), {
  ssr: false 
});

export default function Catalog() {
  const [data, setData] = useState({
    judul: "", 
    kontak: "", 
    harga:"",
    satuan:"",
    deskripsi:"",
    image:"",
  })
    const [imagePrev, setImagePrev] = useState("")
    const changeImage = (e)=>{
        setData({...data, image: e.target.files[0]})
        const reader = new FileReader()
        reader.onload = function(event) {
            setImagePrev(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    for(let item in data) formData.append(item, data[item]);
    try {
        const response = await fetch('/api/dashboard/catalog', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Gagal melakukan fetch');
        }

        const data = await response.json();
        if(data.status == "ok") {
            mutate()
            setIsEdit(false)
            setImagePrev("")
        }
        else{ 
            throw new Error("Gagal Merubah Data")
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
  }
  return (
    <LayoutAdmin>
        <div className="max-w-xxl xl:mx-2 rounded overflow-hidden shadow-lg p-5">
            <h2 className="font-bold text-2xl">Tambah Katalog</h2>
            <form onSubmit={handleSubmit}>
                <div className="px-10 m-10">
                    <div className="flex gap-10 justify-center mb-10">
                        <div className="flex-1">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="judul" value="Gambar Kue:" />
                                </div>
                                <label htmlFor="imagePrev" className="block text-gray-700 font-bold mb-2 border-8 h-[32vh]">
                                    <input name="imagePrev" id="imagePrev" required type="file" onChange={(e)=>changeImage(e)} className="hidden shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                    {imagePrev && <img src={imagePrev} alt="" className="h-[100%] m-auto"/> }
                                </label>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="judul" value="Nama Kue:" />
                                </div>
                                    <TextInput id="judul" type="text" placeholder="Bolu Kukus Roti" required onChange={(e)=>setData({...data, judul: e.target.value})} />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="harga" value="Harga:" />
                                </div>
                                <TextInput id="harga" type="number" placeholder="0" required onChange={(e)=>setData({...data, harga: e.target.value})} />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="kontak" value="Kontak:" />
                                </div>
                                <TextInput id="kontak" type="number" placeholder="0" required onChange={(e)=>setData({...data, kontak: e.target.value})}/>
                            </div>
                           <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="satuan" value="Satuan:" />
                                </div>
                                <Select id="satuan" required onChange={(e)=>setData({...data, satuan: e.target.value})} >
                                    <option>-- Pilih Satuan --</option>
                                    <option value="pcs">Pcs</option>
                                    <option value="kg">Kg</option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="deskripsi" value="Deskripsi Kue:" />
                        </div>
                            <TextEditor id="deskripsi" onChange={(e)=>setData({...data, deskripsi: e})}/>
                    </div>
                    <div className="mt-10 flex justify-end ">
                        <button type="submit" className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-[#DBE7C9] font-medium rounded-lg text-sm w-[20%] px-5 py-2.5 text-center">Tambah</button>
                    </div>
                </div>
            </form>
        </div>
    </LayoutAdmin>
  );
}
