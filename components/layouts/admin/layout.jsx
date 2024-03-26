import { useSession } from "next-auth/react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"

const LayoutAdmin = ({children}) => {
  // const {data: session, status} = useSession()
  // console.log(status)
  // console.log(session)
  return (
    <>
    <Sidebar/>
    <div className="sm:ml-64">
        <Navbar/>
        <div className="py-6 px-7">
            {children}
        </div>
    </div>
    </>
  )
}

export default LayoutAdmin