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

const Feed = () => {
  const { t } = useTranslation();

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance.get("/countries").then((res) => {
      setCountries(res.data);
      setIsLoading(false);
    });
  }, []);

  // ✅ спиннер по центру всегда
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <ScaleLoader height={100} width={8} color="#CFE3C9" />
      </div>
    );

  return (
    <div
      className="
      bg-[#E3EFEA] dark:bg-[#101715]
      text-[#0A2317] dark:text-[#A8D29B]
      min-h-screen
      px-4 sm:px-6 md:px-8
      py-10
    "
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        {t("countries regions")}
      </h2>

      {/* ✅ та же сетка, что и у Animals */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6 sm:gap-8
        justify-items-center
      "
      >
        {countries.map((country, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card
              className="
              w-[90%]
              xs:w-80
              sm:w-80
              md:w-88
              lg:w-96
              shadow-lg border border-gray-200 rounded-xl overflow-hidden
              bg-white dark:bg-[#18211E] dark:border-none
            "
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="h-64 sm:h-72"
              >
                <img
                  src={country.img}
                  alt={country.name}
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

                {/* такие же “тэги”, как у Animals */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {country.place && (
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

              <CardFooter className="pt-0" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
