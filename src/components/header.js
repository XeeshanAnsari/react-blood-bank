import React,{Component} from 'react';
// import { Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import * as MUI from 'material-ui'



class Header extends Component{
    render(){
        return(
           <div>
               <MUI.MuiThemeProvider>
                  <MUI.AppBar title='Blood Bank '  ></MUI.AppBar>
               </MUI.MuiThemeProvider>   
                
            </div>   
        )
    }
}

export default Header
