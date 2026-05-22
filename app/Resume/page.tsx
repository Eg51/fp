import React from 'react'
import Link from 'next/link'

const Resume = () => {
  return (
    <div className='flex items-center bg-gray-200
     text-gray-500 justify-center p-60 min-h-screen'>
      <Link href={'/'}><h1>click here to download Resume</h1></Link>
    </div>
  )
}

export default Resume
