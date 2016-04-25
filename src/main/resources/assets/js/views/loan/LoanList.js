
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

 import Table from 'material-ui/Table/Table';
 import TableHeader from 'material-ui/Table/TableHeader';
 import TableBody from 'material-ui/Table/TableBody';
 import TableRow from 'material-ui/Table/TableRow';
 import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
 import TableRowColumn from 'material-ui/Table/TableRowColumn';

 import jQuery from 'jquery';


 class LoanList extends React.Component {

     constructor(props) {
         super(props);
     }

     componentDidMount() {
         //TODO
     }

     render() {
         return (
             <Grid fluid={true}>
                 <Row>
                     <Col>
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
                                     this.props.dataList ? (
                                         this.props.dataList.map((row, index) => (
                                             <TableRow key={index}>
                                                 <TableRowColumn>{row.amount}</TableRowColumn>
                                                 <TableRowColumn>{row.name}</TableRowColumn>
                                                 <TableRowColumn>{row.status}</TableRowColumn>
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
         )
     }
 }

 export default LoanList;

