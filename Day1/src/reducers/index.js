import { combineReducers } from "redux";
import availableDates from "./availableReducer";

const rootReducer = combineReducers({
	availableDates
});

export default rootReducer;
