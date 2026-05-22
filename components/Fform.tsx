import React from 'react'
import { Poppins } from 'next/font/google';
const Fform = () => {
  return (
    <div className=' flex items-center 
    justify-center p-10 outline-0 
    rounded-2xl h-80
    '>

     <div className='flex items-center
        justify-center p-5 rounded-2xl h-75 w-117.5 font-light
        text-gray-800  bg-gray-100 text-[14px] outline-0 gap-4 font-inter font-sm
     
        '><form action="" className="
            flex gap-10 flex-col outline-0
        "><input className='bg-gray-400 pl-9  pr-9 w-100 h-12
            rounded-[11px] font-poppins outline-0  text-gray-900 font-bold'
            type="text"
            placeholder='E.g John Doe'/>
            <input className='bg-gray-400 pl-9  pr-9 w-100 h-12
            rounded-[11px] font-poppins outline-0  text-gray-900 font-bold'
            type="text"
            placeholder=' ...@gmail.com ...@yahoo.com ...@outlook.com'/>
            <input className='bg-gray-400 pl-9 pr-9 w-100 h-12
            rounded-[11px] font-poppins outline-0  text-gray-900 font-bold' 
            type="text"
            placeholder='Message'/>
        </form>
      </div>
    </div>
  )
}
export default Fform
