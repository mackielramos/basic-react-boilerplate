import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from "./components/Main"

import store from "./store"


ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Main} />
		</Router>
	</Provider>,
	document.getElementById('app')
);