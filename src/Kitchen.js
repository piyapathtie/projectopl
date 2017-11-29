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
import AppBar from 'material-ui/AppBar';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';



class Kitchen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCheckboxes: false,
      data: [],
      secondsElapsed: 0,
    }
    this.tick  = this.tick.bind(this)
  }

  tick = () => {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    this.fetchData();
  }

  componentDidMount() {
    // this.fetchData()
    this.tick()
    this.interval = setInterval(this.tick, 5000);
  }

  componentWillUnmount = () =>{
    clearInterval(this.interval);
  }

  updateItemStatus = (uuid, status) => {
    axios.put(`/update_kitchen/${uuid}/${status}`)
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
    axios.get("/kitchen")
      .then((response) => {
        this.setState({data: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render(){
    // data = data == null ? [] : data;
    const {data, showCheckboxes} = this.state
    // console.log("this is data : ", data);
    return (
      <div >

        <AppBar
          title="Kitchen"
          style={{backgroundColor: "#D50000"}}
          iconElementLeft={<icon/>}
          // iconClassNameRight="muidocs-icon-navigation-expand-more"
        />


        <Table style ={{top: "100px"}}>
          <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>

          <TableRow>
            <TableHeaderColumn>Table Number</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Button</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>

          <TableBody displayRowCheckbox={showCheckboxes}>

        {data.map((each) => {
          return(

            <TableRow key={each.UUID}>
              <TableRowColumn>{each.id}</TableRowColumn>
              <TableRowColumn>{each.food}</TableRowColumn>
              <TableRowColumn>
                {/* {<DropDownMenuOpenImmediateExample />} */}
                <MenuItem  primaryText="Waiting" onClick={() => this.updateItemStatus(each.UUID, "Waiting")}/>
                <MenuItem  primaryText="Cooking" onClick={() => this.updateItemStatus(each.UUID, "Cooking")}/>
                <MenuItem  primaryText="Done" onClick={() => this.updateItemStatus(each.UUID, "Done")}/>
              </TableRowColumn>
              <TableRowColumn>{each.status}</TableRowColumn>
              {/* <TableRowColumn> <RaisedButton onClick={() => console.log(each)}/> </TableRowColumn> */}
            </TableRow>

            )
          })
        }

      </TableBody>
    </Table>

      </div>
    )
  }
}

export default Kitchen;
