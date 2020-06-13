import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
export class Success extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 'pink'
        }
    }

    componentDidMount() {
        setInterval(() => {
            console.log("hoy");
            if (this.state.color = 'yellow')
                this.setState({
                    color: 'orange'
                })
            
        }, 500)
        setInterval(() => {
            if (this.state.color = 'orange')
            this.setState({
                color: 'red'
            })
        }, 1000)
        setInterval(() => {
            if (this.state.color = 'red')
            this.setState({
                color: 'pink'
            })
        }, 1500)
        setInterval(() => {
            if (this.state.color = 'pink')
            this.setState({
                color: 'yellow'
            })
        }, 2000)
    }

    render() {
        const styles = {
            h1: {
                color: this.state.color
            }
        }
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1 style={styles.h1}>Successfully entered your information.</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success
