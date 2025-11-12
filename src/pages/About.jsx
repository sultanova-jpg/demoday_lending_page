import React from "react";
import Modal from "../components/Modal";
import { useTranslation } from "react-i18next";

const About = () => {
   const { t, i18n } = useTranslation();
    const translation=(lang)=>{
      i18n.changeLanguage(lang)
    }
  return (
    <div className="bg-[#E3EFEA] min-h-screen text-[#0A2317] px-8 py-12 leading-relaxed 
     dark:text-[#A8D29B] dark:bg-[#101715] ">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold text-center mb-8">
          🌍 WildWorld
        </h1>

        
        <section className="text-lg mb-10">
          <p className="mb-4">
            {t("welcome")}
          </p>
          <p className="mb-4">
            {t("wildworld")}
          </p>
          <p>
            {t("In a time")}
          </p>
        </section>

        <hr className="my-10 border-[#E8D8B4]/70" />

        
        <section>
          <h2 className="text-2xl font-semibold mb-4">🐾{t("our mission")}</h2>
          <p className="mb-3">
            {t("we")}
          </p>
          <p className="mb-3">
            {t("thats ")}
          </p>
          <p className="mb-6">
            {t("Our")}
          </p>

          <ul className="list-disc ml-8 space-y-2">
            <li>🌿 {t("habitats")}</li>
            <li>🐅 {t("species")}</li>
            <li>🗺️ {t("Interactive")}</li>
            <li>📚 {t("educational")}</li>
            <li>💡 {t("conservation")}</li>
          </ul>
        </section>

        <hr className="my-10 border-[#E8D8B4]/70" />

        
        <section>
          <h2 className="text-2xl font-semibold mb-4">💬 {t("why")}</h2>
          <p className="mb-3">
           {t("today")}
          </p>
          <p className="mb-3">
            {t("by making")}
          </p>
          <p className="mb-3">
            {t("wildWorld")}
          </p>
          <p className="mb-3">
            {t("our goal")}
          </p>
          <p>
            {t("because")}
          </p>
        </section>

        <hr className="my-10 border-[#E8D8B4]/70" />

        
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            🌱 {t("what")}
          </h2>
          <ul className="list-disc ml-8 space-y-2">
            <li>{t("interactive")}</li>
            <li>{t("accurate")}</li>
            <li>{t("minimalist")}</li>
            <li>{t("built")}</li>
            <li>
              {t("a bridge")}
            </li>
          </ul>
        </section>

        <hr className="my-10 border-[#E8D8B4]/70" />

        
        <section>
          <h2 className="text-2xl font-semibold mb-4">🤝 {t("our vision")}</h2>
          <p className="mb-3">
            {t("we dream")}
          </p>
          <p className="mb-3">
            {t("every")}
          </p>
          <p className="mb-3">
            {t("our hope")}
          </p>
          <p>
            {t("plant")}🌏
          </p>
        </section>

        <hr className="my-10 border-[#E8D8B4]/70" />
        <div className="flex gap-10">
        <p className="text-2xl font-semibold mb-4">{t("If you")}👉🏻</p>
        <div className="dark:white dark:text-[28604F]">
           
              <Modal/>
        </div >
        
        </div>

        <hr className="my-10 border-[#E8D8B4]/70" />

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">✨ {t("in short")}</h2>
          <p className="text-lg max-w-2xl mx-auto">
            {t("exists")}
          </p>
          <p className="mt-4 text-xl font-semibold">{t("together")} 🐘🦅🐢</p>
        </section>
      </div>
      
    </div>
  );
};

export default About;
