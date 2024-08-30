
import { Link } from 'react-router-dom';
import { useFetchNews } from './../../../../Hooks/useFetchNews';
import './filter.css'

const Filter = () => {
  const [news, setNews] = useFetchNews();
  return (
    <div className='scrollable-link m-[10px] flex flex-col gap-5 w-[90%] h-screen overflow-scroll    '>
      {
        news.map((singleNews, index) => {
         return  <Link key={index} to={singleNews.url}>
            <img src={singleNews.urlToImage} alt="" />
          </Link>;
        })
      }
    </div>
  )
}

export default Filter