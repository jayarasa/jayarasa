import LayoutAdmin from "@/components/layouts/admin/layout"
import { useState } from "react";
import dynamic from 'next/dynamic';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

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
  return (
    <LayoutAdmin>
        <div className="max-w-xxl xl:mx-2 rounded overflow-hidden shadow-lg p-5">
            <h2 className="font-bold text-2xl">Tambah Katalog</h2>
            <div className="px-10 m-10">
                <div className="flex gap-10 justify-center mb-10">
                    <div className="flex-1">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="judul" value="Nama Kue:" />
                            </div>
                            <TextInput id="judul" type="text" placeholder="Bolu Kukus Roti" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="judul" value="Nama Kue:" />
                            </div>
                            <TextEditor />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="judul" value="Nama Kue:" />
                            </div>
                            <TextInput id="judul" type="text" placeholder="Bolu Kukus Roti" required />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LayoutAdmin>
  );
}
