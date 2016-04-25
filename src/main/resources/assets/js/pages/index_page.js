import ReactDOM from 'react-dom';
import React from 'react';

// Material UI Theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const MuiTheme = getMuiTheme();

import LoanList from 'js/views/loan/LoanList';

class LoanControllerView extends React.Component {
    //TODO
}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <MuiThemeProvider muiTheme={MuiTheme}>
            <LoanList/>
        </MuiThemeProvider>,
        document.getElementById("bodyContainer")
    );
});