import EggTartSeries from "@/components/catalog/frozen/eggTartSeries";
import Layout from "@/components/layouts/landingPage/layout"
import Image from "next/image";

export default function Menu() {

  return (
    <Layout>
          <div className="mt-24 mb-10">
            <div className="text-center pt-6 mb-10">
              <h1 className="font-bold text-4xl">PRODUCTS CATALOGUE</h1>
            </div>
            <div className="">
              <EggTartSeries/>
            </div>
          </div>
    </Layout>
  );
}
