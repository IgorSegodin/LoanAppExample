/**
 * View representation for create loans dialog
 * */

import ReactDOM from 'react-dom';
import React from 'react';

//Grid
require("react-flexgrid/lib/flexgrid.css");

import Grid from 'react-flexgrid/lib/Grid';
import Row from 'react-flexgrid/lib/Row';
import Col from 'react-flexgrid/lib/Col';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import DateUtil from 'js/util/DateUtil';

export default (props) => (
    <Dialog title="Create new loan application"
            actions={[
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onClick={props.cancel}
                        />,
                    <FlatButton
                        label="Submit"
                        primary={true}
                        onClick={props.submit}
                        />
                ]}
            modal={false}
            autoScrollBodyContent={true}
            open={props.open}>

        <Grid fluid={true}>
            {
                props.error ? (
                    <Row>
                        <Col>
                            <span style={{color: "red"}}>{props.error}</span>
                        </Col>
                    </Row>

                ) : null
            }
            <Row>
                <Col>
                    <TextField name="amount"
                               floatingLabelText="Amount"
                               value={props.data.amount}
                               onChange={function(nill, value) {
                                    props.inputChange({amount: value});
                               }}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DatePicker name="expireDate"
                                hintText="Expiration date"
                                minDate={new Date()}
                                value={props.data.expireDate ? DateUtil.parseDateTime(props.data.expireDate) : null}
                                onChange={function(nill, date) {
                                    props.inputChange({expireDate: DateUtil.formatDateTime(date)});
                                }}
                                autoOk={true}/>
                </Col>
            </Row>
        </Grid>
    </Dialog>
)