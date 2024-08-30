import {useEffect,useState} from 'react'


export const useFetchNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("https://saurav.tech/NewsAPI/everything/cnn.json")
          .then((res) => res.json())
          .then((data) => setNews(data.articles));
    }, [])
    return [news,setNews]
}

