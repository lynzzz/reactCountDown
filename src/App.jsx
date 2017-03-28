import React, {Component} from 'react';
import './App.css'
import Clock from './Clock.jsx';

class App extends Component{

  constructor(props){
      super(props);

      this.state = {
        deadline : 'December 25, 2017',
		tempDeadline : "",
      }

  }
  
  changeState(){

      this.setState(
	    {
            deadline : this.state.tempDeadline
        }
	  );
  }


  render(){

    return(



        <div className="App">
            <div className="App-title">CountDown to {this.state.deadline}</div>
            <Clock/>
            <input onChange={event => this.setState({tempDeadline : event.target.value})}></input>

            <button onClick={()=>this.changeState()}>submit</button>
       </div>
    ) 

  }
}

export default App;
