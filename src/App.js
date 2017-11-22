import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kitchen from './Kitchen';
import Menu from './Menu';
import Menu2 from './Menu2';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import './Menu.css';
import * as FontAwesome from 'react-icons/lib/fa'
import Bar from "./Bar"
import './first.css'
import { withRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class choose extends React.Component {
  render(){
    return(

      <div class="outer-container">
        <ul class="ui-list">
            <li class="ui-item green">
              <i class="ion-icecream food-icon"></i>
              <Link to="/TableNo"><p>Table</p></Link>
              <i class="ion-ios-arrow-forward"></i>
            </li>
            <li class="ui-item purple">
              <i class="ion-beer food-icon"></i>
              <Link to="/kitchen"><p>Kitchen</p></Link>
              <i class="ion-ios-arrow-forward"></i>
            </li>
          </ul>
        </div>
    )
  }
}

export default choose;
