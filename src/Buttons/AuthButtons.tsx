'use client';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';

export const SignInGoogle = () => {
  return (
    <button 
      onClick={() => signIn('google')}
      className='bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer font-semibold border border-blue-500 px-3'
      >
      G
    </button>
  )
}

export const SignOut = () => {
  return (
    <button 
      onClick={() => signOut()}
      className='bg-[#6e0000] hover:bg-red-700 w-full cursor-pointer py-1 rounded-lg mt-1 border border-red-500 hover:border-red-400'>
        Sign Out
    </button>
  )
}