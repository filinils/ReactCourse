import App from "./components/App";
import StartPage from "./components/pages/start/StartPage";
import SecondPage from "./components/pages/second/SecondPage";
import RoomPage from "./components/pages/rooms/RoomPage";
import BookingPage from "./components/Booking/Booking";

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
				title: "Booking",
				path: "/Booking",
				component: BookingPage
			},

			{
				title: "Second",
				path: "/second",
				component: SecondPage,
				routes: [
					{
						title: "Start",
						path: "/start",
						component: StartPage
					}
				]
			},
			
			{
				title: "Room",
				path: "/rooms/:id",
				component: RoomPage
			}
		]
	}
];
export { routes };
