import React, { useRef } from "react";
import emailjs, { sendForm } from "@emailjs/browser"
import {
  Button,
  Dialog,
  Card,
  CardHeader,
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
      const translation=(lang)=>{
        i18n.changeLanguage(lang)
      }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  let ref = useRef();
  function send(e) {
    e.preventDefault();
    console.log(ref);
    emailjs.sendForm("service_d3qi2in", "template_r9h1jab", ref.current,{
      publicKey: "grsIGwFknn7B2NKeR",
    }).then(
      () => {
       toast.success("SUCCESS!");
      },
      (error) => {
        toast.error("FAILED...", error);
      }
    );
  }
  return (
    <>
      <Button
        className="dark:text-[#101715] dark:bg-[#A8D29B] "
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
        <Card className="mx-auto w-full max-w-[24rem]  dark:bg-[#101715]  dark:text-[#A8D29B] ">
          <form onSubmit={send} ref={ref}>
            <CardBody className="flex flex-col gap-4 ">
              <Typography
                className="mb-3 font-normal  dark:text-[#A8D29B]"
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
                className="dark:text-[#A8D29B]"
                name="user_name"
                placeholder={t("Enter")}
              />
              <Typography className="-mb-2" variant="h6">
                {t("Your Email")}
              </Typography>
              <Input
                type="email"
                className="dark:text-[#A8D29B]"
                name="user_email"
                placeholder={t("tour")}
              />
              <Typography className="-mb-2" variant="h6">
                {t("Your Message")}
              </Typography>
              <Textarea name="message" className="dark:text-[#A8D29B]" placeholder={t("your message")}></Textarea>
            </CardBody>
            <CardFooter onClick={handleOpen} className="pt-0 ">
              <Button
                onClick={send}
                
                fullWidth
                className=" dark:text-[#101715] dark:bg-[#A8D29B]
             hover:dark:bg-[#263a34] hover:dark:text-[#A8D29B]"
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
