import React from "react";
import io from "socket.io-client";
import TextInput from './../common/TextInput';
import TextArea from './../common/TextArea';

const socket = io.connect("http://localhost:3000");

socket.on("connect", () => {
    console.log("WE ARE LIVE - CONNECTION WITH SERVER");
});

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    chatText() {

    }

    getData() {

    }
    render() {
        return (
            <div>
                <TextArea
                    name="Textarea"
                    label=""
                    onChange={this.getData}
                    placeholder=""
                />
                <TextInput
                    name="TextInputChat"
                    label="inputText"
                    onChange={this.chatText}
                    placeholder="Chat!"
                />
                <button type="button">Send</button>
            </div>
        )
    }
}


export default Chat;