import React,{Component} from 'react';
// import { Link} from 'react-router';

import * as MUI from 'material-ui'



class Header extends Component{
    render(){
        return(
           <div>
              <MUI.MuiThemeProvider>
                  <div>
                      <MUI.AppBar  title="Blood bank" />
                  </div>
               </MUI.MuiThemeProvider>   
            </div>   
        )
    }
}

export default Header
