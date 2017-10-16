import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './components/app'
class Routes extends Component {

	render() {

		return (
			<BrowserRouter
				basename = {'/'}
			>
				<App/>
			</BrowserRouter>



		);
	}

}

export default Routes;
