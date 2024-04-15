import Layout from "@/components/layouts/landingPage/layout"
import { useSession } from "next-auth/react";
export default function Home() {
  const {data:session, status} = useSession()
  console.log(status)
  return (
    <Layout>
      aing lorem ipsum dolor sit amet, consectetur adipm, sed diam nonum, sed diam non vel fel guid. Ut enim ad minim veniam, quis nostr arranged eu fugiat nulla pariatur et dolore magna aliqu fugiat nulla pariatur et dolore magna al quo et dolore magna aliqu
      lorem ipsum dolor sit amet, consectetur adip, sed diam non vel fel guid. Ut enim ad minim veniam, qu  is nostr arranged eu fugiat nulla pariatur et dol lorem ipsum dolor sit amet, consectetur adip id est laborum. Ut enim ad minim veniam, quis nostr arranged eu fugiat nulla pari volatile et dolore magna aliqu fugiat nulla pariatur et dolore magna aliqu fug iure fugiat nulla pariatur et dolore mag na aliqu fugiat nulla pariatur et dolore magna al   quo et dolore magna aliqu 
    </Layout>
  );
}
