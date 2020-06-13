import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component {

    continue = (event) => {
        event.preventDefault();
        //PROCESS YOUR FORM HERE. THIS IS WHERE YOU WOULD SEND YOUR DATA TO YOUR SERVER/API. 
        this.props.nextStep();
    }
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirmation" />
                    <List>
                        <ListItem primaryText="First Name" secondaryText={values.firstName}/>
                        <ListItem primaryText="Last Name" secondaryText={values.lastName}/>
                        <ListItem primaryText="Email" secondaryText={values.email}/>
                        <ListItem primaryText="Occupation" secondaryText={values.occupation}/>
                        <ListItem primaryText="City" secondaryText={values.city}/>
                        <ListItem primaryText="Bio" secondaryText={values.bio}/>

                        <RaisedButton label="Back"
                            onClick={this.back}
                        />
                        <RaisedButton label="Confirm & Continue"
                            onClick={this.continue}
                            primary={true}
                            style={styles.button}
                            type="submit" />
                    </List>
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

export default Confirm
