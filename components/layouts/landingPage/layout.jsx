import Navbar from "./navbar"
import Footer from "./footer"
import { useDisclosure, useMediaQuery  } from '@mantine/hooks';
import { Drawer  } from '@mantine/core';
import Accordion from "@/components/ui/Accordion";
import { useRouter } from "next/router";
import Link from "next/link";

const isActive = (pathname)=>{
  const router = useRouter()
  const pathnameActive = router.pathname
  console.log({pathnameActive})
  return pathnameActive == pathname ? "inline-block text-[#1C6DB8] pb-1" : ""
}

export default function Layout({children}) {
  const [opened, { toggle, close }] = useDisclosure();
  const matches = useMediaQuery('(min-width: 1024px)');
  return (
      <>
        <Navbar opened={opened} toggle={toggle}/>
          <div className="min-h-[100vh] mt-[10vh]">
            {children}
            {!matches && 
            <Drawer.Root opened={opened} onClose={close}  withCloseButton={false} size="100%" >
              <Drawer.Overlay />
              <Drawer.Content style={{ zIndex:"999999",top:"12vh"}} className="border-t">
                <Drawer.Body>
                  {/* <Accordion/> */}
                  <div className=''>
                    <ul className='flex flex-col gap-6 margin mr-20 font-bold text-lg'>
                      <li className={`${isActive("/")}`}><Link href="/">Home</Link></li>
                      <li className={`${isActive("/about")}`}><Link href="/about">About Us</Link></li>
                      <li className={`${isActive("/catalog")}`}><Link href="/catalog">Catalogue</Link></li>
                      <li className={`${isActive("/contact")}`}><Link href="/contact">Contact Me</Link></li>
                      {/* <li className={`${isActive("/article")}`}><Link href="/article">Article</Link></li> */}
                    </ul>
                  </div>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Root>
            }
          </div>
        <Footer/>
      </>
  );
}
