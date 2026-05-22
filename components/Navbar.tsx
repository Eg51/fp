import React from 'react'
import Link from 'next/link'
import Image from '../public/logo.png'
const Navbar = () => {
  return (
    <div className='bg-gray-200 flex justify-center p-7 outline-0'>
      <div className='flex text-cyan-600 w-full justify-between items-center'>
        <Link href={"/"}>
           <div className='flex justify-center items-center'>
            <img src={"logo.png"} width={30} height={30}/>
            <h1 className='font-bold text-[22px] font-mono hover:text-gray-800  active:text-amber-500'>ReactDEv</h1>
          </div>
        </Link>
        <nav className='flex gap-5 text-8 font-bold font-mono'>
          <Link href={"/"}><p className='active:text-amber-500'></p></Link>
          <Link href={"Portfolio"}><p className='active:text-amber-500 hover:text-gray-800'>Portfolio</p></Link>
          <Link href={"Services"}><p className=' hover:text-gray-800 active:text-amber-500'>Services</p></Link>
          <Link href={"FAQs"}><p className=' hover:text-gray-800 active:text-amber-500'>FAQs</p></Link>
          <Link href={"Blog"}><p className=' hover:text-gray-800 active:text-amber-500'>Blog</p></Link>
          <Link href={'Contact'}><p className=' hover:text-gray-800 hover:text-7.3 active:text-amber-500'>Contact</p></Link>
        </nav>
        <Link className='cursor-pointer' href={'Resume'}>
          <div className=' cursor-pointer flex items-center justify-center
              w-50 h-9.5 border-0 text- rounded-[11px] text-[16px] font-mono font-bold'>
              <button className=' cursor-pointer hover:text-gray-800 active:text-amber-500'>Download resume</button>
          </div>
        </Link>
      </div>
   </div>
  )
}
export default Navbar

