import React ,{ Component } from 'react'
import * as MUI from 'material-ui'
import {browserHistory} from 'react-router'
import './signup.css'
import * as firebase from 'firebase';

class SignUp extends Component{


  constructor(props){
      super(props)
      this.state = {
          fName:'',
          lName:'',
          email:'',
          pass:'',
          

      }
      this.handleSignUp = this.handleSignUp.bind(this)
  }
 
  handleSignUp(e){
      e.preventDefault()

      const user ={
          fName: this.state.lName,
          lName: this.state.lName,
          email:this.state.email,
          pass:this.state.pass
      }
// Data save to database
    //  const firebaseDb = firebase.database();
    //   firebaseDb.ref("/Users").push({user});
      

       const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(user.email, user.pass);
        promise.then((user) => {
            // after submit value null
            this.setState = {
            fName:'',
            lName:'',
            email:'',
            pass:'',
            }
           console.log("Signup succesfully");
          browserHistory.push('/signin');
        })
        promise.catch(e => console.log("error" + e.message));


  }
  
    
    render(){
        return(
           
            <div>
               
              <MUI.MuiThemeProvider>
                  <div className="signup-container">
                      <MUI.Paper className="signup-paper" >
                      <form onSubmit={this.handleSignUp}>
                        <MUI.TextField  
                            value={this.state.fName}
                            floatingLabelText="First Name" 
                            hintText="First Name"
                            fullWidth={true}
                            onChange={e => this.setState({fName: e.target.value})}
                            />
                        <MUI.TextField  
                            value={this.state.lName}
                            floatingLabelText="Last Name" 
                            hintText="Last Name"
                            fullWidth={true}
                           onChange={e => this.setState({lName: e.target.value})}
                             />
                        <MUI.TextField  
                            value={this.state.email}
                            floatingLabelText="Email" 
                            hintText="Email"
                            fullWidth={true}
                             onChange={e => this.setState({email: e.target.value})}
                            />
                        <MUI.TextField  
                            value={this.state.pass}
                            floatingLabelText="Password" 
                            hintText="Password"
                            fullWidth={true}
                            onChange={e => this.setState({pass: e.target.value})}
                            type="password"
                            />
                       
                       <MUI.RaisedButton 
                               type="submit"
                                label="Signup"
                                className="signup-btn"
                                primary={true}
                                />


                     </form>
                     </MUI.Paper >
                  </div>
               </MUI.MuiThemeProvider>   
                   
            </div>
        )
    }
}

export default SignUp