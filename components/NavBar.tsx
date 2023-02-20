import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react"
import setLanguage from 'next-translate/setLanguage'
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";


const Navbar = () => {
  const [visibility, setVisibility] = useState(false)
  const { t, lang } = useTranslation("common");

  const langSwitch = t("langSwitch");
  const archiveNav = t("archiveNav");
  const homeNav = t("homeNav");
  const courseNav = t("courseNav");


  const navItems = [
    {
      text: homeNav,
      link: "/",
    },
    {
      text: courseNav,
      link: "/history",
    },
    {
      text: archiveNav,
      link: "/donate",
    },
  ];

  return (
    <div
      className="sticky top-0 flex w-auto h-[70px] md:space-x-4 items-center justify-between bg-[#2A2A2E] z-50"
      style={{ minWidth: "calc(100vw-3rem)" }}
    >
      <div className="cursor-pointer items-center bg-[#1A1A1A] skewed mt-16 absolute hidden md:flex">
        <Image src="/logo.jpg" height={180} width={180} />
      </div>
      <div className="space-x-12 items-center hidden md:flex md:pl-48">
        {navItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <p className="cursor-pointer hover:text-[#2C7DF2] text-[#F5F5F5] font-medium text-2xl">
              {item.text}
            </p>
          </Link>
        ))}
      </div>
      <div className="hidden md:flex justify-end w-full">
        {/* Language Selection */}
        <p className="cursor-pointer hover:text-[#2C7DF2] text-[#F5F5F5] pr-3 font-medium text-2xl" onClick={async () => await setLanguage(langSwitch)}>
          {langSwitch}
        </p>
      </div>

      <div className="flex md:hidden z-30 ml-0" onClick={() => {visibility ? setVisibility(false) : setVisibility(true)}}>
        <Bars3Icon className="h-10 w-10 text-white"/>
      </div>
      <div className={visibility ? "fixed z-20 h-screen bg-[#2A2A2E] border-r border-[rgb(0,0,0,0)] transition-all duration-200 w-screen m-0 p-0" : "transition-all ease-out duration-400 delay-150"}></div>
    </div>
  );
};

function usePersistLocaleCookie() {
  const { locale, defaultLocale } = useRouter()

  useEffect(persistLocaleCookie, [locale, defaultLocale])
  function persistLocaleCookie() {
    if(locale !== defaultLocale) {
       const date = new Date()
       const expireMs = 100 * 24 * 60 * 60 * 1000 // 100 days
       date.setTime(date.getTime() + expireMs)
       document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`
    }
  }
}

export default Navbar;
