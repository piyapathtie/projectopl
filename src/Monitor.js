import React from 'react';
import Bar from "./Bar"
import axios from './AxiosConfiguration'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import IconButton from 'material-ui/IconButton';




class Monitor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      showCheckboxes: false,
      secondsElapsed: 0,
      open: false,
      sum: 0,
      openthank: false,
      opencancel: false,
      table: String(localStorage.getItem("tableID")),
    }
    this.tick  = this.tick.bind(this)
  }

  tick = () => {
    // console.log("tick")
    // this.fetchData(String(localStorage.getItem("tableID")))
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    this.fetchData(this.state.table);
  }

  componentDidMount = () => {
    this.fetchData(this.state.table);
    this.interval = setInterval(this.tick, 5000);
  }

  componentWillUnmount = () =>{
    clearInterval(this.interval);
  }

  fetchData = (table_id) => {
    console.log("fetch")
    axios.get(`/eachtable/${String(table_id)}`)
      .then((response) => {
        this.setState({data: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  checkout = (table_id) => {
    this.handleOpen()
    axios.get(`/check_out/${String(table_id)}`)
      .then((response) => {
        this.setState({sum: response.data})
        // console.log("try", response.data)
        // console.log(this.state.sum)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  addCashier = (table_id) => {
    this.handleClose()
    this.handleOpenthank()
    axios.post(`/check_out_1/${String(table_id)}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  finish = (table_id) => {
    this.handleClosethank()
    this.props.history.push('/main')
  }


  remove = (uuid) => {
    axios.delete(`/delfood/${String(uuid)}`)
      .then((response) => {
        console.log(response.data)
        if(response.data === false){
          this.handleOpencancel()
        }
        // this.fetchData(String(localStorage.getItem("tableID")));
        // console.log(response)
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

  handleOpenthank = () => {
    this.setState({openthank: true});
  };

  handleClosethank = () => {
    this.setState({openthank: false});
  };

  handleOpencancel = () => {
    this.setState({opencancel: true});
  };

  handleClosecancel = () => {
    this.setState({opencancel: false});
  };


  render(){
    // this.fetchData(String(localStorage.getItem("tableID")));

    localStorage.setItem('tabBarShow', 'true');
    const {data, showCheckboxes, sum} = this.state

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Confirm Checkout"
        primary={true}
        // keyboardFocused={true}
        onClick={() => this.addCashier(String(localStorage.getItem("tableID")))}
      />,
    ];

    const actionsthank = [
      <FlatButton
        label="Dismiss"
        primary={true}
        onClick={() => this.finish(String(localStorage.getItem("tableID")))}
      />,
    ];

    const actionscancel = [
      <FlatButton
        label="Dismiss"
        primary={true}
        onClick={() => this.handleClosecancel()}
      />,
    ];

    return (
      <div>
        {/* {this.state.secondsElapsed} */}
        <Bar />

        <h1 style={{fontSize: "x-large"}}>Table: {this.state.table}</h1>

        <Table
          // style={{ marginTop: "70px"}}
          >
          <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>

          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Cancellation</TableHeaderColumn>

          </TableRow>
        </TableHeader>

          <TableBody displayRowCheckbox={showCheckboxes} style={{ marginTop: "10px"}}>

        {data.map((each) => {
          return(

            <TableRow key={each.UUID}>
              {/* <TableRowColumn>{each.id}</TableRowColumn> */}
              <TableRowColumn>{each.food}</TableRowColumn>
              <TableRowColumn>{each.status}</TableRowColumn>
              <TableRowColumn>

                <IconButton disabled={!(each.status === "Waiting")} onClick={() => this.remove(each.UUID)}>
                  <Cancel />
                </IconButton>

                {/* <IconButton iconClassName='material-ui/svg-icons/navigation/cancel' onClick={() => this.remove(each.UUID)} />  */}
              </TableRowColumn>
            </TableRow>

            )
          })
        }

      </TableBody>
    </Table>

    <RaisedButton
      onClick = {() => this.checkout(String(localStorage.getItem("tableID")))}
      secondary={true}
      style={{ marginTop: "50px", marginLeft: "10px"}}> Checkout </RaisedButton>
      <Dialog
        title="Your Order"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
        autoScrollBodyContent={true}
      >
        {/* <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" displaySelectAll={false} > */}
          {data.map((each) => {
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

      {/* <RaisedButton label="Modal Dialog" onClick={this.handleOpenthank} /> */}
      <Dialog
        title="Thank You"
        actions={actionsthank}
        modal={true}
        open={this.state.openthank}
      >
        The total amout is {`${this.state.sum}`}. Please proceed to the cashier.
      </Dialog>

      <Dialog
        title="Warnning"
        actions={actionscancel}
        modal={true}
        open={this.state.opencancel}
      >
        Sorry, your menu is already cooking
      </Dialog>

      </div>
    )
  }
}

export default Monitor;
