import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
function AppRoutes({ setProgress , apiKey}) {
	const location = useLocation();

	return (
		<Routes key={location.pathname}>
			<Route
				exact
				path='/'
				element={
					<News
						setProgress={setProgress} 
						apiKey ={apiKey}
						key='general'
						pagesize={4}
						country='in'
						category='general'
					/>
				}
			/>
			<Route
				exact
				path='general'
				element={
					<News
						setProgress={setProgress} 
						apiKey ={apiKey}
						key='general'
						pagesize={4}
						country='in'
						category='general'
					/>
				}
			/>
			<Route
				exact
				path='/business'
				element={
					<News
						setProgress={setProgress} 
						apiKey ={apiKey}
						key='business'
						pagesize={4}
						country='in'
						category='business'
					/>
				}
			/>
			<Route
				exact
				path='/entertainment'
				element={
					<News
						setProgress={setProgress} 
						apiKey ={apiKey}
						key='entertainment'
						pagesize={4}
						country='in'
						category='entertainment'
					/>
				}
			/>
			<Route
				exact
				path='/health'
				element={
					<News
						setProgress={setProgress} 
						apiKey ={apiKey}
						key='health'
						pagesize={4}
						country='in'
						category='health'
					/>
				}
			/>
			<Route
				exact
				path='/science'
				element={
					<News
						setProgress={setProgress} 
						apiKey ={apiKey}
						key='science'
						pagesize={4}
						country='in'
						category='science'
					/>
				}
			/>
			<Route
				exact
				path='/sports'
				element={
					<News
						setProgress={setProgress} 
						apiKey ={apiKey}
						key='sports'
						pagesize={4}
						country='in'
						category='sports'
					/>
				}
			/>
			<Route
				exact
				path='/technology'
				element={
					<News
						setProgress={setProgress} 
						apiKey ={apiKey}
						key='technology'
						pagesiz
						country='in'
						category='technology'
					/>
				}
			/>
		</Routes>
	);
}

export default class App extends Component {
	state = {
		progress: 0,
		apiKey: process.env.REACT_APP_NEWS_API
	}
	setProgress=(progress) =>{
		this.setState({ progress: progress });
	}
	render() {
		return (
			<>
				<Router>
					<Navbar />
					<LoadingBar
						color='#f11946'
						height={2}
						progress={this.state.progress}
						// onLoaderFinished={() => setProgress(0)}
					/>
					<AppRoutes setProgress={this.setProgress} />
				</Router>
			</>
		);
	}
}
