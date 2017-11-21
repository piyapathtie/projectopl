import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kitchen from './Kitchen';
import Menu from './Menu';
import Menu2 from './Menu2';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import './Menu.css';
import * as FontAwesome from 'react-icons/lib/fa'
import Bar from "./Bar"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

function Square(){

  // setter
  localStorage.setItem('tabBarShow', 'true');

  // getter


  return (
      <div>




    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Bar />
      <Router>
        <div>
          <Route path="/kitchen" exact component={Kitchen} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/menu2" exact component={Menu2} />
          <Route path="/bar" exact component={Bar} />
        </div>
      </Router>
      </MuiThemeProvider>
    </div>
  );
}

ReactDOM.render(
  <Square />,
  document.getElementById('root')
);
