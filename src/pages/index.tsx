import Head from "next/head";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import ContactUs from "@p2p/components/ContactUs";

const Home = () => {
  const [selected, setSelected] = useState("rate");
  const { t, lang } = useTranslation("home");

  const gradientDirection = t("gradientDirection");
  const aboutUs = t("aboutUs");
  const header = t("header");
  const coursesLabel = t("coursesLabel");
  const archiveLabelSelection = t("archiveLabelSelection");
  const rateLabelSelection = t("rateLabelSelection");
  const explainLabelSelection = t("explainLabelSelection");
  const rateText = t("rateText");
  const rateFormLabel = t("rateFormLabel");
  const archiveText = t("archiveText");
  const archiveFormLabel = t("archiveFormLabel");
  const explainText = t("explainText");
  const explainFormLabel = t("explainFormLabel");
  const contactHeader = t("contactHeader");

  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className={`w-full md:flex relative hidden ${
          lang === "ar" ? "bg-gradient-to-r" : "bg-gradient-to-l"
        } from-gray-400 via-blue-800 to-blue-900 h-auto`}
      >
        <img
          src="/home-banner.png"
          className="w-full mix-blend-overlay relative bg-blue-900 h-auto z-20"
        />

        <div
          className={`absolute top-1/4 ${
            lang === "ar" ? "rtl right-0 mr-10" : "ml-10"
          } w-1/2 font-extrabold text-[#F5F5F5] text-xl`}
        >
          <h3 className="text-5xl mb-10">{header}</h3>
          <p className="w-3/4">{aboutUs}</p>
        </div>
      </div>
      <div className="absolute z-30 md:top-1/2 align-baseline flex justify-center top-1/4 mb-16">
        <img
          src="/courses.png"
          className="w-3/4 md:w-full border-[8px] rounded-3xl inset-7 box-border border-cc"
        />
        <div
          className={`absolute w-1/2 h-16 bg-cc ${
            lang === "ar" ? "rtl" : ""
          } cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 text-white bottom-[-30px] text-4xl rounded-full text-center flex justify-center items-center`}
        >
          <p>{coursesLabel}</p>
        </div>
      </div>
      <div className="relative z-30 md:mt-96 align-baseline flex flex-row justify-evenly text-2xl rounded-xl mb-16 text-white items-center text-center bottom-0 bg-[#1E1E1E] h-16 w-1/3">
        <p
          className={`${
            selected === "archive" ? "bg-cc" : "hover:bg-cc"
          } w-full h-full text-center flex justify-center items-center rounded-l-xl rounded-r-md cursor-pointer`}
          onClick={() => {
            setSelected("archive");
          }}
        >
          {archiveLabelSelection}
        </p>
        <p
          className={`${
            selected === "rate" ? "bg-cc" : "hover:bg-cc"
          } w-full h-full text-center flex justify-center items-center rounded-md cursor-pointer`}
          onClick={() => {
            setSelected("rate");
          }}
        >
          {rateLabelSelection}
        </p>
        <p
          className={`${
            selected === "explain" ? "bg-cc" : "hover:bg-cc"
          } w-full h-full text-center flex justify-center items-center rounded-r-xl rounded-l-md cursor-pointer`}
          onClick={() => {
            setSelected("explain");
          }}
        >
          {explainLabelSelection}
        </p>
      </div>
      <div className="relative z-30 md:mt-10 align-baseline flex flex-row justify-evenly text-2xl rounded-xl mb-10 text-white items-center text-center bottom-0 w-full">
        {selected === "rate" && lang === "en" && (
          <div className=" w-1/2 h-1/4 text-left flec flex-col justify-between items-center rounded-r-xl ml-5 ">
            <p className="">{rateText}</p>
            <div className="absolute w-96 h-16 bg-cc cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 text-white mt-5 text-4xl rounded-lg text-center flex justify-center items-center">
              <p>{rateFormLabel}</p>
            </div>
          </div>
        )}
        {selected === "rate" && lang === "en" && (
          <img src="/review.png" className="w-3/4 md:w-1/4 mr-16 ml-16" />
        )}
        {selected === "rate" && lang === "ar" && (
          <img src="/review.png" className="w-3/4 md:w-1/4 mr-16 ml-16" />
        )}
        {selected === "rate" && lang === "ar" && (
          <div className=" w-1/2 h-1/4 text-right rtl flec flex-col justify-between items-center rounded-r-xl ml-5 ">
            <p className="">{rateText}</p>
            <div className="absolute w-96 h-16 bg-cc transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 text-white mt-5 text-4xl rounded-lg text-center flex justify-center items-center cursor-pointer">
              <p>{rateFormLabel}</p>
            </div>
          </div>
        )}

        {selected === "archive" && lang === "en" && (
          <div className=" w-1/2 h-1/4 text-left flec flex-col justify-between items-center rounded-r-xl ml-5 ">
            <p className="">{archiveText}</p>
            <div className="absolute w-96 h-16 bg-cc cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 text-white mt-5 text-4xl rounded-lg text-center flex justify-center items-center">
              <p>{archiveFormLabel}</p>
            </div>
          </div>
        )}
        {selected === "archive" && lang === "en" && (
          <img src="/archive.png" className="w-3/4 md:w-1/4 mr-16 ml-16" />
        )}
        {selected === "archive" && lang === "ar" && (
          <img src="/archive.png" className="w-3/4 md:w-1/4 mr-16 ml-16" />
        )}
        {selected === "archive" && lang === "ar" && (
          <div className=" w-1/2 h-1/4 text-right rtl flec flex-col justify-between items-center rounded-r-xl ml-5 ">
            <p className="">{archiveText}</p>
            <div className="absolute w-96 h-16 bg-cc transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 text-white mt-5 text-4xl rounded-lg text-center flex justify-center items-center cursor-pointer">
              <p>{archiveFormLabel}</p>
            </div>
          </div>
        )}

        {selected === "explain" && lang === "en" && (
          <div className=" w-1/2 h-1/4 text-left flec flex-col justify-between items-center rounded-r-xl ml-5 ">
            <p className="">{explainText}</p>
            <div className="absolute w-96 h-16 bg-cc cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 text-white mt-5 text-4xl rounded-lg text-center flex justify-center items-center">
              <p>{archiveFormLabel}</p>
            </div>
          </div>
        )}
        {selected === "explain" && lang === "en" && (
          <img src="/explain.png" className="w-3/4 md:w-1/4 mr-16 ml-16" />
        )}
        {selected === "explain" && lang === "ar" && (
          <img src="/explain.png" className="w-3/4 md:w-1/4 mr-16 ml-16" />
        )}
        {selected === "explain" && lang === "ar" && (
          <div className=" w-1/2 h-1/4 text-right rtl flec flex-col justify-between items-center rounded-r-xl ml-5 ">
            <p className="">{explainText}</p>
            <div className="absolute w-96 h-16 bg-cc transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 text-white mt-5 text-4xl rounded-lg text-center flex justify-center items-center cursor-pointer">
              <p>{explainFormLabel}</p>
            </div>
          </div>
        )}
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
