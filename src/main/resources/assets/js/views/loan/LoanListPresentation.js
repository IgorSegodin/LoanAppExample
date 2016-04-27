/**
 * View representation for Loans table
 * */

import ReactDOM from 'react-dom';
import React from 'react';

//Grid
require("react-flexgrid/lib/flexgrid.css");

import Grid from 'react-flexgrid/lib/Grid';
import Row from 'react-flexgrid/lib/Row';
import Col from 'react-flexgrid/lib/Col';

// Material UI Theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const MuiTheme = getMuiTheme();

import Table from 'material-ui/Table/Table';
import TableHeader from 'material-ui/Table/TableHeader';
import TableBody from 'material-ui/Table/TableBody';
import TableRow from 'material-ui/Table/TableRow';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRowColumn from 'material-ui/Table/TableRowColumn';

import FlatButton from 'material-ui/FlatButton';

import DateUtil from 'js/util/DateUtil';

export default (props) => (
    <Table selectable={false}>
        <TableHeader displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn tooltip="Amount">Amount</TableHeaderColumn>
                <TableHeaderColumn tooltip="Application date">Application date</TableHeaderColumn>
                <TableHeaderColumn tooltip="Expiration date">Expiration date</TableHeaderColumn>
                <TableHeaderColumn tooltip="IP address">IP Address</TableHeaderColumn>
                <TableHeaderColumn tooltip="Actions">Actions</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} stripedRows={true}>
            {
                props.tableData.error ? (
                    <TableRow key="-3">
                        <TableRowColumn><span style={{color: "red"}}>{props.tableData.error}</span></TableRowColumn>
                    </TableRow>
                ) : (
                    // If dataList is null, then it is first loading
                    props.tableData.list ? (
                        props.tableData.list.length > 0 ? (
                            props.tableData.list.map((row, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn>{row.amount} $</TableRowColumn>
                                    <TableRowColumn>{DateUtil.formatDateTime(row.applicationDate)}</TableRowColumn>
                                    <TableRowColumn>{DateUtil.formatDateTime(row.expireDate)}</TableRowColumn>
                                    <TableRowColumn>{row.ipAddress}</TableRowColumn>
                                    <TableRowColumn>
                                        <FlatButton
                                            label="Delete"
                                            primary={true}
                                            onClick={function() {props.tableData.deleteLoanCallback(row.id);}}
                                            />
                                    </TableRowColumn>
                                </TableRow>
                            ))
                        ) : (
                            // empty result
                            <TableRow key="-2">
                                <TableRowColumn>No data available.</TableRowColumn>
                            </TableRow>
                        )
                    ) : (
                        // props.dataList is null
                        <TableRow key="-1">
                            <TableRowColumn>Data loading...</TableRowColumn>
                        </TableRow>
                    )
                )
            }
        </TableBody>
    </Table>
);

