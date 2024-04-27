import React, { useState } from 'react'

const News = () => {
  const [tabSection, setTabSection] = useState(1)
  return (
    <div className='ff pt-16' style={{boxShadow: "inset 0 26px 4px 0 #f7f8f9"}}>
        <div className='bg-[#fff] w-[95vw] lg:w-[80%] mx-auto '>
            <div className='flex lg:flex-row flex-col lg:w-full justify-between mb-10 gap-4'>
                <h2 className='text-xl'>NEWS & RESOURCES</h2>
                <ul className='flex gap-1 md:gap-6 menus font-bold text-xs md:text-sm lg:text-[1.05rem] w-full'>
                    <li className={`cursor-pointer relative ${tabSection == 1 ? "aktif" : ""} hover:text-[#1266aa]`} onClick={()=>setTabSection(1)}>Politics information</li>
                    <li className={`cursor-pointer relative ${tabSection == 2 ? "aktif" : ""} hover:text-[#1266aa]`} onClick={()=>setTabSection(2)}>What's New</li>
                    <li className={`cursor-pointer relative ${tabSection == 3 ? "aktif" : ""} hover:text-[#1266aa]`} onClick={()=>setTabSection(3)}>Industry News</li>
                    <li className={`cursor-pointer relative ${tabSection == 4 ? "aktif" : ""} hover:text-[#1266aa]`} onClick={()=>setTabSection(4)}>Press Release</li>
                    <li className={`cursor-pointer relative ${tabSection == 5 ? "aktif" : ""} hover:text-[#1266aa]`} onClick={()=>setTabSection(5)}>Product Release</li>
                </ul>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt optio explicabo, temporibus praesentium minus id minima aspernatur vel excepturi, quas repellendus laboriosam. Soluta, ratione eum eligendi fugiat distinctio id voluptate quaerat? Accusamus officia dolor iusto, consequuntur iste explicabo optio quidem ut, dicta, facilis deleniti eveniet odio sed iure similique?</div>
        </div>
    </div>
  )
}

export default News