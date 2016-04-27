import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// Material UI Theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const MuiTheme = getMuiTheme();
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Reducer from 'js/core/Reducer';

import LoanController from 'js/views/loan/LoanController';

const reducer = new Reducer();
const store = createStore(reducer.subscribe, {}, applyMiddleware(thunkMiddleware));

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