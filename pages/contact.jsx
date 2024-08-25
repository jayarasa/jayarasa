import Layout from "@/components/layouts/landingPage/layout"
import Image from "next/image";
export default function Constact() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/contactUs/okon.jpg" // Path gambar latar belakang
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10"
        />

        {/* Card Container */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-6 md:p-12 max-w-3xl text-center">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <ul className="space-y-4 md:grid grid-cols-2">
              <li className="flex gap-2 items-center">
                <div className="w-[80px] h-[80px]">
                  <Image className="w-full h-full object-cover" src="/contactUs/ig.png" width={100} height={100}/>
                </div>
                <a
                  href="https://www.tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline"
                >
                  @OKOONID
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-[80px] h-[80px]">
                <Image className="w-full h-full object-cover" src="/contactUs/yt.png" width={100} height={100}/>
                </div>
                <a
                  href="https://www.tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline"
                >
                  @OKOONINDONESIA
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-[80px] h-[80px]">
                <Image className="w-full h-full object-cover" src="/contactUs/tt.png" width={100} height={100}/>
                </div>
                <a
                  href="https://www.tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline"
                >
                  @OKOONID
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-[80px] h-[80px]">
                  <Image className="w-full h-full object-cover" src="/contactUs/fb.png" width={100} height={100}/>
                </div>
                <a
                  href="https://www.tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline"
                >
                  Jaya Rasa
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-[80px] h-[80px]">
                <Image className="w-full h-full object-cover" src="/contactUs/wa.png" width={100} height={100}/>
                </div>
                <a
                  href="https://www.tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline"
                >
                  +62 812 8889 3333
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-[80px] h-[80px]">
                  <Image className="w-full h-full object-cover" src="/contactUs/wechat.png" width={100} height={100}/>
                </div>
                <a
                  href="https://www.tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline"
                >
                  JAYARASA_FOOD
                </a>
              </li>             
            </ul>
          </div>
        </div>
      </div>      
    </Layout>
  );
}
