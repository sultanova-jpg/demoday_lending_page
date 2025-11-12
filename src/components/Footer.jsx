import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function FooterWithLogo() {
  const { t, i18n } = useTranslation();
      const translation=(lang)=>{
        i18n.changeLanguage(lang)
      }
  return (
    <footer className="w-full bg-[#E3EFEA] py-10 px-6  text-[#0A2317] border-t border-[#E8D8B4]/60 dark:bg-[#101715]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 text-center">
        
        <div className="text-2xl font-semibold flex items-center gap-2 dark:text-[#A8D29B]">
          🌍 <span>WildWorld</span>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <li>
            <Link to="/">
              <Typography
                as="span"
                className="font-medium text-[#0A2317]/80 hover:text-[#28604F] transition-colors dark:text-[#A8D29B]"
              >
                {t("home")}
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/animal">
              <Typography
                as="span"
                className="font-medium text-[#0A2317]/80 hover:text-[#28604F] transition-colors dark:text-[#A8D29B]"
              >
                {t("animals")}
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/feed">
              <Typography
                as="span"
                className="font-medium text-[#0A2317]/80 hover:text-[#28604F] transition-colors dark:text-[#A8D29B]"
              >
                {t("feed")}
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Typography
                as="span"
                className="font-medium text-[#0A2317]/80 hover:text-[#28604F] transition-colors dark:text-[#A8D29B]"
              >
                {t("about us")}
              </Typography>
            </Link>
          </li>
        </ul>
      </div>

      <hr className="my-8 border-[#E8D8B4]/70" />

      <Typography color="gray" className="text-center text-sm opacity-80 dark:text-[#A8D29B]">
        © 2025 🌍 WildWorld — Discover. Learn. Protect.
      </Typography>
    </footer>
  );
}
