import React from "react";
import Modal from "../components/Modal";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  const translation = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className="
        bg-[#E3EFEA] dark:bg-[#101715]
        min-h-screen
        text-[#0A2317] dark:text-[#A8D29B]
        px-4 sm:px-6 lg:px-8
        py-8 sm:py-10 lg:py-12
        leading-relaxed
      "
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1
          className="
            text-2xl sm:text-3xl lg:text-4xl
            font-bold text-center mb-6 sm:mb-8
          "
        >
          🌍 WildWorld
        </h1>

        {/* Intro */}
        <section className="text-base sm:text-lg mb-8 sm:mb-10">
          <p className="mb-3 sm:mb-4">{t("welcome")}</p>
          <p className="mb-3 sm:mb-4">{t("wildworld")}</p>
          <p>{t("In a time")}</p>
        </section>

        <hr className="my-8 sm:my-10 border-[#E8D8B4]/70" />

        {/* Mission */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            🐾{t("our mission")}
          </h2>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base">{t("we")}</p>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base">{t("thats ")}</p>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">{t("Our")}</p>

          <ul className="list-disc ml-5 sm:ml-8 space-y-2 text-sm sm:text-base">
            <li>🌿 {t("habitats")}</li>
            <li>🐅 {t("species")}</li>
            <li>🗺️ {t("Interactive")}</li>
            <li>📚 {t("educational")}</li>
            <li>💡 {t("conservation")}</li>
          </ul>
        </section>

        <hr className="my-8 sm:my-10 border-[#E8D8B4]/70" />

        {/* Why */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            💬 {t("why")}
          </h2>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base">{t("today")}</p>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base">
            {t("by making")}
          </p>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base">
            {t("wildWorld")}
          </p>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base">
            {t("our goal")}
          </p>
          <p className="text-sm sm:text-base">{t("because")}</p>
        </section>

        <hr className="my-8 sm:my-10 border-[#E8D8B4]/70" />

        {/* What we create */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            🌱 {t("what")}
          </h2>
          <ul className="list-disc ml-5 sm:ml-8 space-y-2 text-sm sm:text-base">
            <li>{t("interactive")}</li>
            <li>{t("accurate")}</li>
            <li>{t("minimalist")}</li>
            <li>{t("built")}</li>
            <li>{t("a bridge")}</li>
          </ul>
        </section>

        <hr className="my-8 sm:my-10 border-[#E8D8B4]/70" />

        {/* Vision */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            🤝 {t("our vision")}
          </h2>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base">{t("we dream")}</p>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base">{t("every")}</p>
          <p className="mb-2 sm:mb-3 text-sm sm:text-base">{t("our hope")}</p>
          <p className="text-sm sm:text-base">
            {t("plant")}🌏
          </p>
        </section>

        <hr className="my-8 sm:my-10 border-[#E8D8B4]/70" />

        {/* Contact block with modal */}
        <div
          className="
            flex flex-col sm:flex-row
            items-start sm:items-center
            gap-4 sm:gap-6
          "
        >
          <p className="text-xl sm:text-2xl font-semibold">
            {t("If you")}👉🏻
          </p>
          <div>
            <Modal />
          </div>
        </div>

        <hr className="my-8 sm:my-10 border-[#E8D8B4]/70" />

        {/* Final section */}
        <section className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            ✨ {t("in short")}
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            {t("exists")}
          </p>
          <p className="mt-4 text-lg sm:text-xl font-semibold">
            {t("together")} 🐘🦅🐢
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
