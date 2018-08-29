import React from "react";
import io from "socket.io-client";
import TextInput from './../common/TextInput';
import TextArea from './../common/TextArea';
import PropTypes from "prop-types";
import { connect } from "react-redux"



class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valText: '',
            history: [],
            socket: '',
            username: 'Test'
        }

        this.chatText = this.chatText.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

    }

    componentDidMount() {

        const newSocket = io.connect("http://46.101.184.228");
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

    changeUsername(e) {
        this.setState({ username: e.target.value });
    }

    sendMessage() {
        var date = new Date();
        var currentTime = date.getHours() + ":" + date.getMinutes();
        var username = this.state.username;
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
                    {console.log("ioia", this.props.messages)}
                    {this.props.messages.map(this.getData)}
                </div>
                <input type="text" name="username" onChange={this.changeUsername} placeholder="Name" />
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


//export default Chat;

Chat.propTypes = {
    messages: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
    return {
        messages: state.messages ? state.messages : []
    };
}

function mapDispatchToProps() {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);