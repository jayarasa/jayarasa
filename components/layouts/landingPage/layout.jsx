import Navbar from "./navbar"
import Footer from "./footer"
export default function Layout({children}) {
  return (
      <>
        <Navbar/>
          <div className="min-h-[100vh] mt-16 md:mt-20 2xl:mt-24">
            {children}
          </div>
        <Footer/>
      </>
  );
}
