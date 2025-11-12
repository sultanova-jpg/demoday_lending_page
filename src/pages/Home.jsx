import { Link } from "react-router-dom";
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
    const translation=(lang)=>{
      i18n.changeLanguage(lang)
    }
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

  if (isLoading)
    return (
      <div className="text-center pt-[250px]">
        <ScaleLoader height={100} width={8} color="#CFE3C9" />
      </div>
    );

  return (
    
    <div className="bg-[#E3EFEA] min-h-screen text-[#0A2317] dark:bg-[#101715]">
      <section className="relative bg-cover bg-center h-[600px] flex flex-col justify-center px-10 text-left 
      bg-[#5f8576] min-h-screen dark:bg-[#264d3d] ">
        <div className="flex xl:flex-row 2xl:flex-row lg:flex-col items-center  md:flex-col sm:flex-col">
        <div className="z-10 relative max-w-xl lg:ml-28 md:text-center lg:mr-32 sm:text-center">
          <h1 className="2xl:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-md dark:text-[#A8D29B] 
          lg:mt-20 sm:mt-20 md:text-4xl sm:text-4xl ">
            {t("explore")}
          </h1>
          <p className="text-white mb-6 text-lg opacity-90 sm:text-sm dark:text-[#A8D29B]">
            {t("discover")}
          </p>
          <Link to={"/animals"}>
            <Button className="bg-[#28604F] text-white text-lg px-8 py-3 rounded-full 
            shadow-md hover:bg-[#ffff] hover:text-[#28604F] transition-all duration-300 dark:bg-[#A8D29B]
             dark:text-[#3B6145]
             dark:hover:bg-[#3B6145] dark:hover:text-[#A8D29B] sm:w-44 sm:text-xs 2xl:w-72 2xl:text-xl">
              {t("explore animals")}
            </Button>
          </Link>
        </div>
        <img src="./public/turtule.png" className="w-[810px] h-[710px] xl:w-[750px] xl:h-[700px] lg:w-[480px] lg:h-[380px]
        md:w-[480px] md:h-[400px] sm:w-[480px] sm:h-[400px]" alt="" />
        </div>
      </section>

      <section className="py-12 px-6">
        <h5 className="text-2xl font-semibold mb-6 dark:text-[#A8D29B]">{t("categories")}</h5>
        <ul className="flex justify-center gap-10">
          {[
            {
              img: "./public/icon_1_150x150.png",
              bg: "#DCC9A1",
              label: "Africa",
            },
            {
              img: "./public/icon_2_150x150.png",
              bg: "#A3C6C4",
              label: "Classes",
            },
            {
              img: "./public/icon_3_150x150.png",
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
                className="flex items-center justify-center rounded-full w-28 h-28 mx-auto shadow-md
                 dark:text-[#5B7F69]"
                style={{ backgroundColor: item.bg }}
              >
                <img src={item.img} alt={item.label} className="w-16 h-16 dark:text-[#5B7F69]" />
              </li>
              <p className="mt-2 text-lg font-medium dark:text-[#A8D29B]">{item.label}</p>
            </motion.div>
          ))}
        </ul>
      </section>

      <section className="px-6 py-12">
        <h5 className="text-2xl font-semibold mb-6 dark:text-[#A8D29B]">{t("animal")}</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-lg border border-gray-200 rounded-xl overflow-hidden
               bg-white dark:bg-[#18211E] dark:border-none">
                <CardHeader shadow={false} floated={false} className="h-72">
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
                  <div className="mb-3 flex gap-2">
                    <Button
                      ripple={false}
                      className="bg-[#E8D8B4] text-[#0A2317] 
                    rounded-full px-4 py-1 text-sm dark:text-[#A8D29B] dark:bg-[#3B6145] "
                    >
                      {animal.place}
                    </Button>
                    <Button
                      ripple={false}
                      className="bg-[#CFE3C9] text-[#0A2317] rounded-full px-4 py-1 text-sm dark:bg-[#3B6145] dark:text-[#A8D29B]"
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
          <div className="mt-16 text-center">
            <button className="bg-[#28604F] text-white text-lg px-10 py-3 rounded-full shadow-md
             hover:bg-[#1f4a3d] transition-all duration-300 dark:bg-[#A8D29B] dark:text-[#3B6145]
             dark:hover:text-[#A8D29B] dark:hover:bg-[#3B6145]">
              {t("see all")}
            </button>
          </div>
        </Link>
      </section>

      <section className="my-20">
        <CarouselWithContent />
      </section>

      <section className="px-6 py-12">
        <h5 className="text-2xl font-semibold mb-6">{t("countries")}</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-lg border border-gray-200 rounded-xl overflow-hidden 
              bg-white dark:bg-[#18211E] dark:border-none">
                <CardHeader shadow={false} floated={false} className="h-72">
                  <img
                    src={country.image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-lg mb-2  dark:text-[#A8D29B]"
                  >
                    {country.name}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-md mb-2  dark:text-[#A8D29B]"
                  >
                    {country.capital}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="opacity-75 text-sm leading-relaxed  dark:text-[#A8D29B]"
                  >
                    {country.desc}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <Link to={"/feed"}>
          <div className="mt-16 text-center">
            <button className="bg-[#28604F] text-white text-lg px-10 py-3 rounded-full 
            shadow-md hover:bg-[#1f4a3d] transition-all duration-300 dark:bg-[#A8D29B] dark:text-[#3B6145]
             dark:hover:text-[#A8D29B] dark:hover:bg-[#3B6145]">  
                {t("See All")}
            </button>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;