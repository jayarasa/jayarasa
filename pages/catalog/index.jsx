import { CustardFillingSeries, DoughFillingSeries, SaladDressingSeries } from "@/components/catalog/bakingIngredients";
import {DoughnutsSeries, EggTartSeries, MiniDoughnutsSeries} from "@/components/catalog/frozen";
import Layout from "@/components/layouts/landingPage/layout"


export default function Menu() {

  return (
    <Layout>
          <div className="mt-24 mb-10 md:mb-60">
            <div className="text-center pt-6 mb-10">
              <h1 className="font-bold text-4xl">PRODUCTS CATALOGUE</h1>
            </div>
            <div id="frozen">
              <EggTartSeries/>
              <DoughnutsSeries/>
              <MiniDoughnutsSeries/>
            </div>
            <div id="bakking">
              <DoughFillingSeries/>
              <SaladDressingSeries/>
              <CustardFillingSeries/>
            </div>
          </div>
    </Layout>
  );
}
