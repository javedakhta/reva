
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Redirect,Switch }from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Login from './screens/Login/Login';
import Calendar from './screens/Calendar/Calendar';
import Home from './screens/Home/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import fire from './Config/fire';



class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();

  }
  authListener()
  {
    fire.auth().onAuthStateChange((user)=>{
      if(user)
      {
        this.setstate({user})
      }
      else{
        this.setstate({user :null})
      }
    })

  }

render() {
  return (
    <>
    <div className="App">
      {this.state.user ? (<Home/>) : (<Login/>)}
    </div>
    <Router>
      <Navbar/>
      <main>
        <Switch>
        <Route path ="/" exact>
          {this.state.user 
         ( <Home/>)}
        </Route>
        <Route path ="/Login" exact>
          {this.state.user
          (<Login/>)}
        </Route>
             <Route path ="/Calendar" exact>
          <Calendar/>
        </Route>

        <Redirect to="/" />
        </Switch>
      </main>
      <Footer/>
    </Router>
    </>
  );
}
}

export default App;
