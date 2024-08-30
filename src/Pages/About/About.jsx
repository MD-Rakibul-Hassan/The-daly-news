import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Page_Header from "../../Components/Page_Header/Page_Header";
import newsImage from "../../assets/images/news.jpeg";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const About = () => {
  return (
    <div className="">
      <Page_Header />
      <Navbar />
      <div className="w-full h-[400px] relative flex justify-center items-center mt-10 ">
        <img
          src={newsImage}
          className="w-full h-[400px] object-cover absolute"
          alt="News Image"
        />
        <div className="bg-black/50 w-full absolute  h-[100%]"></div>
        <h1 className="z-50 text-4xl font-bold coustom_text">About Us</h1>
      </div>
      <div className="flex mt-10 flex-col lg:flex-row px-0 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2  w-[100%] lg:w-[50%]">
          <div className="p-4">
            <MdOutlinePhone className="text-3xl my-3 " />
            <h1 className="font-bold text-xl my-2">Phone :</h1>
            <p>01703890915</p>
          </div>

          <div className="p-4">
            <MdOutlineEmail className="text-3xl my-3 " />
            <h1 className="font-bold text-xl my-2">Email :</h1>
            <p>mdrakibulhassan2425@gmail</p>
          </div>

          <div className="p-4">
            <IoLocationOutline className="text-3xl my-3 " />
            <h1 className="font-bold text-xl my-2">Location</h1>
            <p>Satkhira,Khulna</p>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%]">
          <h1 className="font-coustom_font my-3 font-bold text-xl">About Us</h1>
          <h4 className="my-3 font-coustom_font font-medium text-lg">
             Welcome to The Daly News, your go-to source
            for the latest news and in-depth analysis on topics that matter.
            Founded in 2024, our mission is to provide accurate, unbiased, and
            timely news coverage to keep you informed and empowered. At The Daly News, we believe in the power of journalism to inform,
            educate, and inspire. Our dedicated team of experienced journalists,
            editors, and analysts work around the clock to bring you stories
            that are well-researched, thoroughly vetted, and presented with
            integrity. We cover a wide range of topics, including politics,
            business, technology, sports, entertainment, and more. Whether it's
            breaking news or a detailed feature, our goal is to present
            information in a clear, concise, and engaging manner, ensuring that
            you stay ahead of the curve. We are committed to maintaining high
            journalistic standards and ensuring transparency in all our
            reporting. We strive to be a trusted source of information,
            providing a platform where diverse voices and perspectives can be
            heard. Thank you for choosing The Daly News as your trusted
            news source. We are here to serve you with the best content, so if
            you have any feedback or suggestions, please don't hesitate to reach
            out.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
