import { signOut } from 'next-auth/react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 sticky top-0 w-full z-40">
        <div className=" flex flex-wrap items-center justify-between mx-auto py-4 px-7">
            <a href="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-[#5CAFAF] self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jayarasa</span>
            </a>
            <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <span onClick={signOut} className="block py-2 px-3 text-[#50623A] rounded hover:cursor-pointer md:hover:text-[#5CAFAF] dark:text-white" aria-current="page">Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar