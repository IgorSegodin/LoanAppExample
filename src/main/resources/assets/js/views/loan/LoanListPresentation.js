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

import DateUtil from 'js/util/DateUtil';

export default (props) => (
    <Grid fluid={true}>
        <Row>
            <Col md={6} lg={6}>
                <Table selectable={false}>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn tooltip="Amount">Amount</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Application date">Application date</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Expiration date">Expiration date</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} stripedRows={true}>
                        {
                            props.dataList ? (
                                props.dataList.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableRowColumn>{row.amount} $</TableRowColumn>
                                        <TableRowColumn>{DateUtil.formatDateTime(row.applicationDate)}</TableRowColumn>
                                        <TableRowColumn>{DateUtil.formatDateTime(row.expireDate)}</TableRowColumn>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow key="-1">
                                    <TableRowColumn>Data loading...</TableRowColumn>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </Col>
        </Row>
    </Grid>
);

