import Layout from "@/components/layouts/landingPage/layout"
import { Card } from "flowbite-react";
import useFetchAPI from "@/hooks/useFecthApi";
import { Flowbite } from "flowbite-react";

const customTheme = {
  card: {
    root: {
      children: "flex flex-col justify-between",
    },
  },
};


export default function Menu() {
  const { data } = useFetchAPI({
      url: `/api/dashboard/catalog`,
  });
  return (
    <Layout>
          <div className="mt-24 flex flex-wrap gap-4 justify-center">
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
                </Card>
              </Flowbite>
            ))}
          </div>
    </Layout>
  );
}
