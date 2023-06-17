import React from "react";

const NewsItem = (props) => {
	let { title, description, imageUrl, newsUrl, author, date, source } =
		props;
	return (
		<div className='my-3'>
			<div className='card'>
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						position: "absolute",
						right: "0",
					}}>
					<span className='badge rounded-pill bg-success'>{source}</span>
				</div>

				<img
					src={
						imageUrl
							? imageUrl
							: "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
					}
					className='card-img-top'
					alt='...'
				/>
				<div className='card-body'>
					<h5 className='card-title'>{title}...</h5>
					<span className='badge text-bg-secondary'>New</span>
					<p className='card-text'>{description}...</p>
					<p className='card-text'>
						<small className='text-muted'>
							By {!author ? "Unknown" : author} on &nbsp;{" "}
							{new Date(date).toGMTString()}
						</small>
					</p>
					<a href={newsUrl} target='_ ' className='btn btm-sm btn-outline-dark'>
						Read more...
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
