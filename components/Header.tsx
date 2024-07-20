"use client"

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";

const Header = () => {
  const notifications = true;
  return (
    <header className="w-full flex justify-between items-center pb-6 pt-12 md:py-6 lg:py-5">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image 
            src="/images/logo.svg"
            alt="logo"
            width={126}
            height={32}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-8 border-l-2 border-l-neutrals-6 pl-8 py-3 max-lg:hidden">
          <Link href="#!" className="font-dmsans text-button2 text-neutrals-2">Discover</Link>
          <Link href="#!" className="font-dmsans text-button2 text-neutrals-4">How it work</Link>
        </div>
      </div>
      <div className="md:hidden">
        <Image 
          src="/icons/burger.svg"
          alt="burger menu"
          width={22}
          height={11}
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-6 max-md:hidden">
        <div className="relative w-full flex">
          <input 
            type="text" 
            name="headerSearch" 
            id="headerSearch"
            className="input py-[10px] pr-10"
            placeholder="Search" 
          />
          <Image 
            src="/icons/shape.svg"
            alt="shape"
            width={19}
            height={19}
            className="absolute top-1/2 right-3 -translate-y-1/2 object-contain max-w-[19px] max-h-[19px]"
          />
        </div>
        <div className={`relative cursor-pointer ${notifications && "new-notification"}`}> 
          <Image 
            src="/icons/bell.svg"
            alt="notifications"
            width={24}
            height={24}
            className="object-contain max-w-6 max-h-6"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button 
            type="accent" 
            label="Upload" 
          />
          <Button 
            type="contour" 
            label="Connect Wallet" 
            click={() => {console.log(1)}}
          />
        </div>
      </div>
    </header>
  )
}

export default Header;