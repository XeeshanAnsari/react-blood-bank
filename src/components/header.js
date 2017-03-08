import React,{Component} from 'react';
// import { Link} from 'react-router';

import * as MUI from 'material-ui'
import Buttons  from '../components/buttons/button'



class Header extends Component{
    render(){
        return(
           <div>
              <MUI.MuiThemeProvider>
                  <div>
                      <MUI.AppBar  title="Blood bank" ><Buttons/> </MUI.AppBar>
                  </div>
               </MUI.MuiThemeProvider>   
               {this.props.children}
            </div>   
        )
    }
}

export default Header
