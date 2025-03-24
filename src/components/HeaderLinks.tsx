"use client";
import { User_Links } from '@/GlobalLinks';
import Link from 'next/link';
import { useState } from 'react';

export default function HeaderLinks() {
    const [ActiveLink, setActiveLink] = useState('');
    return (
        <ul className="flex items-center gap-8 font-semibold">
            {User_Links.map((UserLink, index) => {
                return (
                    <Link 
                        key={index} 
                        href='/'
                        // href={`/${UserLink.label.toLocaleLowerCase().replace(" ", "")}`} 
                        onClick={() => setActiveLink(UserLink.label)}
                        className={`capitalize cursor-pointer transition-all ${ActiveLink === UserLink.label ? "primary-color relative Active-Link" : "text-neutral-400"}`}>
                        {UserLink.label}
                    </Link>
                )
            })}
        </ul>
    )
}
