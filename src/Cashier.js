import React from 'react';
import axios from './AxiosConfiguration'
import {List, ListItem} from 'material-ui/List';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Cancel from 'material-ui/svg-icons/navigation/cancel';

// import MobileTearSheet from '../../../MobileTearSheet';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';


class Cashier extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCheckboxes: false,
      data: [],
      secondsElapsed: 0,
      toshow: [],
      sum: 0,
    }
    this.tick  = this.tick.bind(this)
  }

  tick = () => {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    this.fetchData();
  }

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick, 5000);
  }

  componentWillUnmount = () =>{
    clearInterval(this.interval);
  }

  updateItemStatus = (uuid, status) => {
    // console.log(uuid)
    // console.log(status)
    axios.post(`/cashier_update/${uuid}/${status}`)
      .then((response) => {
        this.fetchData()
        // console.log(response.data);
        // console.log("update complete")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  fetchData = () => {
    console.log("fetch")
    axios.get(`/cashier`)
      .then((response) => {
        this.setState({data: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  checklst = (tableid, amount) => {
    this.setState({sum: amount})
    this.handleOpen()
    axios.get(`/info_cashier/${tableid}`)
      .then((response) => {
        this.setState({toshow: response.data})
        // this.setState({toshow: response})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render(){
    // data = data == null ? [] : data;
    const {data, showCheckboxes, toshow, sum} = this.state
    // console.log("this is data : ", data);

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Print"
        primary={true}
        // keyboardFocused={true}
        // onClick={() => this.addCashier(String(localStorage.getItem("tableID")))}
      />,
    ];

    return (
      <div>

        <AppBar
          title="Cashier"
          style={{backgroundColor: "#D50000"}}
          iconElementLeft={<icon/>}
          // iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <Table>
          <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>

          <TableRow>
            <TableHeaderColumn>Table ID</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>View Status</TableHeaderColumn>
            <TableHeaderColumn>Update Status</TableHeaderColumn>
            <TableHeaderColumn>Current Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>

          <TableBody displayRowCheckbox={showCheckboxes}>

        {data.map((each) => {
          return(

            <TableRow key={each.UUID}>
              <TableRowColumn>{each.id}</TableRowColumn>
              <TableRowColumn>{each.amount}</TableRowColumn>
              <TableRowColumn>
                <MenuItem  primaryText="View"
                  // onClick={() => this.updateItemStatus(each.UUID, "Paid")}
                  onClick = {() => this.checklst(each.id, each.amount)}
                  // onClick={()=>console.log(data)}
                />
              </TableRowColumn>

              <TableRowColumn>

                <MenuItem  primaryText="Paid"
                  onClick={() => this.updateItemStatus(each.UUID, "Paid")}
                  // onClick = {() => this.checklst(each.id, each.amount)}
                  // onClick={()=>console.log(data)}
                />

              </TableRowColumn>
              <TableRowColumn>{each.status}</TableRowColumn>
              {/* <TableRowColumn> <RaisedButton onClick={() => console.log(each)}/> </TableRowColumn> */}
            </TableRow>

            )
          })
        }

      </TableBody>
    </Table>

      <Dialog
        title="Your Order"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
        autoScrollBodyContent={true}>
        {/* <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" displaySelectAll={false} > */}
          {toshow.map((each) => {
            return(
              <ListItem
                primaryText = {each.food}
                // secondaryText = {each.price}
                rightAvatar = {<FlatButton label= {each.price}/>}
                />
              )
            })
          }
          <ListItem primaryText = "Total Amount: " rightAvatar = {<FlatButton label = {this.state.sum}/>}/>
        {/* </RadioButtonGroup> */}
      </Dialog>

      </div>
    )
  }
}

export default Cashier;
