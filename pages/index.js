import Adventage from "@/components/home/Adventage";
import CompanyProfile from "@/components/home/CompanyProfile";
import OurProducs from "@/components/home/OurProducs";
import Resources from "@/components/home/Resources";
import Layout from "@/components/layouts/landingPage/layout"
import CompCarousel from "@/components/ui/carousel"
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session, status} = useSession()
  console.log(status)
  return (
    <Layout>
      <CompCarousel/>
      <div className=" h-3 lg:h-5 bg-[url('/image/banner-web-bg.jpg')] lg:bg-[url('/image/banner-bg.jpg')] bg-left-top bg-no-repeat bg-cover"></div>
      <CompanyProfile/>
      <OurProducs/>
      <Adventage/>
      <Resources/>
    </Layout>
  );
}
