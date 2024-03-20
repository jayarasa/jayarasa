import React from 'react'

function Navbar() {
  return (
    <nav class="bg-[#BFDBDB] p-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            {/* <div class="block lg:hidden">
                <button id="nav-toggle" class="text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div> */}
            <div class="flex lg:items-center w-auto" id="nav-content">
                <ul class=" flex items-center space-x-4">
                    <li><a href="#" class="hover:text-gray-300">Home</a></li>
                    <li><a href="#" class="hover:text-gray-300">About</a></li>
                    <li><a href="#" class="text-white text-xl font-bold">Logo</a></li>
                    <li><a href="#" class="hover:text-gray-300">Services</a></li>
                    <li><a href="#" class="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar