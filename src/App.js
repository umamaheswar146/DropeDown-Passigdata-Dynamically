import React, { Component } from 'react';
import Dropedown from './Dropedown';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class   App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data:[
          {
            AcountNumber:'123',
            Amount:'100'
          },
          {
            AcountNumber:'156',
            Amount:'101'
          }
      ],
      value:''
    };
  }
  ChangeHandler=(event)=>{
    console.log(event.target.name,'kkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    console.log(this.state.value,'oooooooooooooooooooooooooooooooo')
       this.setState({value:event.target.name})
     }
  render(){
    return (
      <div className="App">
       <Dropedown ChangeHandler={this.ChangeHandler} data={this.state.data}value={this.state.value}  />
      </div>
    ); 
  }
 
}

export default App;
