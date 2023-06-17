import React, { Component } from "react";

export class NewsItem extends Component {
	
	
	render() {
        let {title,description,imageUrl,newsUrl}=this.props;
		return ( 
			<div className="my-3">
				<div className='card'>
					<img src={imageUrl?imageUrl:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"} className='card-img-top' alt='...' />
					<div className='card-body'>
						<h5 className='card-title'>{title}...</h5>
						<p className='card-text'>
							{description}...
						</p>
						<a href={newsUrl} target="_ " className='btn btm-sm btn-outline-dark'>
							Read more...
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
