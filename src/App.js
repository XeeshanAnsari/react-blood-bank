import React,{Component} from 'react';
import { Link, Router, browserHistory, Route, IndexRoute } from 'react-router';
import firebase from 'firebase'
import Header from "./components/header"
import * as MUI from 'material-ui'
import Buttons from './components/button'
import  SignUp  from './components/signup/signup'
import  SignIn  from './components/signin/signin'


// Initialize Firebase
 var config = {
    apiKey: "AIzaSyA7jIY8O7TExSm5IwW1N2t_No1bene9QlU",
    authDomain: "react-blood-bank-e3335.firebaseapp.com",
    databaseURL: "https://react-blood-bank-e3335.firebaseio.com",
   
  };
     firebase.initializeApp(config);
// Initialize Firebase

 class App extends Component {
    render(){
        return (
          
                <Router history={browserHistory}>
                    
                    <Route path="/" component={SignUp}/>
                     <Route path="/signin" component={SignIn}/>
                     <Route path="/home" component={Header}/>
                     
                    
                </Router>    
           
        )
    }    
}

export default App;