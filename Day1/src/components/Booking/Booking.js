import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as moment from 'moment';
import * as availableActions from "../../actions/availableActions";
import { connect } from "react-redux";

class Booking extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        availableDates: [],
        checkInDate: '',
        checkOutDate: '',
        checkInActive: '',
        totalPrice: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.renderMonth = this.renderMonth.bind(this);
    this.setDate = this.setDate.bind(this);



}       

// getAvailabeTimes(){

//     return this.props.loadAvailableTimes;

//     // return axios.get("http://localhost:3000/api/available/")
//     // .then(function(response) {
//     //     return response.data;
        
//     // })
// }

componentDidMount() {

    this.props.loadAvailableTimes();
}


renderMonth() {

let availableDates = this.props.availableDates;

    if(availableDates.length > 0)
    {
        let calendar = [];
        const days = moment().daysInMonth();
    
        for(let i = 0; i < days; i++) {
            
            if(availableDates.indexOf(i) !== -1) {
                calendar.push(<div id={i + 1} key={i} onClick={this.setDate} className="grid-item">{i + 1}</div>);
            }
            else {
                calendar.push(<div id={i + 1} key={i} className="grid-item">{i + 1}</div>);
            }        
        } 
        return calendar;
    }
}

setDate(event) {

    event.target.classList.toggle('isActive');

    let date = event.target.innerHTML;
    if(this.state.checkInDate === '') {
        this.setState({checkInDate: date});
        console.log("in: " + date);

    }
    else {
        if(parseInt(this.state.checkInDate) < parseInt(date)) {

            this.setState({checkOutDate: date});
            console.log("out: " + date);
            console.log("in: " + this.state.checkInDate);

            let totalPrice = (date - this.state.checkInDate) * 600;
            this.setState({totalPrice: totalPrice})

        }
        else {

            let oldCheckIn = this.state.checkInDate;
            this.setState({checkInDate: date, checkOutDate: oldCheckIn});
            console.log("out: " + oldCheckIn);
            console.log("in: " + date);

            let totalPrice = (oldCheckIn - date) * 600;
            this.setState({totalPrice: totalPrice})
        }
    }

    if(this.state.checkInDate !== '' && this.state.checkOutDate !== '') {
        let checkIn = this.state.checkInDate;
        let checkOut = this.state.checkOutDate;
        let checkInDiv = document.getElementById(checkIn);
        let checkOutDiv = document.getElementById(checkOut);
        checkInDiv.classList.toggle('isActive');
        checkOutDiv.classList.toggle('isActive');
        this.setState({checkInDate: '', checkOutDate: ''})
    }
}

// toggleCheckin() {
//     let isActive = this.state.isActive === 'isactive' ? '' : 'isactive'; 

//     this.setState({isActive: isActive });
// }
// toggleCheckOut() {

// }

// RenderDates(dates) {

//     const mapDates = () => <div className="grid-item">{dates}</div>

//     return (

//     );
// }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <p2>{this.state.totalPrice} sek</p2>
                </div>
                <div className="row">
                    <button /* onClick={this.toggleCheckIn} */ className={this.state.isActive} >Incheck: {this.state.checkInDate}</button>
                    <button /* onClick={this.toggle} */ className={this.state.isActive} >Utcheck: {this.state.checkOutDate}</button>
                </div>
                <div className="row">
                    <button>(--</button>
                    <p2>Oktober 2018</p2>
                    <button>--)</button>
                </div>
                {/* <Calendar 
                    // onChange={this.onChange}
                    value={this.state.date}
                /> */}
                <div className="grid-container">
                    {this.renderMonth()}
                </div>
            </div>
        )
    };
    

}

function mapStateToProps(state, ownProps) {
    return {
        availableDates: state.availableDates
    }
}

function mapDispatchToProps(dispatch) {
    return {loadAvailableTimes: () => { return dispatch(availableActions.loadAvailableTimes()) }}
}



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Booking);
