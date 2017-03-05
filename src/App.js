import React,{Component} from 'react';
import { Link, Router, browserHistory, Route, IndexRoute } from 'react-router';
import Header from "./components/header"
import * as MUI from 'material-ui'
import Buttons from './components/button'
import  SignUp  from './components/signup/signup'




 class App extends Component {
    render(){
        return (
          
                <Router history={browserHistory}>
                    
                    <Route path="/" component={SignUp}/>
                     {/*<Route path="/" component={Header}/>*/}
                     <Route path="/buttons" component={Buttons}/>
                     
                    
                </Router>    
           
        )
    }    
}

export default App;