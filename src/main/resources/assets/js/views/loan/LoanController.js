import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux'

import jQuery from 'jquery';

import LoanListPresentation from 'js/views/loan/LoanListPresentation';


const formatActionType = (type) => {
    return `js/views/loan/LoanListController:${type}`;
};

// Actions
const ACTION_DATA_LOAD = formatActionType("DATA_LOAD");


class LoanListController extends React.Component {

    componentDidMount() {
        this.props.provideReducerMap(LoanListController.reducerMap());
        this.props.loadData();
    }

    render() {
        return <LoanListPresentation dataList={this.props.dataList} error={this.props.error}/>
    }

    static mapStateToProps(state, ownProps) {
        return {
            dataList: state.loanList
        }
    }

    static mapDispatchToProps(dispatch, ownProps) {
        return {
            loadData: () => {
                jQuery.ajax({
                    method: "POST",
                    url: "/loan/list.json"
                })
                    .then(function (object) {
                        dispatch({type: ACTION_DATA_LOAD, dataList: object})
                    })
                    .fail(function (response) {
                        dispatch({type: ACTION_DATA_LOAD, error: response})
                    });
            }
        }
    }

    static reducerMap() {
        const map = {};
        map[ACTION_DATA_LOAD] = (state, action) => ({loanList: action.dataList});
        return map;
    }
}

export default connect(
    LoanListController.mapStateToProps,
    LoanListController.mapDispatchToProps
)(LoanListController);

