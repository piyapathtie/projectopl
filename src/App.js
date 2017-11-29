import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Kitchen from './Kitchen';
// import Menu from './Menu';
// import Menu2 from './Menu2';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import AppBar from 'material-ui/AppBar';
// import './Menu.css';
// import * as FontAwesome from 'react-icons/lib/fa'
// import Bar from "./Bar"
import './first.css'
import { withRouter } from 'react-router-dom'

import {List, ListItem} from 'material-ui/List';
import ForTable from 'material-ui/svg-icons/action/account-circle';
import ForKit from 'material-ui/svg-icons/maps/local-dining';
import Fordessertkit from 'material-ui/svg-icons/social/cake';
import ForCashier from 'material-ui/svg-icons/editor/attach-money';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionGrade from 'material-ui/svg-icons/action/grade';


// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const ListExampleSimple = () => (

    <List>
      <ListItem primaryText="Table" leftIcon={<ForTable />} onClick={()=>this.prop.history.push('/tableno')}/>
      <ListItem primaryText="Kitchen" leftIcon={<ForKit />} />
      <ListItem primaryText="Dessert Kitchen" leftIcon={<Fordessertkit />} />
      <ListItem primaryText="Cashier" leftIcon={<ForCashier />} />
    </List>

);

class choose extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render(){
    return(
      <div style={{width: "25%", left: "37.5%", fontSize: "x-large", position: "absolute"}}>
        <h1>Spice House</h1>
        Please verify your device
        <List>
          <ListItem primaryText="Table"
            leftIcon={<ForTable />}
            onClick={()=>this.props.history.push('/tableno')}
        />
          <ListItem primaryText="Kitchen" leftIcon={<ForKit />} onClick={()=>this.props.history.push('/kitchen')} />
          <ListItem primaryText="Dessert Kitchen" leftIcon={<Fordessertkit />} onClick={()=>this.props.history.push('/dessertkitchen')} />
          <ListItem primaryText="Cashier" leftIcon={<ForCashier />} onClick={()=>this.props.history.push('/cashier')}/>
        </List>
    </div>
    )
  }
}

export default choose;
