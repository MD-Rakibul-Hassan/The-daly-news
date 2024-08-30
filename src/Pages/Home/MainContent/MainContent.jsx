
import React, { useState } from 'react'
import SingleContent from './SingleContent/SingleContent'
import { useFetcher } from 'react-router-dom'
import { useFetchNews } from './../../../Hooks/useFetchNews';

const MainContent = () => {
  const [news, setNews] = useFetchNews();
  console.log(news)
  return (
    <div>
      {news.map(singleNews => {
        const { author, content, description, source, title, urlToImage,url } =
          singleNews;
        return <SingleContent  title={title} image={urlToImage} url={url} author={author} content={content} description={description} source={source} />
      })}
    </div>
  )
}

export default MainContent