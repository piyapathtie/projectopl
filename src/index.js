import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kitchen from './Kitchen';
import Menu from './Menu';
import Menu2 from './Menu2';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import './Menu.css';
import * as FontAwesome from 'react-icons/lib/fa'
import Bar from "./Bar"
import './first.css'
import { withRouter } from 'react-router-dom'
import choose from "./App"
import enterNo from './TableNo';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

function Square(){

  // setter
  // localStorage.setItem('tabBarShow', 'true');


  return (
    <div>

    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      {localStorage.setItem('tabBarShow', 'false')}
      <Bar />
      <Router>
        <div>
          <Route path="/" exact component={choose} />
          <Route path="/kitchen" exact component={Kitchen} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/menu2" exact component={Menu2} />
          <Route path="/tableno" exact component={enterNo} />
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
