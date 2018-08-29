import "babel-polyfill";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { routes } from "./routes";
import configuerStore from "./store/configureStore";
import { Provider } from "react-redux";

import RouteWithSubRoutes from "./config/RouteWithSubRoutes";

// Stylesheets
require("../style/index.scss");

const store = configuerStore();


const Routes = ({ routes }) => {
	return (
		<div>
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
		</div>
	);
};

const Root = () => (
	<Provider store={store}>
		<Router>
			<Routes routes={routes} />
		</Router>
	</Provider>
);

export default Root;
