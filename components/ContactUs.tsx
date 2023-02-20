import useTranslation from "next-translate/useTranslation";
import { AtSymbolIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
  const { t, lang } = useTranslation("common");
  const contactHeader = t("contactHeader");

  return (
    <div className=" z-30 md:mt-20 align-baseline flex flex-col text-2xl rounded-xl text-white text-left bottom-0 w-full h-96 bg-cc">
      <h3
        className={`text-5xl m-12 ml-24 ${
          lang === "ar" ? "rtl items-start mr-20" : "ml-20"
        } flex-col flex`}
      >
        {contactHeader}
      </h3>

      <p
        className={`text-2xl  ${
          lang === "ar" ? "rtl items-start mr-20" : "ml-20"
        } flex-row flex`}
      >
        <AtSymbolIcon
          className={`text-xl  ${
            lang === "ar" ? "rtl ml-2" : "mr-2"
          } w-10 h-10`}
        />
        kfupm_cc@gmail.com
      </p>
      <p
        className={`text-2xl mt-5 ${
          lang === "ar" ? "rtl items-start mr-20" : "ml-20"
        } flex-row flex`}
      >
        <img src="/Twitter.png"
          className={`text-xl  ${
            lang === "ar" ? "rtl ml-2" : "mr-2"
          } w-10 h-10`}
        />
        kfupm_cc@
      </p>
      <p
        className={`text-2xl mt-5 ${
          lang === "ar" ? "rtl items-start mr-20" : "ml-20"
        } flex-row flex`}
      >
        <img src="/LinkedIn.png"
          className={`text-xl  ${
            lang === "ar" ? "rtl ml-2" : "mr-2"
          } w-10 h-10`}
        />
        kfupm_cc@
      </p>
    </div>
  );
};

export default ContactUs;
