'use client'

import Link from 'next/link'

// Import Tailwind CSS in your main TypeScript file

function Menu() {
  return (
    <>
      <nav className='flex bg-browny text-d_color h-[100px] shadow-2xl m-8'>
        <ul className='w-full flex text-2xl items-center justify-around'>
          <li className='w-full flex duration-300 hover:text-3xl justify-center'>
            <button className=' '>
              <Link href='/'>Home</Link>
            </button>
          </li>
          <li className='w-full flex duration-300 hover:text-3xl justify-center'>
            <button className=' '>
              <Link href='/projects'>Projects</Link>
            </button>
          </li>
          <li className='w-full flex duration-300 hover:text-3xl justify-center'>
            <button className=' '>
              <Link href='/contact'>Contact</Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
