import Link from "next/link";
import GlobalLogo from "./GlobalLogo";
import Image from "next/image";
import { SignOut } from "../Buttons/AuthButtons";
import { User_Links } from "@/GlobalLinks";
import { auth } from "@/auth";
import HeaderLinks from "./HeaderLinks";


export default async function Header(){
    const session = await auth();
    return (
        <main className="w-full bg-neutral-100 border-b border-neutral-300 sticky top-0 z-50 flex items-center justify-between py-3 px-20">
            <GlobalLogo />
            {/* ---- */}
                <HeaderLinks />
                {session ? (
                <section className="relative group">
                    <div className="w-full flex pb-2 gap-2 items-center">
                        <div className="relative rounded-full bg-neutral-800 border-2 w-12 h-12 overflow-hidden">
                            <Image src={session.user?.image as string} alt="profil image" fill className="object-cover"/>
                        </div>
                        <span className="-space-y-1">
                            <h1 className="text-[20px] capitalize">{session.user?.name}</h1>
                            <p className="text-sm text-neutral-500">{session.user?.id}</p>
                        </span>
                    </div>
                    <section className="absolute right-0 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 origin-top transition-all duration-300 rounded border border-neutral-800 z-50 text-nowrap p-4 bg-neutral-900 min-w-full">
                        <div className="border-b mb-2 pb-2 border-neutral-700">
                            <h1 className="capitalize font-semibold">{session.user?.name}</h1>
                            <p className="text-neutral-500 text-sm">{session.user?.email}</p>
                        </div>
                        <ul className="space-y-1">
                            {User_Links.map((UserLink, index) => {
                                return (
                                    <li key={index} 
                                        className="flex gap-2 p-2 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800 capitalize rounded-lg cursor-pointer">
                                        <UserLink.icon />
                                        {UserLink.label}
                                    </li>
                                )
                            })}
                        </ul>
                        <hr className="mb-1 mt-2 border-neutral-700"/>
                        <SignOut />
                    </section>
                </section>)
                :(
                <div className="flex gap-3">
                    <Link href='/' className="py-1 px-3 font-semibold rounded">Login</Link>
                    <Link href='/' className="py-1 px-3 bg-neutral-500 text-neutral-100 font-semibold rounded-lg">Register</Link>
                    {/* <SignInGoogle /> */}
                </div>
                )}
        </main>
    )
}