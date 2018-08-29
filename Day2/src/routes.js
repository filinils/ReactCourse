import App from "./components/App";
import StartPage from "./components/pages/start/StartPage";
import BookingsPage from "./components/pages/bookings/BookingsPage";

const routes = [
	{
		path: "/",
		component: App,
		routes: [
			{
				title: "Start",
				path: "/start",
				component: StartPage
			},

			{
				title: "Bookings",
				path: "/bookings",
				component: BookingsPage
			}
		]
	}
];
export { routes };
