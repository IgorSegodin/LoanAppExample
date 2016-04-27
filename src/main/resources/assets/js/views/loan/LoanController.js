import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux'

import jQuery from 'jquery';

import LoanPresentation from 'js/views/loan/LoanPresentation';

import AppConfig from 'js/core/AppConfig';
import ExceptionUtil from 'js/util/ExceptionUtil';
import UrlUtil from 'js/util/UrlUtil';
import NotifyUtil from 'js/util/NotifyUtil';

const formatActionType = (type) => {
    return `js/views/loan/LoanListController:${type}`;
};

// Actions
const ACTION_DATA_LOAD = formatActionType("DATA_LOAD");
const ACTION_TOGGLE_APPLY_DIALOG = formatActionType("TOGGLE_APPLY_DIALOG");
const ACTION_SUBMIT_APPLY_DIALOG_ERROR = formatActionType("SUBMIT_APPLY_DIALOG_ERROR");
const ACTION_CHANGE_INPUT_APPLY_DIALOG = formatActionType("CHANGE_INPUT_APPLY_DIALOG");


class LoanListController extends React.Component {

    componentDidMount() {
        this.props.provideReducerMap(LoanListController.reducerMap());
        this.props.loadData();
    }

    render() {
        return <LoanPresentation tableData={Object.assign({deleteLoanCallback: this.props.deleteLoan}, this.props.tableData)}
                                 dialogData={Object.assign({
                                        showApplyDialogCallback: this.props.showApplyDialog,
                                        hideApplyDialogCallback: this.props.hideApplyDialog,
                                        submitApplyDialogCallback: this.props.submitApplyDialog,
                                        changeInputApplyDialogCallback: this.props.changeInputApplyDialog
                                    },
                                    this.props.dialogData)
                                 }/>
    }

    static loadTableDataAndDispatch(dispatch) {
        return jQuery.ajax({
            method: "POST",
            url: UrlUtil.get(AppConfig.baseUrl, "/loan/list.json")
        })
            .then(function (object) {
                dispatch({type: ACTION_DATA_LOAD, list: object})
            })
            .fail(function (response) {
                NotifyUtil.error(response.status + " " + response.statusText);
                dispatch({type: ACTION_DATA_LOAD, error: ExceptionUtil.getErrorDescription(response)})
            });
    }

    static mapDispatchToProps(dispatch, ownProps) {
        return {
            loadData: () => {
                LoanListController.loadTableDataAndDispatch(dispatch);
            },
            showApplyDialog: ()=> {
                dispatch({type: ACTION_TOGGLE_APPLY_DIALOG, open: true});
            },
            hideApplyDialog: ()=> {
                dispatch({type: ACTION_TOGGLE_APPLY_DIALOG, open: false});
            },
            submitApplyDialog: ()=> {
                dispatch(function(dispatch, getState) {
                    return jQuery.ajax({
                        method: "POST",
                        url: UrlUtil.get(AppConfig.baseUrl, "/loan/apply.json"),
                        data: getState().loanDialogData
                    })
                        .then(function (object) {
                            NotifyUtil.success("Loan application was created.");
                            dispatch({type: ACTION_TOGGLE_APPLY_DIALOG, open: false});
                            LoanListController.loadTableDataAndDispatch(dispatch);
                        })
                        .fail(function (response) {
                            NotifyUtil.error(response.status + " " + response.statusText);
                            dispatch({type: ACTION_SUBMIT_APPLY_DIALOG_ERROR, error: ExceptionUtil.getErrorDescription(response)});
                        });
                });
            },
            changeInputApplyDialog: (data) => {
                dispatch({type: ACTION_CHANGE_INPUT_APPLY_DIALOG, data: data});
            },
            deleteLoan: (loanId) => {
                dispatch(function(dispatch, getState) {
                    return jQuery.ajax({
                        method: "DELETE",
                        url: UrlUtil.get(AppConfig.baseUrl, "/loan?id=" + loanId)
                    })
                        .then(function (object) {
                            NotifyUtil.success("Loan was deleted.");
                            LoanListController.loadTableDataAndDispatch(dispatch);
                        })
                        .fail(function (response) {
                            NotifyUtil.error(response.status + " " + response.statusText);
                        });
                });
            }
        }
    }

    static mapStateToProps(state, ownProps) {
        return {
            tableData: {
                list: state.loanList,
                error: state.loanListError
            },
            dialogData: {
                open: state.loanDialogOpen ? true : false ,
                data: state.loanDialogData || {},
                error: state.loanDialogError
            }
        }
    }

    static reducerMap() {
        const map = {};
        map[ACTION_DATA_LOAD] = (state, action) => ({loanList: action.list, loanListError: action.error});

        map[ACTION_TOGGLE_APPLY_DIALOG] = (state, action) => ({loanDialogOpen: action.open, loanDialogData: {}, loanDialogError: null});

        map[ACTION_CHANGE_INPUT_APPLY_DIALOG] = (state, action) => {
            return {loanDialogData: Object.assign({}, state.loanDialogData, action.data)};
        };

        map[ACTION_SUBMIT_APPLY_DIALOG_ERROR] = (state, action) => {
            return {loanDialogError: action.error};
        };

        return map;
    }
}

export default connect(
    LoanListController.mapStateToProps,
    LoanListController.mapDispatchToProps
)(LoanListController);

