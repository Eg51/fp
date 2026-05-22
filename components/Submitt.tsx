import React from 'react'
import Link from 'next/link';

const Submitt = () => {
  return (
    <div>
      <Link href={'/'}><button className='flex items-center justify-center
            p-1 w-34 h-16 text-gray-900 bg-gray-400 hover:bg-gray-700
            rounded-[11px] text-n font-mono outlne-0 font-bold hover:text-gray-200
            active:bg-cyan-600 active:text-gray-700 
            '>
            Submit
        </button>
      </Link>
    </div>
  )
}
export default Submitt
