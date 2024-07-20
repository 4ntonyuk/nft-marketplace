"use client"

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";

const HeaderSearch = ({className}: {className?: string}) => (
  <div className={`relative max-w-[256px] ${className}`}>
    <input 
      type="text" 
      name="headerSearch" 
      id="headerSearch"
      className="input w-full h-10 py-[10px] pr-8 flex-shrink-0 outline-none"
      placeholder="Search" 
    />
    <Image 
      src="/icons/shape.svg"
      alt="shape"
      width={20}
      height={20}
      className="absolute top-1/2 right-3 -translate-y-1/2 object-contain max-w-[19px] max-h-[19px]"
    />
  </div>
);

const HeaderNotifications = ({ notifications } : { notifications: boolean }) => (
  <div className={`relative cursor-pointer ${notifications && "new-notification"}`}> 
    <Image 
      src="/icons/bell.svg"
      alt="notifications"
      width={24}
      height={24}
      className="object-contain max-w-6 max-h-6"
    />
  </div>
)

const Header = () => {
  const notifications = true;
  return (
    <header className="py-5 border-b-2 border-neutrals-6">
      <div className="w-full flex justify-between items-center max-container padding">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image 
              src="/images/logo.svg"
              alt="logo"
              width={126}
              height={32}
              className="object-contain max-w-[126px] max-h-8"
            />
          </Link>
          <div className="flex items-center gap-8 border-l-2 border-l-neutrals-6 pl-8 py-3 max-lg:hidden">
            <Link href="#!" className="font-dmsans text-button2 text-neutrals-2">Discover</Link>
            <Link href="#!" className="font-dmsans text-button2 text-neutrals-4">How it work</Link>
          </div>
        </div>
        <HeaderSearch className="mx-16 max-sm:hidden md:hidden w-full max-w-none" />
        <div className="flex items-center gap-6 md:hidden">
          <HeaderNotifications notifications={notifications} />
          <Image 
            src="/icons/burger.svg"
            alt="burger menu"
            width={26}
            height={12}
            className="object-contain max-w-[26px] max-h-3 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-6 max-md:hidden">
          <HeaderSearch />
          <HeaderNotifications notifications={notifications} />
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
      </div>
    </header>
  )
}

export default Header;