import LayoutAdmin from "@/components/layouts/admin/layout"
import { useState } from "react";
import { Card } from "flowbite-react";
import ModalDelete from "@/components/ui/modalDelete";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function Catalog() {
  const [modalDelete, setModalDelete] = useState(false)
  const handleDelete = () => {
    console.log("handleDelete")
    setModalDelete(false)
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
            {Array(10).fill({nama:"namaaaaa"}).map((name, i)=>(
              <Card
                  key={i}
                  className="max-w-sm p-4"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="/logo.svg"
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021 $ 
                  </h5>
                  <div className="flex">

                  </div>
                  <h3 className="font-bold text-gray-700">Deskripsi </h3>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Sekitar 30g/ potong 
                    saluran penjualan: kue , katering, saluran supermarket suhu
                    pemanggang: Waktu pencarian 30 menit
                    Panas:  180°C -  180°C
                    Waktu memanggang: 3 menit
                  </p>
                  <div className="flex justify-around">
                    <button className="boeder border-2 border-rose-500 hover:border-rose-700 hover:text-rose-700 text-rose-500 font-bold py-2 px-4 rounded" onClick={()=>setModalDelete(true)} >Hapus Katalog</button>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"  >Edit Katalog</button>
                  </div>
              </Card>
            ))}
          </div>
      </LayoutAdmin>
      <ModalDelete handleClick={handleDelete} setOpenModal={setModalDelete} openModal={modalDelete} />
    </>
  );
}
