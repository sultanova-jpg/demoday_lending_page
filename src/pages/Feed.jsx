import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import instance from "../axios";
import { ScaleLoader } from "react-spinners";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Feed = () => {
   const { t, i18n } = useTranslation();
    const translation=(lang)=>{
      i18n.changeLanguage(lang)
    }
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance.get("/countries").then((res) => {
      setCountries(res.data);
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
    <div className="bg-[#E3EFEA] min-h-screen text-[#0A2317] px-6 py-12  dark:text-[#A8D29B] dark:bg-[#101715] ">
      <h2 className="text-3xl font-semibold mb-8 text-center">{t("countries regions")}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {countries.map((country, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="w-96 shadow-lg border border-gray-200 rounded-xl overflow-hidden bg-white *
            dark:bg-[#18211E] dark:border-none">
              <CardHeader shadow={false} floated={false} className="h-72">
                <img
                  src={country.image}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography color="blue-gray" className="font-medium text-lg mb-2 dark:text-[#A8D29B]">
                  {country.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium text-md mb-2 dark:text-[#A8D29B]">
                  {country.capital}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="opacity-75 text-sm leading-relaxed dark:text-[#A8D29B]"
                >
                  {country.desc}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0"></CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feed;