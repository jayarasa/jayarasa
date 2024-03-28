import Navbar from "./navbar"
import Footer from "./footer"
export default function Layout({children}) {
  return (
      <div className="mx-auto max-w-screen-sm relative">
        <Navbar/>
          <div className="min-h-[60vh]">
            {children}
          </div>
        <Footer/>
      </div>
  );
}
