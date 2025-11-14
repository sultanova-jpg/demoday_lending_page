import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import useDarkMode from "../store/DarkModeStore";

export function NavbarWithSolidBackground() {
  const { t, i18n } = useTranslation();
  const translation = (lang) => {
    i18n.changeLanguage(lang);
    setShowLangMenu(false);
  };

  const [openNav, setOpenNav] = useState(false);
  const { pathname } = useLocation();
  const isDark = useDarkMode((state) => state.isDark)
  const changeMode = useDarkMode((state) => state.changeMode)
  const [showLangMenu, setShowLangMenu] = useState(false);

  function change() {
    if (isDark) {
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
    
  }

  React.useEffect(() => {
    const onResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const Item = ({ to, children }) => (
    <Link to={to}>
      <Typography
        as="div"
        variant="small"
        className={`cursor-pointer px-3 py-2 rounded-full transition
          ${
            pathname === to
              ? "bg-[#CFE3C9] text-[#0A2317]"
              : "text-[#0A2317]/80 hover:text-[#0A2317] hover:bg-[#E8D8B4]/50"
          }`}
      >
        {children}
      </Typography>
    </Link>
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 
    lg:flex-row lg:items-center lg:gap-3 dark:text-[#A8D29B]">
      <Item to="/">{t("home")}</Item>
      <Item to="/animal">{t("animals")}</Item>
      <Item to="/feed">{t("feed")}</Item>
      <Item to="/about">{t("about us")}</Item>

      {/* 🌙 Dark mode */}
      <button className="py-2 px-4" onClick={()=>{
        change()
        changeMode()
      }}>
        {isDark ? (
          <IoSunnyOutline className="text-yellow-900" />
        ) : (
          <BsMoon className="text-blue-gray-800" />
        )}
      </button>

      {/* 🌍 Language dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowLangMenu(!showLangMenu)}
          className="flex items-center gap-1 text-[#0A2317] dark:text-[#A8D29B] hover:text-[#28604F] transition"
        >
          <MdLanguage className="text-2xl" />
        </button>

        {showLangMenu && (
          <div className="absolute right-0 mt-2 w-28 rounded-lg shadow-lg bg-white dark:bg-[#2a4b3d] text-[#0A2317] dark:text-[#A8D29B] border border-gray-200 dark:border-[#3B6145] z-50">
            <ul className="text-sm">
              <li
                onClick={() => translation("en")}
                className="px-3 py-2 hover:bg-[#E8D8B4]/50 dark:hover:bg-[#3B6145] cursor-pointer rounded-t-lg"
              >
                English
              </li>
              <li
                onClick={() => translation("rus")}
                className="px-3 py-2 hover:bg-[#E8D8B4]/50 dark:hover:bg-[#3B6145] cursor-pointer"
              >
                Русский
              </li>
              <li
                onClick={() => translation("uz")}
                className="px-3 py-2 hover:bg-[#E8D8B4]/50 dark:hover:bg-[#3B6145] cursor-pointer rounded-b-lg"
              >
                O‘zbek
              </li>
            </ul>
          </div>
        )}
      </div>
    </ul>
  );

  return (
    // ⬇️ убрали max-h и mx-5, добавили контейнер и обрезку переполнения
    <div className="pt-4 overflow-x-clip">
      <div className="max-w-[1200px] mx-auto px-4">
        <Navbar
          className="
            mb-3 sticky top-3 z-50 w-full
            rounded-full border border-white/50
            bg-white/70 backdrop-blur px-4
            dark:bg-[#264d3d] dark:border-none
          "
        >
          <div className="flex items-center justify-between">
            <Link to="/">
              <Typography className="flex items-center gap-2 font-semibold text-[#0A2317]">
                <span className="text-2xl dark:text-[#A8D29B]">🌍</span> WildWorld
              </Typography>
            </Link>

            <div className="hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-2 rounded-full text-[#0A2317] lg:hidden"
              onClick={() => setOpenNav((v) => !v)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </IconButton>
          </div>

          <Collapse open={openNav}>
            <div className="pt-3 lg:hidden">{navList}</div>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}
