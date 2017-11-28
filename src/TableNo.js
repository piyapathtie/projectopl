import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class DialogExampleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Warning"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Please enter only the number
        </Dialog>
      </div>
    );
  }
}


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
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  onButtonClick(){
    // console.log(this.props);
    console.log(Number.isInteger(parseInt(this.state.input)));
    if(!Number.isInteger(parseInt(this.state.input))){
      // console.log("do something")
      this.setState({open: true});

    }
    else{
      localStorage.setItem("tableID", parseInt(this.state.input))
      this.props.history.push('/menu2')
    }

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
          </p>

      </div>
    )
  }
}

export default enterNo;
