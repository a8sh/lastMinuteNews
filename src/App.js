import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Router } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					
						<Navbar />
						<News pageSize={6} country='in' category='science' />
					
				</Router>
			</div>
		);
	}
}
