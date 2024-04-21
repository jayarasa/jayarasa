import Layout from "@/components/layouts/landingPage/layout"
import CompCarousel from "@/components/ui/carousel"
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session, status} = useSession()
  console.log(status)
  return (
    <Layout>
      <CompCarousel/>
      <div className="w-[100vw] h-3 lg:h-5 bg-[url('/image/banner-web-bg.jpg')] lg:bg-[url('/image/banner-bg.jpg')] bg-left-top bg-no-repeat bg-cover"></div>
      <div className="h-[80vh]">
      <div className=" bg-[#F8FAFC] py-28 relative">
        <div className="bg-[#E1EDF8] w-[50vw] h-[60vh] top-0 rounded-b-[20%] right-0 absolute z-0"></div>
        <div className="flex flex-col lg:flex-row absolute ">
          <div className="  w-[100vw] lg:w-[50vw]  ps-36 pe-6">     
            <h2 className="ff mb-4">COMPANY PROFILE</h2>
            <div className="mb-4 w-[40px] h-[6px] rounded-full bg-[#1266AA] ff"></div>
            <p className="ff mb-4">Perusahaan Jayarasa</p>
            <p className="text-slate-400 ff">Ligao Foods，Stock code: 300973, is a large-scale joint-stock listed enterprise integrating the R&D, production and sales of bakery ingredients and frozen bakery products, with its main products including cream, fruit products, sauces, chocolate and other bakery ingredients as well as frozen bakery goods, and some snacks. Ligao's subsidiaries, Ligao Foods, Aokun and Hao Dao Foods (Meihuang), are engaged in the business of bakery ingredients, frozen bakery products and bakery sauces.</p>
          </div>
          <div className="">
            <img src="company.jpg" alt="jayarasa" className="w-[90%] ms-auto z-[999999]"/>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
