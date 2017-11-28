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
// import { BrowserRouter as Router, Route } from 'react-router-dom'

class Monitor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.fetchData(String(localStorage.getItem("tableID")))
  }


  fetchData = (table_id) => {
    axios.get(`/eachtable/${String(table_id)}`)
      .then((response) => {
        this.setState({data: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render(){
    console.log(String(localStorage.getItem("tableID")) === '5')
    localStorage.setItem('tabBarShow', 'true');
    const {data, showCheckboxes} = this.state
    console.log(data)

    return (
      <div>
        <Bar />

        <Table>
          <TableHeader displayRowCheckbox={showCheckboxes}>

          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>

          <TableBody displayRowCheckbox={showCheckboxes}>

        {data.map((each) => {
          return(

            <TableRow key={each.UUID}>
              <TableRowColumn>{each.id}</TableRowColumn>
              <TableRowColumn>{each.food}</TableRowColumn>
              <TableRowColumn>{each.status}</TableRowColumn>
              <TableRowColumn> <RaisedButton onClick={() => console.log(each)}/> </TableRowColumn>
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

export default Monitor;
