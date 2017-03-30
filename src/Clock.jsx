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

	getUtility(deadline){
	    var time=Date.parse(deadline) - Date.parse(new Date());
		var second = Math.floor((time/1000)%60);
		var minute = Math.floor((time/1000/60)%60);
		var hour = Math.floor((time/1000/60/60)%24);
        var day = Math.floor((time/1000/60/60/24));
		
	   this.setState({
			day,
            hour,
            minute,
            second			
	   });
	}
	
	componentWillMount(){
	    this.getUtility(this.props.mydeadline);
	}
	
	componentDidMount(){
	   setInterval( () => this.getUtility(this.props.mydeadline), 1000);
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