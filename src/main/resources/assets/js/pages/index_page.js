import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// Material UI Theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const MuiTheme = getMuiTheme();

import Reducer from 'js/util/Reducer';

import LoanController from 'js/views/loan/LoanController';

const reducer = new Reducer();
const store = createStore(reducer.subscribe, {});

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider muiTheme={MuiTheme}>
                <LoanController provideReducerMap={(reducerMap) => {reducer.register(reducerMap)}}/>
            </MuiThemeProvider>
        </Provider>,
        document.getElementById("bodyContainer")
    );
});