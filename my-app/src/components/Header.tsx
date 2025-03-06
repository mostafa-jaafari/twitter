import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <main className='w-full px-20 text-neutral-100 bg-blue-900 py-4 flex justify-between items-center'>
      <Link href='/'>
        <h1 className='font-bold text-2xl'>BrandName</h1>
      </Link>
      <div className='flex gap-2'>
        <span className='cursor-pointer flex items-center relative mr-6'>
          <Heart />
          <b className='absolute -top-1 -right-4 bg-neutral-100 text-blue-900 px-1.5 rounded-full'>0</b>
        </span>
        <Link href='/login' className='py-1 px-4 rounded bg-neutral-100 text-blue-700 border border-blue-400 cursor-pointer font-semibold'>Login</Link>
        <Link href='/register' className='py-1 px-4 rounded bg-neutral-100 text-blue-700 border border-blue-400 cursor-pointer font-semibold'>Register</Link>
      </div>
    </main>
  )
}
