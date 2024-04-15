/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'vqdzhiozwbdsctsmojhr.supabase.co',
        },
      ],
    },

};

export default nextConfig;
