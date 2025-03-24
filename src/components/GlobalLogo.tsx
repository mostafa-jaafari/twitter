import Link from 'next/link'
import React from 'react'

export default function GlobalLogo() {
  return (
    <Link href='/' className="text-3xl primary-color font-bold">
        Merch<span className='secondary-color'>Hub</span>
    </Link>
  )
}
