import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import axios from './AxiosConfiguration'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';



const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};


const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
);


class enterNo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: "",
      open: false,
      checkfrombn: true,
      opendup: false,
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  handleOpendup = () => {
    this.setState({opendup: true});
  };

  handleClosedup = () => {
    this.setState({opendup: false});
  };

  checkexistedtable = (table_id) => {
    axios.get(`/check_id/${String(table_id)}`)
      .then((response) => {
        // console.log("from bn", response)
        this.setState({checkfrombn: response.data})
        // console.log("this is .data", this.state.checkfrombn)
      }).then(()=>{

        if(this.state.checkfrombn === false){
          // console.log("mai dai woiiii")
          this.setState({opendup: true})
        }

        else{
          localStorage.setItem("tableID", parseInt(this.state.input))
          this.props.history.push('/main')
        }

      })
      .catch((error) => {
        console.log(error)
        this.setState({open: true});
      })
  }

  onButtonClick(){

    this.checkexistedtable(parseInt(this.state.input))
  }

  handleTest(e) {
        if (e.charCode == 13) {
          // console.log('Enter... (KeyPress, use charCode)');
          this.onButtonClick()
        }
      }

  render(){

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    const actionsdup = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClosedup}
      />,
    ];

    return(
      <div>
        <TextField
          floatingLabelText="Enter table no"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          value={this.state.input}
          onChange={(e) => this.setState({input: e.target.value})}
          onKeyPress ={(e)=> this.handleTest(e)}
        />

          <p>
            {/* <button type="submit">Submit</button> */}
            <RaisedButton label="Enter" secondary={true} style={style} onClick={()=> this.onButtonClick()} />
            <Dialog
              title="Warning"
              actions={actions}
              modal={true}
              open={this.state.open}
            >
              Please enter only the number
            </Dialog>

            <Dialog
              title="Warning"
              actions={actionsdup}
              modal={true}
              open={this.state.opendup}
            >
              This number is already used
            </Dialog>
          </p>

      </div>
    )
  }
}

export default enterNo;
