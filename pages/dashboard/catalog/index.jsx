import LayoutAdmin from "@/components/layouts/admin/layout"
import { useState } from "react";
import { Card } from "flowbite-react";
import ModalDelete from "@/components/ui/modalDelete";
import { Button } from "flowbite-react";
import Link from "next/link";
import useFetchAPI from "@/hooks/useFecthApi";
import Image from "next/image";
import { Flowbite } from "flowbite-react";


const customTheme = {
  card: {
    root: {
      children: "flex flex-col justify-between",
    },
  },
};

export default function Catalog() {
  const [modalDelete, setModalDelete] = useState("")
  const { data, mutate, isLoading } = useFetchAPI({
      url: `/api/dashboard/catalog`,
  });
  const handleDelete = async() => {
    const id = modalDelete
    try {
      const fecth = await fetch(`/api/dashboard/catalog/${id}`,{
        method: "DELETE",
      })
    } catch (error) {
      console.log(error.message)
    }
    mutate()
    setModalDelete("")
  }

  return (
    <>
      <LayoutAdmin>
          <div className="max-w-xxl rounded overflow-hidden shadow-lg p-5 flex justify-between ">
              <h2 className="font-bold text-2xl">Katalog</h2>
                <Link href={"/dashboard/catalog/add"}>
                  <button className="me-16 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" type="submit">Tambah Katalog</button>
                </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {data?.data?.map((katalog, i)=>(
              <Flowbite theme={{ theme: customTheme }}>
                <Card
                    key={katalog.id}
                    className="w-[80vw] md:w-[40vw] lg:w-[20vw] p-6"
                    imgAlt="Gambar Kue"
                    renderImage={() => (
                      <div className="w-full h-[30vh] border-[1px] relative mb-4">
                        <img className="absolute inset-0 w-full h-full object-contain rounded-md" src={`${data?.env}${katalog?.image}`} alt="gambar kue" />
                      </div>
                    )}
                  >
                    <div>
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {katalog.judul} 
                      </h5>
                      <div className="flex">
                          {`${katalog.harga.toLocaleString('id-ID', 
                            {
                              style: 'currency',
                              currency: 'IDR',
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0
                            }
                          )}/${katalog.satuan}`}
                      </div>
                      <h3 className="font-bold text-gray-700">Deskripsi </h3>
                      <div className="font-normal text-gray-700 dark:text-gray-400">
                        <div className="text-justify " dangerouslySetInnerHTML={{ __html: katalog.deskripsi }} />
                      </div>
                    </div>
                    <div className="flex justify-around gap-2 mb-2">
                      <button className="w-full boeder border-2 border-rose-500 hover:border-rose-700 hover:text-rose-700 text-rose-500 font-bold py-2 px-4 rounded" onClick={()=>setModalDelete(katalog.id)} >H</button>
                      <button className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"  >E</button>
                    </div>
                    <Link href={`/dashboard/catalog/${katalog?.id}`}>
                     <button className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"  >D</button>
                    </Link>
                </Card>
              </Flowbite>
            ))}
          </div>
      </LayoutAdmin>
      <ModalDelete handleClick={handleDelete} setOpenModal={setModalDelete} openModal={modalDelete} />
    </>
  );
}
