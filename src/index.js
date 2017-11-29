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
import DrawerUndockedExample from "./Bar"
import Bar from "./Bar"
import './first.css'
import { withRouter } from 'react-router-dom'
import choose from "./App"
import enterNo from './TableNo';
import Monitor from './Monitor';
import Dessert from './Dessert';
// import App from './Cart'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Cashier from './Cashier'

function Square(){

  // setter
  // localStorage.setItem('tabBarShow', 'true');


  return (
    <div>

    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          {localStorage.setItem('tabBarShow', 'false')}
          <Bar />
          <Router>
            <div>
              <Route path="/" exact component={choose} />
              <Route path="/kitchen" exact component={Kitchen} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/menu2" exact component={Menu2} />
              <Route path="/tableno" exact component={enterNo} />
              <Route path="/monitor" exact component={Monitor} />
              <Route path="/cashier" exact component={Cashier} />
              <Route path="/dessert" exact component={Dessert} />
              {/* <Route component={Bar} /> */}
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

ReactDOM.render(
  <Square />,
  document.getElementById('root')
);
