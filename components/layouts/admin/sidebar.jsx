import React, { useState } from 'react'
import { IoIosLogOut  } from "react-icons/io";
import { GrCatalog } from "react-icons/gr";
import Link from 'next/link';

function Sidebar() {
  const [hideDropdown, setHideDropdown] = useState(true)
  return (
    <>
        <button data-drawer-target="sidebar-multi-level-sidebar"  data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2" aria-label="Sidebar">
            <a href="/dashboard">
                <img src="/logo.svg" alt="Logo" className="w-full" />
            </a>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium mt-6">
                    {/* <li>
                        <button onClick={()=> setHideDropdown((prev)=> !prev)} id="dropdownDefaultButton" type="button" className="flex items-center w-full px-3 py-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown" data-collapse-toggle="dropdown">
                            <RiPagesLine />
                            <span className="flex-1 ms-4 text-left rtl:text-right whitespace-nowrap">Pages</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <ul id="dropdown" className={`${hideDropdown ? "hidden" : ""} px-3 py-2 space-y-2`}>
                            <li>
                                <Link href="/dashboard/landingpage" className="flex items-center w-full px-3 py-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Landing Page</Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center w-full px-3 py-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">FAQ</Link>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <Link href="/dashboard/catalog" className="flex items-center px-3 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <GrCatalog />
                            <span className="flex-1 ms-4 whitespace-nowrap">Katalog</span>
                        </Link>
                    </li>
                    <li className="flex items-center px-3 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <IoIosLogOut className='font-bold' style={{fontWeight: 900}}/>
                        <span className="flex-1 ms-4 whitespace-nowrap">Logout</span>
                    </li>

                </ul>
            </div>
        </aside>
    </>
  )
}

export default Sidebar