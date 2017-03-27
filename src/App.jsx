import React, {Component} from 'react';
import './App.css'

class App extends Component{

  constructor(props){
      super(props);

      this.state = {
        deadline : 'December 25, 2017',
		day : 13,
		hour : 5,
		minute : 23,
		second : 34
      }

  }
  
  changeState(){
      this.setState(
	    {
            deadline : 'December 25, 2018',
		    day : 37,
		    hour : 5,
		    minute : 58,
		    second : 23
        }
	  )
  }


  render(){

    return(



        <div className="App">
            <div className="App-title">CountDown to {this.state.deadline}</div>
            <div>
               <div className="App-day"> {this.state.day} days</div>
               <div className="App-hour"> {this.state.hour} hours</div>
               <div className="App-minute"> {this.state.minute} minutes</div>
               <div className="App-second"> {this.state.second} seconds</div>
            </div>
            <input placeholder='comment'></input>

            <button onClick={()=>this.changeState()}>submit</button>
       </div>
    ) 

  }
}

export default App;
