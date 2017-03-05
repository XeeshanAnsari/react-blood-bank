import React ,{ Component } from 'react'
import * as MUI from 'material-ui'
import {Link} from 'react-router'
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
      this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  handleSubmit(e){
      e.preventDefault()

      const user ={
          fName: this.state.lName,
          lName: this.state.lName,
          email:this.state.email,
          pass:this.state.pass
      }
// Data save to database
     const firebaseDb = firebase.database();
      firebaseDb.ref("Uers").push(user);
      

       const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(user.email, user.pass);
        promise.then((user) => {
           console.log("Signup succesfully");
        //    browserHistory.push('/signin');
        })
        promise.catch(e => console.log("error" + e.message));
  }
  
    
    render(){
        return(
           
            <div>
               
              <MUI.MuiThemeProvider>
                  <div className="signup-container">
                      <MUI.Paper className="signup-paper" >
                      <form onSubmit={this.handleSubmit}>
                        <MUI.TextField  
                            floatingLabelText="First Name" 
                            hintText="First Name"
                            fullWidth={true}
                            onChange={e => this.setState({fName: e.target.value})}
                            requried="requried" />
                        <MUI.TextField  
                            floatingLabelText="Last Name" 
                            hintText="Last Name"
                            fullWidth={true}
                           onChange={e => this.setState({lName: e.target.value})}
                            requried="requried" />
                        <MUI.TextField  
                            floatingLabelText="Email" 
                            hintText="Email"
                            fullWidth={true}
                             onChange={e => this.setState({email: e.target.value})}
                            requried="requried" />
                        <MUI.TextField  
                            floatingLabelText="Password" 
                            hintText="Password"
                            fullWidth={true}
                            onChange={e => this.setState({pass: e.target.value})}
                            requried="requried" />
                       
                       <MUI.RaisedButton type="submit" primary={true}>Submit</MUI.RaisedButton>


                     </form>
                     </MUI.Paper >
                  </div>
               </MUI.MuiThemeProvider>   
                   
            </div>
        )
    }
}

export default SignUp