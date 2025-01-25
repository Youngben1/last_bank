'use client'

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from '@/constants/index';
import { usePathname } from 'next/navigation';
import {cn} from "@/lib/utils";
import Footer from "./Footer";

const Sidebar = ({ user }: SiderbarProps) => {

    const pathname = usePathname();

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link className="mb-12 flex items-center gap-2 cursor-pointer" href="/">
                <Image src="/icons/logo.svg" alt="logo" height={35} width={35} className="size-[24px]" />
                <h1 className='font-bold text-sm text-black max-xl:size-14 sidebar-logo'>LastBank</h1>
            </Link>
            {sidebarLinks.map((item) => {

                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link key={item.label} href={item.route} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                        <div className="relative size-6">
                            <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0': isActive})} />
                        </div>

                        <p className={cn('sidebar-label', {'!text-white':isActive})}>{item.label}</p>
                    </Link>
                )
            })}

            USER
        </nav>
        <Footer user={user} />
    </section>
  )
}

export default Sidebar