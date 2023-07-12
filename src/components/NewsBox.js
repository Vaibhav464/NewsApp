import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsBox = (props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} News - NewsApp`

  const capitalizeFirstLetter = (first) => {
    return first.charAt(0).toUpperCase() + first.slice(1);
  }

  const updateNews = async() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(60);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews(); 
    // eslint-disable-next-line
  }, [])
  
  // const handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews();
  // }

  // const handleNextClick = async () => {
  //   setPage(page+1)
  //   updateNews();
  // }
  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: '90px 0px 20px' }}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} 
                description={element.description ? element.description.slice(0, 80) : ""} 
                imageUrl={element.urlToImage} 
                newsUrl={element.url} 
                date={element.publishedAt} 
                author={element.author} 
                source={element.source.name} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
        </>
        // {/* <div className="container d-flex justify-content-between">
        //   <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous </button>
        //   <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}> Next &rarr; </button>
        // </div> */}
    )
}

NewsBox.defaultProps = {
  country: 'in',
  pageSize: 6,
  categoroy: 'general'
}

NewsBox.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default NewsBox