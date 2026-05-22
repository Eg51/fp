import React from 'react'
import Image from '../public/logo.png'
import Link from 'next/link'
import Icons1 from '@/components/iconss/Icons1'
import Icons2 from '@/components/iconss/Icons2'
import Icons3 from '@/components/iconss/Icons3'
import Icons4 from '@/components/iconss/Icons4'
import Line from '@/components/Line'
const Footerr = () => {
  return (
    <div className=' p-7 bg-gray-200 flex flex-col
      items-center justify-center text-cyan-800'>
      <div className='flex items-center justify-between w-full'>
        <Link href={'/'}>
          <div className='flex items-center pr-40'>
            <img src={"logo.png"} width={30} height={30} />
            <h1 className='active:text-amber-500 hover:text-gray-800
            font-bold text-2xl border-0 font-mono'>ReactDEv</h1>
          </div>
        </Link>
        <div className='text-[12px]
          font-mono font-bold gap-2 flex items-center justify-center'>
          <p>Built</p>
          <p>by</p>
          <Link href={'https://www.github.com/Eg51'} className='active:text-amber-500 hover:text-gray-800'>Eg51</Link>
          <p>on</p><Link href={'https://www.nextjs.org'}><img src={'next.svg'}
           width={50} height={50}/></Link>
          <p>Code</p><p>available</p><p>on</p>
          <Link href={'https://www.github.com/Eg51'}><p className=' active:text-amber-500 hover:text-gray-800'>github</p></Link>
        </div>
        <div className='flex items-center justify-center'>
          <nav className='flex gap-8 font-bold font-mono'>
            <Link href={"https://www.github.com/Eg51"}><Icons1 /></Link>
            <Link href={"https://www.linkedin.com/login"}><Icons2 /></Link>
            <Link href={"https://www.instagram.com/login"}><Icons3 /></Link>
            <Link href={"https://www.web.telegram.org"}><Icons4 /></Link>
          </nav>
        </div>
      </div>
      {/* <div className='flex items-left justify-left'> */}
      {/* </div> */}
    </div>
  )
}
export default Footerr
