/**
 * View representation for Loans table and application
 * */

import ReactDOM from 'react-dom';
import React from 'react';

//Grid
require("react-flexgrid/lib/flexgrid.css");

import Grid from 'react-flexgrid/lib/Grid';
import Row from 'react-flexgrid/lib/Row';
import Col from 'react-flexgrid/lib/Col';

import RaisedButton from 'material-ui/RaisedButton';

import LoanListPresentation from 'js/views/loan/LoanListPresentation';
import LoanApplyPresentation from 'js/views/loan/LoanApplyPresentation';

export default (props) => {
    //console.log(props);
    return (
    <Grid fluid={true}>
        <Row>
            <Col md={6} lg={6}>
                <LoanListPresentation tableData={props.tableData} />
            </Col>
        </Row>
        <Row>
            <Col md={6} lg={6}>
                <RaisedButton label="Apply loan" onClick={props.dialogData.showApplyDialogCallback} />
                <LoanApplyPresentation open={props.dialogData.open}
                                       data={props.dialogData.data}
                                       error={props.dialogData.error}
                                       cancel={props.dialogData.hideApplyDialogCallback}
                                       inputChange={props.dialogData.changeInputApplyDialogCallback}
                                       submit={props.dialogData.submitApplyDialogCallback}/>
            </Col>
        </Row>
    </Grid>
)};

