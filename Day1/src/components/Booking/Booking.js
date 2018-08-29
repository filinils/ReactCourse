import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import Moment from 'moment';
import * as moment from 'moment';
// import Calendar from 'react-calendar';

export default class Booking extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        available: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.renderMonth = this.renderMonth.bind(this);
}       

// onChange = date => this.setState({ date })

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
            calendar.push(<div key={i} className="grid-item">{i + 1}a</div>);
        }
        else {
            calendar.push(<div key={i} className="grid-item">{i + 1}</div>);
        }
        
        
    }

    return calendar;
}

// RenderDates(dates) {

//     const mapDates = () => <div className="grid-item">{dates}</div>

//     return (

//     );
// }

    render(){

        const calendarStrings = {
            lastDay : '[Yesterday at] LT',
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            lastWeek : '[last] dddd [at] LT',
            nextWeek : 'dddd [at] LT',
            sameElse : 'L'
        };

        return (
            <div className="container">
                <div className="row">
                    <p2>650kr</p2>
                </div>
                <div className="row">
                    <button>Incheck</button>
                    <button>Utcheck</button>
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
                
                   
                {/* {this.RenderDates(this.state.available)} */}
                {/* <div className="grid-container">
                    <div className="grid-item">1</div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">4</div>
                    <div className="grid-item">5</div>
                    <div className="grid-item">6</div>
                    <div className="grid-item">7</div>
                    <div className="grid-item">8</div>
                    <div className="grid-item">9</div>

                </div> */}
            </div>
        )
    };
    

}