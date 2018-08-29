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
        checkInActive: ''
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

    // if(this.props.availableDates){

        let calendar = [];
        const days = moment().daysInMonth();
    
        for(let i = 0; i < days; i++) {
            let isAv = this.props.availableDates; /*this.state.available[i.toString()];*/
            
            if(isAv) {
                calendar.push(<div key={i} onClick={this.setDate} className="grid-item">{i + 1}</div>);
            }
            else {
                calendar.push(<div key={i} className="grid-item">{i + 1}</div>);
            }        
        } 
        return calendar;
    /*}*/
}

setDate(event) {

    event.target.classList.toggle('isActive');
    let date = event.target.innerHTML;
    if(this.state.checkInDate === '') {
        this.setState({checkInDate: date});


    }
    else {
        this.setState({checkOutDate: date});
    }

    if(this.state.checkInDate !== '' && this.state.checkOutDate !== '') {

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
                    <p2>650kr</p2>
                </div>
                <div className="row">
                    <button /* onClick={this.toggleCheckIn} */ className={this.state.isActive} >Incheck</button>
                    <button /* onClick={this.toggle} */ className={this.state.isActive} >Utcheck</button>
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
