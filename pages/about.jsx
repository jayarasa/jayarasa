import Layout from "@/components/layouts/landingPage/layout"
import Image from "next/image";
export default function About() {
  return (
    <Layout>
      <div className="mt-[12vh] mb-28">
        <h2 className="mt-28 mb-10 text-center text-3xl md:text-6xl font-bold">About Jayarasa</h2>
        <div className="w-[96vw] md:w-[80vw] mx-auto">
          <img src="/about/product.jpeg" className=" w-full md:border-8 md:border-[#8CD3F5]" alt="" />
          <Image
            src="/about/product.jpeg"
            alt="Deskripsi gambar"
            className=" w-full md:border-8 md:border-[#8CD3F5]"
            width={600}
            height={400}
            loading="lazy"
          />
        </div>
        <div className="flex mt-20 flex-col md:flex-row">
          <div className="w-full md:w-[50vw]">
            <img src="/about/logo.jpeg" className="w-[45%]  ms-auto me-auto md:me-10" alt="" />
          </div>
          <div className="w-full md:w-[50vw] mt-10 md:mt-0">
            <p className="text-xl text-center md:text-left md:text-3xl w-[80%] md:w-[76%] ms-auto me-auto md:me-0 md:ms-4">JAYARASA FOOD INTERNATIONAL sebagai platform penjualan resmi untuk pasar Indonesia di bawah naungan Ligao. Saat ini, terdapat lebih dari 20 staf layanan penjualan yang bertujuan untuk mengembangkan dan memelihara pasar Indonesia.</p>
          </div>
        </div>
      </div>
      <div className="mb-28 md:px-14">
        <h2 className="mt-28 mb-10 text-center text-3xl md:text-5xl font-bold">About Ligao</h2>
        <div className="w-full md:w-[55vw] mt-10 md:mt-0">
          <p className="text-xl text-center md:text-left md:text-2xl w-[80%] md:w-[100%] ms-auto me-auto md:me-0 md:ms-4">
            LIGAO FOODS INCORPORATED merupakan listed company berskala besar yang bergerak dibidang penelitian, pengembangan dan penjualan produk frozen siap saji. Terletak di guangzhou, Ia memiliki 10 anak perusahaan dan 2 perusahaan cabang.
          </p>
        </div>
        <div className="w-full md:w-[55vw] md:ms-auto mt-10 md:mt-6">
          <p className="text-xl text-center md:text-left md:text-2xl w-[80%] md:w-[100%] ms-auto me-auto md:me-0 md:ms-4">
          Ligao, Aokun dan Haodao Foods yang berada dibawah naungan LIGAO FOODS INCORPORATED, memproduksi berbagai macam produk bahan panggang, produk frozen siap saji dan juga saus panggang. Di tahun 2020, perusahaan Ini mencapai omset sebanyak RMB 1.81 miliar, dimana tercatat peningkatan sebanyak 14.27% setiap tahun.
          </p>
        </div>
        <div className="w-full md:w-[55vw] mt-10 md:mt-6">
          <p className="text-xl text-center md:text-left md:text-2xl w-[80%] md:w-[100%] ms-auto me-auto md:me-0 md:ms-4">
            Berbagai tempat produksi seperti yang terletak di Zengcheng Guangzhou, Sanshui Fonan, Changxing Zhejiang, dan Weihu Henan dengan total area melebihi 100.000 m2 menjadikannya salah satu perusahaan yang merupakan produsen terbesar dalam negara.
          </p>
        </div>
      </div>
    </Layout>
  );
}
