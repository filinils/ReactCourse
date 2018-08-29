import React from "react";
import io from "socket.io-client";
import TextInput from './../common/TextInput';
import TextArea from './../common/TextArea';



class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valText: '',
            history: [],
            socket: ''
        }

        this.chatText = this.chatText.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

    }

    componentDidMount() {

        const newSocket = io.connect("http://localhost:3000");
        newSocket.on('new_message', (data) => {
            console.log("Data från server: ", data)
            var temp = this.state.history;
            temp.push(data.messageJson);
            this.setState({
                history: temp
            });
        });

        this.setState({
            socket: newSocket
        })
    }

    chatText(e) {
        this.setState({ valText: e.target.value });
    }

    sendMessage() {
        var date = new Date();
        var currentTime = date.getHours() + ":" + date.getMinutes();
        var username = "Client-user"
        this.state.socket.emit('new_message', {
            message: this.state.valText,
            timestamp: currentTime,
            username: username
        });
    }

    getData(dataHis, index) {
        return (<bdi key={index}><span id="chatUserName">{dataHis.username}</span>
            <span id="chatTimespan">{dataHis.timestamp}</span>
            <p>{dataHis.message}</p>
            <hr /></bdi>);
    }
    render() {
        return (
            <div>
                <div className="chatLog">
                    {this.state.history.map(this.getData)}
                </div>
                <TextInput
                    name="TextInputChat"
                    label="inputText"
                    onChange={this.chatText}
                    placeholder="Chat!"
                />
                <button type="button" onClick={this.sendMessage}>Send</button>
            </div >
        )
    }
}


export default Chat;