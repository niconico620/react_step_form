import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component {

    continue = (event) => {
        event.preventDefault();
        //alert(`First name: ${this.props.values.firstName}. Last name: ${this.props.values.lastName}. Email Add: ${this.props.values.email}`)
        //Object.keys(this.props.currentState).map(i => alert(this.props.currentState[i]))
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <form onSubmit={this.continue}>
                        <AppBar title="Enter User Details" />
                        <TextField name="firstName"
                            hintText="Enter your first name"
                            floatingLabelText="First Name"
                            onChange={handleChange}
                            defaultValue={values.firstName} />
                        <br />
                        <TextField name="lastName"
                            hintText="Enter your last name"
                            floatingLabelText="Last Name"
                            onChange={handleChange}
                            defaultValue={values.lastName} />
                        <br />
                        <TextField name="email"
                            hintText="Enter your email address"
                            floatingLabelText="Email Address"
                            onChange={handleChange}
                            defaultValue={values.email} />
                        <br />
                        <br />
                        <RaisedButton label="Continue"
                            primary={true}
                            style={styles.button}
                            type="submit" />
                    </form>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
