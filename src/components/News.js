import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{
const [articles,setArticles] = useState([]);
const [loading,setLoading] = useState(true);
const [page,setPage] = useState(1);
const [totalResults,setTotalResults] = useState(0);


 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
   
  const UpdateNews = async () =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  
useEffect(() => {
  document.title = `${capitalizeFirstLetter(props.category)} - Pegio-News`;
  UpdateNews();
  // eslint-disable-next-line
}, [])



  const fetchMoreData = async () => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }

  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   UpdateNews();
  // }

  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   UpdateNews();
  // }
 return (
      <>
        <h1 className="text-center p-4 " style={{marginTop:"50px"}}>
          Pegio-News - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row mx-5">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
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
         
        </InfiniteScroll>
      </>
    )
  }


  News.defaultProps = {
    country: "in",
    pageSize: 1,
    category: "general",
  };
 News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };


export default News;