// import React from "react";

import React from 'react';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import * as FontAwesome from 'react-icons/lib/fa'

import './Menu.css';


const iconStyles = {
  marginRight: 24
};

const style = {
  margin: 12,
  bottom: 0,
};

const SvgIconExampleIcons = () => (
  <div>
    <ShoppingCart style={iconStyles}/>
  </div>
);

// const AppBarExampleIcon = () => (
//   <AppBar
//     title="Title"
//     iconClassNameRight="muidocs-icon-navigation-expand-more" onClick = {() => DrawerUndockedExample()}
//   />
// );


class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openLeft: false,
      open: false
    };

  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  handleLeftToggle = () => this.setState({openLeft: !this.state.openLeft});
  handleLeftClose = () => this.setState({openLeft: false});

  render() {
    var idk = localStorage.getItem('addedMenu')
    return (
      <div>

        <div class = "navbar">
        <AppBar
          title="Menu"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<IconButton><ShoppingCart /></IconButton>}
          onLeftIconButtonTouchTap={this.handleLeftToggle}
          onRightIconButtonTouchTap={this.handleToggle}
        />
        </div>


        <Drawer docked={false} width={200} open={this.state.openLeft} onRequestChange={(openLeft) => this.setState({openLeft})}>
          <MenuItem onClick={this.handleLeftClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleLeftClose}>Menu Item 2</MenuItem>
        </Drawer>

        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <AppBar title="Cart" onClick={this.handleClose}/>
          <MenuItem>{localStorage.getItem('toCart')}</MenuItem>

          <div class = "finishOrder">
            <RaisedButton label="Order" secondary={true} style={style} />
          </div>

        </Drawer>


      </div>
    );
  }
}


class Bar extends React.Component {
  render(){

    console.log("Tabbar: " + localStorage.getItem('tabBarShow'))
    console.log(!(localStorage.getItem('tabBarShow') == 'true'))

    if (!(localStorage.getItem('tabBarShow') == 'true')) {
      return (
        <div></div>
      )
    } else {
      return (
        <DrawerUndockedExample />
      );
    }
  }
}

export default Bar;
