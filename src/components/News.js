import React,{useEffect,useState} from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>  {
  const [article, setarticle] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
//document.title = `${toCapitalize(props.category)}-NewsMonkey`;
const toCapitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
  

   const updateNews= async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    console.log(parseData);
    props.setProgress(50);
    setarticle(parseData.articles)
    settotalResults(parseData.totalResults)
    props.setProgress(100);
  } 

useEffect(() => {
    updateNews();
}, [])
 const fetchMoreData = async () => {
    setpage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f83b291fb9964bc89831d50955622373&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
   setarticle(article.concat(parseData.articles))
   settotalResults(parseData.totalResults)
  };


    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "30px" }}style={{marginTop:'90px'}}>
          NewsMonkey-Top {toCapitalize(props.category)} headlines
        </h1>
        <InfiniteScroll
          dataLength={article?.length}
          next={fetchMoreData}
          hasMore={article?.map.length !== totalResults}
        />
        {/*  {loading && <Spinner />} */}
        <div className="row">
          {article?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
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
        <div className="container d-flex justify-content-between"></div>
      </div>
    );
         
        }

export default News;
