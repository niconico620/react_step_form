import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

class UserForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             step: 1,
             firstName: '',
             lastName: '',
             email: '',
             occupation: '',
             city: '',
             bio: ''
        }
    }

    //Proceed to the next step/page
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    //Go back to previous step/page
    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    //Handle changes in the fields of the form
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    render() {
        const {step} = this.state
        const {firstName, lastName, email, occupation, city, bio} = this.state
        const values = {firstName, lastName, email, occupation, city, bio}
        switch(step){
            case 1: 
                return (
                    <FormUserDetails nextStep = {this.nextStep} handleChange = {this.handleChange} values = {values} currentState={this.state}/>
                )
            case 2:
                return  <FormPersonalDetails prevStep = {this.prevStep} nextStep = {this.nextStep} handleChange = {this.handleChange} values = {values} currentState={this.state}/>
            case 3:
                return <Confirm prevStep = {this.prevStep} nextStep = {this.nextStep} values = {values} />
            case 4:
                return <Success />
        }
    }
}

export default UserForm
