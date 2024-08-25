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
          <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-6 md:p-12 max-w-md text-center">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline"
                >
                  Facebook
                </a>
              </li>
              {/* Tambahkan kontak lainnya di sini */}
            </ul>
          </div>
        </div>
      </div>      
    </Layout>
  );
}
