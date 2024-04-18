import Navbar from "./navbar"
import Footer from "./footer"
export default function Layout({children}) {
  return (
      <>
        <Navbar/>
          <div className="min-h-[100vh] mt-[10vh]">
            {children}
          </div>
        <Footer/>
      </>
  );
}
