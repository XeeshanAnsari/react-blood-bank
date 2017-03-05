import React,{Component} from 'react';
// import { Link, Router, browserHistory, Route, IndexRoute } from 'react-router';
import Header from "./components/header"


 class App extends Component{
    render(){
        return(
            /*<Router  history={browserHistory}>
                <Route path="/" component="Header" />
                   
            </Router>    */
          <div>
              <Header/>
          </div>
        )
    }
}

export default App;