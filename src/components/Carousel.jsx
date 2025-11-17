import { Carousel, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import fox from "../../public/fox-imgmmm.jpg";

export function CarouselWithContent() {
  const { t, i18n } = useTranslation();

  return (
    <Carousel
      className="rounded-xl mt-20 mb-20 
      max-h-[500px] sm:max-h-[600px] md:max-h-[700px]"
    >
      {/* SLIDE 1 */}
      <div className="relative h-full w-full">
        <img
          src="https://media.istockphoto.com/id/2166572265/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%B2%D0%BE%D0%BA%D0%BA%D0%B8-%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%BB%D0%B5.jpg?s=612x612&w=0&k=20&c=K3YJflZfmZ_ie5IdObEaOdFxurKA34RSnIGsGvq6gyE="
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70 p-4">
          <div className="w-[90%] sm:w-[70%] md:w-[50%] text-center">
            <Typography
              variant="h1"
              color="white"
              className="
                mb-3 
                text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl 
                font-bold dark:text-[#A8D29B]"
            >
              {t("quokka")}
            </Typography>

            <Typography
              variant="lead"
              color="white"
              className="
                opacity-80 
                text-[10px] xs:text-xs sm:text-sm md:text-lg 
                dark:text-[#A8D29B]"
            >
              {t("the quokka")}
            </Typography>
          </div>
        </div>
      </div>

      {/* SLIDE 2 */}
      <div className="relative h-full w-full">
        <img
          src="https://a-z-animals.com/media/animals/images/original/emperor_tamarin.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 grid h-full w-full items-center bg-black/70 p-4">
          <div className="w-[90%] sm:w-[70%] md:w-[50%] pl-2 sm:pl-10 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="
                mb-3
                text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl 
                font-bold dark:text-[#A8D29B]"
            >
              {t("emperor")}
            </Typography>

            <Typography
              variant="lead"
              color="white"
              className="
                opacity-80
                text-[10px] xs:text-xs sm:text-sm md:text-lg 
                dark:text-[#A8D29B]"
            >
              {t("emperor tamarin")}
            </Typography>
          </div>
        </div>
      </div>

      {/* SLIDE 3 */}
      <div className="relative h-full w-full">
        <img
          src={fox}
          alt="image 3"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 grid h-full w-full items-end bg-black/70 p-4">
          <div className="
            w-[90%] sm:w-[70%] md:w-[50%] 
            pl-2 sm:pl-10 md:pl-20 lg:pl-32 
            pb-6 sm:pb-10 md:pb-20 lg:pb-28">
            
            <Typography
              variant="h1"
              color="white"
              className="
                mb-3 
                text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl 
                font-bold dark:text-[#A8D29B]"
            >
              {t("fennec")}
            </Typography>

            <Typography
              variant="lead"
              color="white"
              className="
                opacity-80
                text-[10px] xs:text-xs sm:text-sm md:text-lg
                dark:text-[#A8D29B]"
            >
              {t("fennec fox")}
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
