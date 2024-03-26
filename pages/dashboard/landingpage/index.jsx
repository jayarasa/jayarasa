import LayoutAdmin from "@/components/layouts/admin/layout"
import useFetchAPI from "@/hooks/useFecthApi";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [isEdit, setIsEdit] = useState(false)
    const [datas, setDatas] = useState({paragraf:"",heading:"", image:""})
    const { data, mutate, isLoading } = useFetchAPI({
        url: `/api/dashboard/landingpage`,
    });
    const [imagePrev, setImagePrev] = useState("")
    const changeImage = (e)=>{
        const reader = new FileReader()
        reader.onload = function(event) {
            setImagePrev(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); 
    for (const [key, value] of new FormData(e.target)) {
        formData.append(key, value);
    }
    formData.append("id", data?.id);
    try {
        const response = await fetch('/api/dashboard/landingpage', {
            method: 'PUT',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Gagal melakukan fetch');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
};
console.log(datas?.paragraf != "" ? datas?.paragraf : data)
  return (
    <LayoutAdmin>
        <div className="max-w-xxl xl:mx-2 rounded overflow-hidden shadow-lg p-5">
            <h2 className="font-bold text-2xl">Landing Page</h2>
            <form onSubmit={(e)=>handleSubmit(e)} encType="multipart/form-data">
                <div className="flex mx-6 gap-2">
                    <div className="flex-1">
                        <div className="mt-4">
                            <label htmlFor="imagePrev" className="block text-gray-700 font-bold mb-2">Foto:</label>
                            <label htmlFor="imagePrev" className="block text-gray-700 font-bold mb-2 border-8">
                                <input disabled={!isEdit} name="imagePrev" id="imagePrev" type="file" onChange={(e)=>changeImage(e)} className="hidden shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                <img src={imagePrev ? imagePrev : data?.image ? `${data?.env}${data?.image}` : "" } alt="" />
                            </label>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mt-4">
                            <label htmlFor="heading" className="block text-gray-700 font-bold mb-2">Heading:</label>
                            <input disabled={!isEdit} id="heading" name="heading" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={datas?.heading ? datas?.heading : data?.heding} onChange={(e)=> setDatas((prev)=> ({...prev, heading:e.target.value }))} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="paragraf" className="block text-gray-700 font-bold mb-2">Paragraf:</label>
                            <input disabled={!isEdit} id="paragraf"  name="paragraf" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={datas?.paragraf != "" ? datas?.paragraf : data?.paragraf} onChange={(e)=> setDatas((prev)=> ({...prev, paragraf:e.target.value }))}/>
                        </div>
                    </div>
                </div>
                {!isEdit ? 
                    <div className="flex justify-end">
                        <button className="me-16 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={()=>setIsEdit(true)}>Edit</button>
                    </div>
                :
                    <div className="flex justify-end">
                        <button className="me-2 border-2 border-teal-500 bg-white hover:bg-teal-700 text-teal-500 font-bold py-2 px-4 rounded" type="button"  onClick={()=>{
                            setIsEdit(false)
                            setDatas({paragraf:"",heading:"", image:""})
                        }}>Batal</button>
                        <button className="me-16 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                    </div>
                }
            </form>
        </div>
    </LayoutAdmin>
  );
}
