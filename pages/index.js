import Layout from "@/components/layouts/landingPage/layout"
import { useSession } from "next-auth/react";
export default function Home() {
  const {data:session, status} = useSession()
  console.log(status)
  return (
    <Layout>
      Halaman Home
    </Layout>
  );
}
