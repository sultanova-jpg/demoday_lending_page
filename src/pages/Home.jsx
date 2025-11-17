import { Link } from "react-router-dom";
import icon1 from "./../../public/icon1.png";
import icon2 from "./../../public/icon2.png";
import icon3 from "./../../public/icon3.png";
import turtule from "./../../public/turtule.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import instance from "../axios";
import { ScaleLoader } from "react-spinners";
import { CarouselWithContent } from "../components/Carousel";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const translation = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    instance.get("/animals").then((res) => {
      const firstSix = res.data.slice(0, 3);
      setAnimals(firstSix);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    instance.get("/countries").then((res) => {
      const firstSix = res.data.slice(0, 3);
      setCountries(firstSix);
      setIsLoading(false);
    });
  }, []);

  // ✅ Спиннер по центру (и по ширине, и по высоте) на любом экране, вплоть до 100px
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-[#E3EFEA] dark:bg-[#101715]">
        <ScaleLoader height={100} width={8} color="#CFE3C9" />
      </div>
    );

  return (
    <div className="bg-[#E3EFEA] mt-4 min-h-screen text-[#0A2317] dark:bg-[#101715]">
      {/* HERO */}
      <section
        className="
          relative bg-cover bg-center
          flex flex-col justify-center
          px-4 sm:px-6 lg:px-10
          text-left
          bg-[#5f8576] dark:bg-[#264d3d]
          pt-24 pb-16
        "
      >
        <div className="flex flex-col lg:flex-col xl:flex-row 2xl:flex-row items-center gap-8 lg:gap-12">
          <div className="z-10 relative max-w-xl lg:ml-10 xl:ml-24 lg:text-left text-center">
            <h1
              className="
                text-3xl sm:text-4xl 2xl:text-5xl
                font-bold leading-tight mb-4
                text-white drop-shadow-md dark:text-[#A8D29B]
                lg:mt-10
              "
            >
              {t("explore")}
            </h1>
            <p className="text-white mb-6 text-sm sm:text-base lg:text-lg opacity-90 dark:text-[#A8D29B]">
              {t("discover")}
            </p>
            <Link to={"/animal"}>
              <Button
                className="
                  bg-[#28604F] text-white
                  text-sm sm:text-base lg:text-lg
                  px-6 sm:px-8 lg:px-10
                  py-2.5 lg:py-3
                  rounded-full shadow-md
                  hover:bg-[#ffff] hover:text-[#28604F]
                  transition-all duration-300
                  dark:bg-[#A8D29B] dark:text-[#3B6145]
                  dark:hover:bg-[#3B6145] dark:hover:text-[#A8D29B]
                  w-full xs:w-48 sm:w-52 lg:w-auto
                "
              >
                {t("explore animals")}
              </Button>
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src={turtule}
              alt="turtle"
              className="
                w-[85%] max-w-[420px]
                sm:max-w-[480px]
                md:max-w-[520px]
                lg:max-w-[560px]
                xl:max-w-[650px]
                2xl:max-w-[750px]
                h-auto
              "
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-10">
        <h5 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-[#A8D29B]">
          {t("categories")}
        </h5>
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            {
              img: icon1,
              bg: "#DCC9A1",
              label: "Africa",
            },
            {
              img: icon2,
              bg: "#A3C6C4",
              label: "Classes",
            },
            {
              img: icon3,
              bg: "#8BA888",
              label: "Sizes",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <li
                className="
                  flex items-center justify-center
                  rounded-full
                  w-24 h-24 sm:w-28 sm:h-28
                  mx-auto shadow-md
                  dark:text-[#5B7F69]
                "
                style={{ backgroundColor: item.bg }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              </li>
              <p className="mt-2 text-base sm:text-lg font-medium dark:text-[#A8D29B]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </ul>
      </section>

      {/* ANIMALS PREVIEW */}
      <section className="px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <h5 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-[#A8D29B]">
          {t("animal")}
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {animals.map((animal, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-lg border border-gray-200 rounded-xl overflow-hidden bg-white dark:bg-[#18211E] dark:border-none">
                <CardHeader shadow={false} floated={false} className="h-60 sm:h-72">
                  <img
                    src={animal.img}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-lg mb-2 dark:text-[#A8D29B]"
                  >
                    {animal.name}
                  </Typography>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Button
                      ripple={false}
                      className="bg-[#E8D8B4] text-[#0A2317] 
                        rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm 
                        dark:text-[#A8D29B] dark:bg-[#3B6145]"
                    >
                      {animal.place}
                    </Button>
                    <Button
                      ripple={false}
                      className="bg-[#CFE3C9] text-[#0A2317] 
                        rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm 
                        dark:bg-[#3B6145] dark:text-[#A8D29B]"
                    >
                      {animal.classes}
                    </Button>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="opacity-75 text-sm leading-relaxed dark:text-[#A8D29B]"
                  >
                    {animal.desc}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <Link to={"/animal"}>
          <div className="mt-12 sm:mt-16 text-center">
            <button
              className="
                bg-[#28604F] text-white
                text-sm sm:text-lg
                px-8 sm:px-10
                py-2.5 sm:py-3
                rounded-full shadow-md
                hover:bg-[#1f4a3d] transition-all duration-300
                dark:bg-[#A8D29B] dark:text-[#3B6145]
                dark:hover:text-[#A8D29B] dark:hover:bg-[#3B6145]
              "
            >
              {t("see all")}
            </button>
          </div>
        </Link>
      </section>

      {/* CAROUSEL */}
      <section className="my-16 sm:my-20 px-2 sm:px-4">
        <CarouselWithContent />
      </section>

      {/* COUNTRIES PREVIEW */}
      <section className="px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <h5 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-[#A8D29B]">
          {t("countries")}
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-lg border border-gray-200 rounded-xl overflow-hidden bg-white dark:bg-[#18211E] dark:border-none">
                <CardHeader shadow={false} floated={false} className="h-60 sm:h-72">
                  <img
                    src={country.img}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-lg mb-2 dark:text-[#A8D29B]"
                  >
                    {country.name}
                  </Typography>

                  <div className="mb-3 flex flex-wrap gap-2">
                  { (
                    <Button
                      ripple={false}
                      className="
                        bg-[#E8D8B4] text-[#0A2317]
                        rounded-full px-3 py-1 text-xs sm:text-sm
                        dark:text-[#A8D29B] dark:bg-[#3B6145]
                      "
                    >
                      {country.place}
                    </Button>
                  )}

                  {country.classes && (
                    <Button
                      ripple={false}
                      className="
                        bg-[#CFE3C9] text-[#0A2317]
                        rounded-full px-3 py-1 text-xs sm:text-sm
                        dark:text-[#A8D29B] dark:bg-[#3B6145]
                      "
                    >
                      {country.classes}
                    </Button>
                  )}
                </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="opacity-75 text-sm leading-relaxed dark:text-[#A8D29B]"
                  >
                    {country.desc}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <Link to={"/feed"}>
          <div className="mt-12 sm:mt-16 text-center">
            <button
              className="
                bg-[#28604F] text-white
                text-sm sm:text-lg
                px-8 sm:px-10
                py-2.5 sm:py-3
                rounded-full shadow-md
                hover:bg-[#1f4a3d] transition-all duration-300
                dark:bg-[#A8D29B] dark:text-[#3B6145]
                dark:hover:text-[#A8D29B] dark:hover:bg-[#3B6145]
              "
            >
              {t("See All")}
            </button>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
