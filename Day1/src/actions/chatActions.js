import * as types from "./actionTypes";
import axios from "axios";
import endpoints from "../config/endpoints";
import io from "socket.io-client";

export function loadNewMessageSuccess(messages) {
    return { type: types.LOAD_NEW_MESSAGES, messages };
}


export function messageReciever() {
    const newSocket = io.connect("http://46.101.184.228");
    return function (dispatch) {

        console.log("hej");
        newSocket.on('new_message', (data) => {

            if (data) {
                dispatch(loadNewMessageSuccess(data));
            }
        });
    }

};
