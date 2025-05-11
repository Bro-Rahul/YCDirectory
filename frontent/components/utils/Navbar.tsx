import React from 'react'
import Image from 'next/image'
import icons from '@/constants/icons'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-5 py-3 items-center w-full border-b-2'>
      <Link href={'/'}>
        <Image
        src={icons.headerIcon}
        width={150}
        height={150}
        alt='Header-icon'
        priority
      />
      </Link>
      <ul className='flex w-fit gap-5 font-bold items-center'>
        <li className='cursor-pointer'><Link href={'/submit-startup'}>Create</Link></li>
        <li className='cursor-pointer'>Login</li>
        <li className='cursor-pointer rounded-full overflow-hidden'>
          <Link href={'/profile'}>
            <Image
              src={icons.profileIcon}
              width={35}
              height={35}
              alt='Profile-picture'
              priority
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar