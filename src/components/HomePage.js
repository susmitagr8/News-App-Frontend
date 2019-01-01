import  React, {
    Component
  } from 'react'
import Buttons from '../shared-components/Buttons/Buttons'
import TextField from '../shared-components/TextField/TextField'
class HomePage extends Component{
    state={
        Login : false,
        Register : false
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
              <button class="btn-success btn-lg">Submit</button>
            </div>
          }
          return (
            <div>
            <div class= "jumbotron">
            <h1>The News App</h1>
            <p>This is a news Portal</p>
          </div>
            <Buttons data = "Login" clicked={this.LoginClick}></Buttons>
            <Buttons data = "Register" clicked={this.RegisterClick}></Buttons>
            {decision}
          </div>
          );

        }
       
}
export default HomePage;