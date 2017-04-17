import React, {Component} from 'react';
import './App.css'
import Clock from './Clock.jsx';
import {Form, FormControl, Button} from 'react-bootstrap'

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
            <Clock
			
			   mydeadline = {this.state.deadline}
			/>
			
			<Form inline>
            <FormControl onChange={event => this.setState({tempDeadline : event.target.value})}>
			
			</FormControl>

            <Button onClick={()=>this.changeState()}>submit</Button>
			</Form>
       </div>
    ) 

  }
}

export default App;
