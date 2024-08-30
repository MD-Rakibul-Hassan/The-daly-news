
import React from 'react'

const SingleContent = ({
  title,
  url,
  author,
  image,
  content,
  description,
  source,
}) => {
  return (
    <div className=" p-4 lg:p-10  border-2 m-[10px]">
      <div className="single-news-container">
        <img src={image} className="w-full " />
      </div>
      <h1 className='font-bold font-coustom_font text-2xl my-3 '>{title}</h1>
      <p className='font-coustom_font text-xl my-3'>{description}</p>
      <a className='text-blue-500 underline cursor-pointer' href={url}>More</a>
    </div>
  );
};

export default SingleContent