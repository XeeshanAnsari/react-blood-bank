import React ,{Component} from 'react'
import * as MUI from 'material-ui'
import {Link} from 'react-router'

export default class Buttons extends Component{
    render(){
        return(
            <div>
              <MUI.MuiThemeProvider>
                  <div>
                    <Link to="/sigin"><MUI.RaisedButton type="submit" secondary={true} >Sign In</MUI.RaisedButton></Link>
                    <Link to="/signup"><MUI.RaisedButton type="submit" secondary={true} >Sign Up</MUI.RaisedButton></Link>
                   </div>
                </MUI.MuiThemeProvider>
            </div>
        )
    }
}