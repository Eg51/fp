import React from 'react'
import Link from 'next/link'
import Image from '../public/logo.png'
const Navbar = () => {
  return (
    <div className='bg-gray-200 flex justify-center p-7 outline-0'>
      <div className='flex text-gray-600 w-full justify-between items-center'>
        <div className='flex justify-center items-center'>
          <img src={"logo.png"} width={30} height={30}/>
          <h1 className='font-bold text-[22px] font-mono'>ReactDEv</h1>
        </div>
        <nav className='flex gap-5 text-8 font-bold font-mono'>
          <Link href={"/"}>Home</Link><Link href={"Portfolio"}>Portfolio</Link>
          <Link href={"Services"}>Services</Link><Link href={"FAQs"}>FAQs</Link>
          <Link href={"Blog"}>Blog</Link><Link href={'Contact'}>Contact</Link>
        </nav>
        <Link className='cursor-pointer' href={'Resume'}>
          <div className=' cursor-pointer flex items-center justify-center
              w-50 h-9.5 border-0 text-gray-800 rounded-[11px] text-[16px] font-mono font-bold'>
              <button className=' cursor-pointer'>Download Resume'</button>
          </div>
        </Link>
      </div>
   </div>
  )
}
export default Navbar
