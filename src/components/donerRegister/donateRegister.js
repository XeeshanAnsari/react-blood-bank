import React ,{ Component } from 'react'
import * as MUI from 'material-ui'
import {browserHistory} from 'react-router'
import './donerRegister.css'
import * as firebase from 'firebase';

class DonateForm extends Component{


  constructor(){
      super()
      this.state = {
          name:'',
          age:'',
          address:'',
          ContactNo:'',
          bGroup:''          
         }
       this.state={
           value: 1,

       }  
      this.handleDonateRegistration = this.handleDonateRegistration.bind(this)
      this.handleBGroup =this.handleBGroup.bind(this)
  }
 

 // function for select blood group form DropDownMenu

 handleBGroup(e){
        e.preventDefault()
        this.setState({bGroup:  e.target.childNodes[0].nodeValue})
     
 }


  handleDonateRegistration(e){
      e.preventDefault()

        const doner ={
            name:this.state.name,
            age:this.state.age,
            address: this.state.address,
            ContactNo:this.state.ContactNo,
            bGroup:this.state.bGroup
        }
 }
        
    
    render(){
        return(
           
            <div>
               
              <MUI.MuiThemeProvider>
                  <div className="donate-container">
                      <MUI.Paper className="donate-paper" >
                      <form onSubmit={this.handleSignIn}>
                        <MUI.TextField  
                            floatingLabelText="Full Name" 
                            hintText="Full Name"
                            fullWidth={true}
                            onChange={e => this.setState({name: e.target.value})}
                             />
                        <MUI.TextField
                            hintText="Age"
                            floatingLabelText="Age"
                            fullWidth={true}
                            type="number"
                            onChange={e => this.setState({age: e.target.value})}
                        />
                        <MUI.TextField
                            hintText="Address"
                            floatingLabelText="Address"
                            fullWidth={true}
                            onChange={e => this.setState({address: e.target.value})}
                        />
                        <MUI.TextField
                            hintText="Contact No."
                            floatingLabelText="Contact No."
                            fullWidth={true}
                            onChange={e => this.setState({ContactNo: e.target.value})}
                        />
                        <MUI.DropDownMenu 
                            style={{width: 400}}
                            value={this.state.value}
                            onChange={this.handleBGroup}>
                            <MUI.MenuItem value={1} primaryText="Blood Group" disabled />
                            <MUI.MenuItem value={2} primaryText="A+" />
                            <MUI.MenuItem value={3} primaryText="B+" />
                            <MUI.MenuItem value={4} primaryText="AB+" />
                            <MUI.MenuItem value={5} primaryText="O+" />
                            <MUI.MenuItem value={6} primaryText="O-" />
                            <MUI.MenuItem value={7} primaryText="AB-" />
                            <MUI.MenuItem value={8} primaryText="B-" />
                            <MUI.MenuItem value={9} primaryText="A-" />
                        </MUI.DropDownMenu>
                       
                       <MUI.RaisedButton 
                                type="submit"
                                label="Donate"
                                className="donate-btn"
                                secondary={true}/>


                     </form>
                     </MUI.Paper >
                  </div>
               </MUI.MuiThemeProvider>   
                   
            </div>
        )
    }
}

export default DonateForm