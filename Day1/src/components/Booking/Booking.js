import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as moment from 'moment';

export default class Booking extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        available: [],
        checkInDate: '',
        checkOutDate: '',
        checkInActive: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.renderMonth = this.renderMonth.bind(this);
    this.setDate = this.setDate.bind(this);
}       

getAvailabeTimes(){
    return axios.get("http://localhost:3000/api/available/")
    .then(function(response) {
        return response.data;
        
    })
}

componentDidMount() {

    this.getAvailabeTimes().then((response)=>{
    this.setState({available:response})}
    )
}


renderMonth() {

    let calendar = [];

    
    const days = moment().daysInMonth();

    for(let i = 0; i < days; i++) {
        let isAv = this.state.available[i.toString()];
        
        if(isAv) {
            calendar.push(<div key={i} onClick={this.setDate} className="grid-item">{i + 1}</div>);
        }
        else {
            calendar.push(<div key={i} className="grid-item">{i + 1}</div>);
        }
        
        
    }

    return calendar;
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

        // const calendarStrings = {
        //     lastDay : '[Yesterday at] LT',
        //     sameDay : '[Today at] LT',
        //     nextDay : '[Tomorrow at] LT',
        //     lastWeek : '[last] dddd [at] LT',
        //     nextWeek : 'dddd [at] LT',
        //     sameElse : 'L'
        // };

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