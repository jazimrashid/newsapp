import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
 
 
 const updateNews= async()=> {
    props.setProgress(10)
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1297dfa32d38402db28b34faf710ea75&page=${page}&pageSize=${props.pageSize}`;
   setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
   
    props.setProgress(100)
  }
  useEffect(() => {
    updateNews()
  
   
  },[] )
  
 
 const fetchMoreData = async () => {
    setPage(page+1)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1297dfa32d38402db28b34faf710ea75&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    
    
  };
 
 
    return (
      <div className="container my-3">
        <h1 className="text-center">
          <b>
            <em>News App-</em>
          </b>
          Top Headlines
        </h1>
        <h3 className="text-center">Top and hot news throughout country</h3>
        {/* {loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col md-4 my-2" key={element.url}>
                  {" "}
                  <NewsItem
                    title={
                      element
                        ? element.title
                        : "tap on read more to see all title details"
                    }
                    description={
                      element
                        ? element.description
                        : "tap on read more to see all description and title details of this news article"
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      
      </div>
    );
  
}


 News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};
export default News;