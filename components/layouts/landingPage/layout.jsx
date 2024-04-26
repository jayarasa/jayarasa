import Navbar from "./navbar"
import Footer from "./footer"
import { useDisclosure, useMediaQuery  } from '@mantine/hooks';
import { Drawer  } from '@mantine/core';
import Accordion from "@/components/ui/Accordion";

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
              <Drawer.Content style={{ zIndex:"999999",top:"9.5vh"}} className="border-t">
                <Drawer.Body>
                  <Accordion/>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Root>
            }
          </div>
        <Footer/>
      </>
  );
}
