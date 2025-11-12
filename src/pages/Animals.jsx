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
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Animals = () => {
   const { t, i18n } = useTranslation();
    const translation=(lang)=>{
      i18n.changeLanguage(lang)
    }
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance.get("/animals").then((res) => {
      setAnimals(res.data);
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
    <div className="bg-[#E3EFEA] min-h-screen text-[#0A2317] px-6 py-12 dark:bg-[#101715]  dark:text-[#A8D29B]">
      <h2 className="text-3xl font-semibold mb-8 text-center">{t("Explore Animals")}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {animals.map((animal, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="w-96 shadow-lg border border-gray-200 rounded-xl overflow-hidden bg-white
            dark:bg-[#18211E] dark:border-none">
              <CardHeader shadow={false} floated={false} className="h-72">
                <img
                  src={animal.img}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography color="blue-gray" className="font-medium text-lg mb-2 dark:text-[#A8D29B]">
                  {animal.name}
                </Typography>
                <div className="mb-3 flex gap-2">
                  <Button ripple={false} className="bg-[#E8D8B4] text-[#0A2317] rounded-full px-4 py-1 text-sm
                   dark:text-[#A8D29B] dark:bg-[#3B6145] ">
                    {animal.place}
                  </Button>
                  <Button ripple={false} className="bg-[#CFE3C9] text-[#0A2317] rounded-full px-4 py-1 text-sm *
                   dark:text-[#A8D29B] dark:bg-[#3B6145] ">
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
              <CardFooter className="pt-0"></CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Animals;