import ReactDOM from 'react-dom';
import React from 'react';

//Grid
require("react-flexgrid/lib/flexgrid.css");

import Grid from 'react-flexgrid/lib/Grid';
import Row from 'react-flexgrid/lib/Row';
import Col from 'react-flexgrid/lib/Col';

// Material UI Theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const MuiTheme = getMuiTheme();

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class LoginForm extends React.Component {

    render() {
        return (
            <Grid fluid={true}>
                <Row style={{justifyContent: "center", alignItems: "center"}}>
                    <Col>
                        <Paper style={{ padding: "10px", display: "inline-block"}}>
                            {window.location.search.indexOf("error") > -1 ?
                                <div>
                                    <div style={{color: "red"}}>Error, try again.</div>
                                    <br/>
                                </div>
                                : null
                            }
                            <b>Login:</b>
                            <form action="/process-login" method="POST" ref="form">
                                <TextField name="email" floatingLabelText="Email"/>
                                <br/>
                                <TextField name="password" floatingLabelText="Password"/>
                                <br/>
                                <RaisedButton label="Login" onClick={this.loginClick}/>
                            </form>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        )
    }

    loginClick =() => {
        // TODO client validation
        this.refs.form.submit();
    };
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <MuiThemeProvider muiTheme={MuiTheme}>
            <LoginForm/>
        </MuiThemeProvider>,
        document.getElementById("bodyContainer")
    );
});