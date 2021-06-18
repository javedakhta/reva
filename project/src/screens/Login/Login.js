import React from 'react';
import Logo from "./Logo.png";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";

import fire from '../../Config/fire';

class Login extends Component {
  constructor(props)
  {
    super(props)
    this.login =this.login.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.signup=this.signup.bind(this);
      this.login=this.login.bind(this);
    this.state={
      email :"",
      password : ""
    }
  }
  login(e){
    e.priventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      console.log(u)
    }).catch((err)=>{
      console.log(err);
    })
  }
  signup(e){
    e.priventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      console.log(u)
    }).catch((err)=>{
      console.log(err);
    })
  }
  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render(){
    return (
      <body className="sigin-body">
      <div className="container singin">
        <div className="row">
        <div className="col"></div>
          <div className="col-8">
          <div className="card signin-card">
          <div className="card-body">
            <img className="" src={Logo} alt="Logo" className="img-fluid signin-img"/>
           
          <form>
          <div className="form-group">
          <input name="email" type="email" class="form-control" id="email" placeholder="email" 
          onChange={this.handleChange} value={this.state.email}/>
          </div>
          <div class="form-group">
    
    <input name="passsword" type="password" class="form-control" id="passwordinput" placeholder="password"
    onChange={this.handleChange} value={this.state.password}/>
  </div>
  <button   class="btn signin-btn" onClick={this.login}>Login in </button> 
  <button   class="btn signin-btn" onClick={this.signup}>Signup </button>  
       
          </form>
          </div>

          </div>
          <a href="a">create new account</a>
          </div>

        </div>


      </div>
    
  


      </body>
    
   
    
      
    );
    }
  }
  
  export default Login;