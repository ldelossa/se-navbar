import React, { Component } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import { BrowserRouter, Route } from 'react-router-dom'

const Home = () => (<h2>Home</h2>)
const PageOne = () => (<h2>PageOne</h2>)

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Route exact path="/" component={Home}/>
					<Route exact path="/home" component={Home}/>
					<Route exact path="/page-one" component={PageOne}/>
					<Route exact path="/login" component={Login}/>
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
