import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Modal = () => {
  const { t, i18n } = useTranslation();
  const translation = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const formRef = useRef();

  function send(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3qi2in",
        "template_r9h1jab",
        formRef.current,
        {
          publicKey: "grsIGwFknn7B2NKeR",
        }
      )
      .then(
        () => {
          toast.success("SUCCESS!");
          formRef.current?.reset();
          setOpen(false); // закрываем модалку только при успехе
        },
        (error) => {
          console.error(error);
          toast.error("FAILED...");
        }
      );
  }

  return (
    <>
      <Button
        className="
          dark:text-[#101715] dark:bg-[#A8D29B]
          hover:dark:bg-[#263a34] hover:dark:text-[#A8D29B]
        "
        onClick={handleOpen}
      >
        {t("send")}
      </Button>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="
          mx-auto w-full max-w-[24rem]
          dark:bg-[#101715] dark:text-[#A8D29B]
        ">
          <form onSubmit={send} ref={formRef}>
            <CardBody className="flex flex-col gap-4">
              <Typography
                className="mb-3 font-normal dark:text-[#A8D29B]"
                variant="paragraph"
                color="gray"
              >
                {t("enter")}
              </Typography>

              <Typography className="-mb-2" variant="h6">
                {t("Your Name")}
              </Typography>
              <Input
                type="text"
                name="user_name"
                placeholder={t("Enter")}
                className="
                  dark:text-[#A8D29B]
                  !border-[1.5px] !border-blue-gray-200/80
                  focus:!border-[#28604F] focus:!border-t-[#28604F]
                  dark:!border-[#3B6145] dark:bg-[#101715]
                "
                labelProps={{ className: "hidden" }}
                containerProps={{ className: "!min-w-full" }}
              />

              <Typography className="-mb-2" variant="h6">
                {t("Your Email")}
              </Typography>
              <Input
                type="email"
                name="user_email"
                placeholder={t("tour")}
                className="
                  dark:text-[#A8D29B]
                  !border-[1.5px] !border-blue-gray-200/80
                  focus:!border-[#28604F] focus:!border-t-[#28604F]
                  dark:!border-[#3B6145] dark:bg-[#101715]
                "
                labelProps={{ className: "hidden" }}
                containerProps={{ className: "!min-w-full" }}
              />

              <Typography className="-mb-2" variant="h6">
                {t("Your Message")}
              </Typography>
              <Textarea
                name="message"
                placeholder={t("your message")}
                className="
                  dark:text-[#A8D29B]
                  !border-[1.5px] !border-blue-gray-200/80
                  !border-t-blue-gray-200/80 bg-white text-gray-700
                  ring-4 ring-transparent
                  focus:!border-[#28604F] focus:!border-t-[#28604F]
                  dark:bg-[#101715]
                  dark:!border-[#3B6145] dark:!border-t-[#3B6145]
                "
                labelProps={{ className: "hidden" }}
              />
            </CardBody>

            <CardFooter className="pt-0">
              <Button
                type="submit"
                fullWidth
                className="
                  dark:text-[#101715] dark:bg-[#A8D29B]
                  hover:dark:bg-[#263a34] hover:dark:text-[#A8D29B]
                "
              >
                {t("send")}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default Modal;
