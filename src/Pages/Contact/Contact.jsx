import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Page_Header from '../../Components/Page_Header/Page_Header';
import newsImage from '../../assets/images/news.jpeg';
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
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
        <h1 className="z-50 text-4xl font-bold  coustom_text">Contact Us</h1>
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
          <form className="flex flex-col flex-1">
            <input
              className="my-2 w-full h-14 px-4 rounded-md text-black"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="w-full h-[200px] p-4 resize-none text-black rounded-md"
              name="message"
              placeholder="Message"
            ></textarea>
            <button className="my-3 bg-lime-500 p-4 rounded-md hover:shadow-sm">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact