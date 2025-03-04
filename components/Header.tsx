import { chart, home } from '@/utils/Icons';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
    const menu = [
        {
            name: "Home",
            icon: home,
            link:"/",
        },
        {
            name:"My Stats",
            icon:chart,
            link:"/stats",
        },
    ];
  return (
    <header className="min-h-[8vh] px-[10rem] xl:px-[15rem] border-b-2 flex items-center">
        <nav className="flex-1 flex items-center justify-between ">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/icon--logo-lg.png" alt="logo" width={50} height={50} />
                <h1 className="text-3xl font-bold text-blue-400">Kwizi</h1>
            </Link>
        </nav>
    </header>
  )
}

export default Header