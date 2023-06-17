import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>  {
	const[articles,setArticles] = useState([])
	const[loading,setLoading] = useState(true)
	const[page,setPage]=useState(1)
	const[totalResults,setTotalResults]=useState(0)
	// document.title = `LastMinuteNews - ${this.capitalizeFirstLetter(
	// 	props.category
	// )} News`;
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const updateNews= async()=> {
		props.setProgress(10);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a447c9e9b0c24c0da463bfa369a28bf0&page=${page}&pagesize=${props.pageSize}`;
		setLoading(true);
		let data = await fetch(url);
		props.setProgress(30);
		let parsedData = await data.json();
		props.setProgress(50);
		console.log(parsedData);
		setArticles(parsedData.articles)
		setTotalResults(parsedData.totalResults)
		setLoading(false)
		props.setProgress(100);
	}
	useEffect(()=>{
		updateNews();
	},[])
	const fetchMoreData = async() => {
		setPage(page+1)
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a447c9e9b0c24c0da463bfa369a28bf0&page=${page+1}&pagesize=${props.pageSize}`;
		// this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		setArticles(articles.concat(parsedData.articles))
		setTotalResults(parsedData.totalResults)
	  };

	
		return (
			<>
				<h2 className='text-center' style={{ margin: "35px 0px",marginTop:"90px" }}>
					LastMinuteNews - Top {capitalizeFirstLetter(props.category)}{" "}
					Headlines
				</h2>
				{loading && <Spinner />}
				<InfiniteScroll
					dataLength={articles.length}
					next={fetchMoreData}
					hasMore={ articles.length !== totalResults}
					loader={<Spinner/>}>
						<div className="container">

						
					<div className='row'>
						{articles?.map((element) => {
							return (
								<div className='col-md-4' key={element.url}>
									<NewsItem
										title={element.title ? element.title.slice(0, 40) : " "}
										description={
											element.description
												? element.description.slice(0, 80)
												: " "
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
				
			</>
		);
	
}
News.defaultProps = {
	country: "in",
	pageSize: 6,
	category: "general",
};
News.propTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
};

export default News;
