import React, {Component} from 'react';
import './Clock.css';

class Clock extends Component{
   
   constructor(props){
      super(props);    
	  
	  this.state = {
           day : 0,
	       hour : 0,
	       minute : 0,
	       second :0
      }
    }


   render(){
   
       return(
	   
	        <div>
               <div className="App-day"> {this.state.day} days</div>
               <div className="App-hour"> {this.state.hour} hours</div>
               <div className="App-minute"> {this.state.minute} minutes</div>
               <div className="App-second"> {this.state.second} seconds</div>
            </div>
	   
	   
	   )
   
   }
}

export default Clock