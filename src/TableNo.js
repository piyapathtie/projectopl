import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
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

// const TextFieldExampleCustomize = () => (
// );

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
      input: ""
    }
  }
  onButtonClick(){
    // console.log(this.props);
    // console.log(this.state.input);
    localStorage.setItem("tableID", parseInt(this.state.input))
    this.props.history.push('/menu2')
  }

  render(){
    return(
      <div>
        <TextField
          floatingLabelText="Enter table no"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          value={this.state.input}
          onChange={(e) => this.setState({input: e.target.value})}
        />

        {/* <Link to="/menu2"> */}
          <p>
            <RaisedButton label="Enter" secondary={true} style={style} onClick={()=> this.onButtonClick()}/>
          </p>
        {/* </Link> */}
      </div>
    )
  }
}

export default enterNo;
