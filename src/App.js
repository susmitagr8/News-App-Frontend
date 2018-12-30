import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  e = "Not healthy"
  
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
  render() {
    return ( 
      <div className = "App" >
      Hello 
      <div>
      {this.state.data}
      </div>
      </div>
    );
  }
}

export default App;