import React ,{ Component } from 'react'
import * as MUI from 'material-ui'
import {browserHistory} from 'react-router'
import './signin.css'
import * as firebase from 'firebase';

class SignIn extends Component{


  constructor(){
      super()
      this.state = {
          email:'',
          pass:'',
         }
      this.handleSignIn = this.handleSignIn.bind(this)
  }
 
  handleSignIn(e){
      e.preventDefault()

      const user ={
          email:this.state.email,
          pass:this.state.pass
      }

      
    const  auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(user.email , user.pass)

    promise.then((user) => {
         browserHistory.push('/home')
        console.log('lOGIN SUCCESfULLY')
    })
     

// after login value null
        this.setState = {
          email:'',
          pass:'',
        }
  }
  
    
    render(){
        return(
           
            <div>
               
              <MUI.MuiThemeProvider>
                  <div className="signin-container">
                      <MUI.Paper className="signin-paper" >
                      <form onSubmit={this.handleSignIn}>
                        <MUI.TextField  
                            floatingLabelText="Email" 
                            hintText="Email"
                            fullWidth={true}
                            onChange={e => this.setState({email: e.target.value})}
                             />
                        <MUI.TextField  
                            floatingLabelText="Password" 
                            hintText="Password"
                            fullWidth={true}
                            type="password"
                            onChange={e => this.setState({pass: e.target.value})}
                            />
                       
                       <MUI.RaisedButton 
                                type="submit"
                                label="Sign In"
                                className="signin-btn"
                                primary={true}/>


                     </form>
                     </MUI.Paper >
                  </div>
               </MUI.MuiThemeProvider>   
                   
            </div>
        )
    }
}

export default SignIn