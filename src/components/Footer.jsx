import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function FooterWithLogo() {
  const { t, i18n } = useTranslation();
  const translation = (lang) => i18n.changeLanguage(lang);

  return (
    <footer
      className="
        w-full 
        bg-[#E3EFEA] dark:bg-[#101715]
        py-8 sm:py-10 
        px-4 sm:px-6 
        text-[#0A2317] dark:text-[#A8D29B]
        border-t border-[#E8D8B4]/60
      "
    >
      {/* TOP */}
      <div
        className="
          flex flex-col md:flex-row 
          items-center md:items-start 
          justify-between 
          gap-y-6 md:gap-y-0
          text-center md:text-left
        "
      >
        {/* LOGO */}
        <div
          className="
            text-xl xs:text-2xl 
            font-semibold 
            flex items-center justify-center md:justify-start 
            gap-2
          "
        >
          🌍 <span>WildWorld</span>
        </div>

        {/* MENU */}
        <ul
          className="
            flex flex-wrap items-center justify-center 
            gap-x-6 sm:gap-x-10 
            gap-y-3
            text-sm xs:text-base
          "
        >
          <li>
            <Link to="/">
              <Typography
                as="span"
                className="
                  font-medium 
                  text-[#0A2317]/80 dark:text-[#A8D29B] 
                  hover:text-[#28604F] dark:hover:text-[#A8D29B]
                  transition-colors
                  text-sm xs:text-base
                "
              >
                {t("home")}
              </Typography>
            </Link>
          </li>

          <li>
            <Link to="/animal">
              <Typography
                as="span"
                className="
                  font-medium 
                  text-[#0A2317]/80 dark:text-[#A8D29B] 
                  hover:text-[#28604F] dark:hover:text-[#A8D29B]
                  transition-colors
                  text-sm xs:text-base
                "
              >
                {t("animals")}
              </Typography>
            </Link>
          </li>

          <li>
            <Link to="/feed">
              <Typography
                as="span"
                className="
                  font-medium 
                  text-[#0A2317]/80 dark:text-[#A8D29B] 
                  hover:text-[#28604F] dark:hover:text-[#A8D29B]
                  transition-colors
                  text-sm xs:text-base
                "
              >
                {t("feed")}
              </Typography>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <Typography
                as="span"
                className="
                  font-medium 
                  text-[#0A2317]/80 dark:text-[#A8D29B] 
                  hover:text-[#28604F] dark:hover:text-[#A8D29B]
                  transition-colors
                  text-sm xs:text-base
                "
              >
                {t("about us")}
              </Typography>
            </Link>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-[#E8D8B4]/70" />

      {/* BOTTOM TEXT */}
      <Typography
        color="gray"
        className="
          text-center 
          text-xs xs:text-sm 
          opacity-80 
          dark:text-[#A8D29B]
        "
      >
        © 2025 🌍 WildWorld — Discover. Learn. Protect.
      </Typography>
    </footer>
  );
}
