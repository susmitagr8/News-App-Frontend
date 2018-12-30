import React, {
  Component
} from 'react';
import './App.css';
import Buttons from './shared-components/Buttons/Buttons.js'
import TextField from './shared-components/TextField/TextField.js'
class App extends Component {
  e = "Not healthy"
  state={
    Login : false,
    Register : false
  }
  componentDidMount() {
    this.healthCheck();
  }
  componentWillMount(){
    this.state = {data: "Not healthy"}
  }
  
  healthCheck() {
    let options = {
      mode :'cors',
      method: 'GET',
      cache: 'no-cache',
      headers:{
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
  };
   fetch('http://localhost:8081/healthcheck',options).then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({data: "Healthy"})
      return data
    }).catch(error=> this.setState({data: "Not Healthy"}));
  }
  RegisterClick=()=>{   
  const register=true
  const login=false
  this.setState({Register:register})
  this.setState({Login:login})
}
LoginClick=()=>{
  const register=false
  const login = true
  this.setState({Register:register})
  this.setState({Login:login})
}
  render() {
    let decision=null

    if(this.state.Login)
    {
        decision=<div>
          <TextField data="User ID"/> 
          <TextField data="Password"/>
          <p></p>
          <button class="btn-success btn-lg">Submit</button>
        </div>
    }
    else if(this.state.Register)
    {
      decision=<div>
        <TextField data = "Name"/>
        <TextField data = "Email ID"/>
        <TextField data = "Preferred User ID"/>
        <TextField data = "Password"/>
        <TextField data = "Confirm Password"/>
        <p></p>
        <button class="btn-success btn-lg">Submit</button>
      </div>
    }
    return ( 
      <div className = "App" >
      <div class= "jumbotron">
        <h1>The News App</h1>
        <p><large>This is a news Portal</large></p>
      </div>
        <Buttons data = "Login" clicked={this.LoginClick}></Buttons>
        <Buttons data = "Register" clicked={this.RegisterClick}></Buttons>
        {decision}
      </div>
    );
  }
}

export default App;