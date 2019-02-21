import  React, {
    Component
  } from 'react'
import Buttons from '../shared-components/Buttons/Buttons'
import TextField from '../shared-components/TextField/TextField'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
class HomePage extends React.Component{
    state={
        Login : false,
        Register : false,
        gotoReg : false,
        gotolog : false
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
      RegisterSubmit=()=>{
          this.state.gotoReg=true;
          this.state.gotolog=false;
      }
      LoginSubmit=()=>{
        this.state.gotoReg=false;
        this.state.gotolog=true;
      }
      render() {

        let decision=null
        
        if(this.state.Login)
        {
            decision=<div>
              <TextField data="User ID"/> 
              <TextField data="Password"/>
              <Link to="/LoginSuccessful">Submit</Link>
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
              <Link to ="/RegisterSuccessful">Submit</Link>

            </div>
          }
          if(this.state.gotoReg)
              return <Redirect to = '/RegisterSuccessful'/>
          return (
            <div>
            <div class= "jumbotron">
            <h1 class="display-2"><kbd>The News App</kbd></h1>
            <p class="display-4">Portal for News</p>
          </div>
            <Buttons data = "Login" clicked={this.LoginClick}></Buttons>
            <Buttons data = "Register" clicked={this.RegisterClick}></Buttons>
            {decision}
          </div>
          );
        }
       
}
export default HomePage;