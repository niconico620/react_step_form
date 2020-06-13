import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalDetails extends Component {

    continue = (event) => {
        event.preventDefault();
        //alert(`Occupation: ${this.props.values.occupation}. City: ${this.props.values.city}. Bio: ${this.props.values.bio}`)
        //Object.keys(this.props.currentState).map(i => alert(this.props.currentState[i]))
        this.props.nextStep();
    }

    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <form onSubmit={this.continue}>
                        <AppBar title="Enter Personal Details" />
                        <TextField name="occupation"
                            hintText="Enter your occupation"
                            floatingLabelText="Occupation"
                            onChange={handleChange}
                            defaultValue={values.occupation} />
                        <br />
                        <TextField name="city"
                            hintText="Enter your city"
                            floatingLabelText="City"
                            onChange={handleChange}
                            defaultValue={values.city} />
                        <br />
                        <TextField name="bio"
                            hintText="Enter your bio"
                            floatingLabelText="Bio"
                            onChange={handleChange}
                            defaultValue={values.bio} />
                        <br />
                        <br />
                        <RaisedButton label="Back"
                            onClick={this.back}
                        />
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

export default FormPersonalDetails
