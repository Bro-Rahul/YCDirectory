import React from 'react'
import Image from 'next/image'
import icons from '@/constants/icons'
import Link from 'next/link'
import LoginButton from './LoginButton'
import { getServerSession } from 'next-auth'
import options from '@/app/api/auth/[...nextauth]/options'
import Logout from './Logout'

const Navbar: React.FC = async () => {
  const session = await getServerSession(options);
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
        {session && <li className='cursor-pointer'><Link href={'/submit-startup'}>Create</Link></li>}
        <li className='cursor-pointer'>{!session ? <LoginButton /> : <Logout />}</li>
        <li className='cursor-pointer rounded-full overflow-hidden'>
          {session && <Link href={'/profile'}>
            <Image
              src={session.user.profile_picture}
              width={35}
              height={35}
              alt='Profile-picture'
              priority
            />
          </Link>}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar