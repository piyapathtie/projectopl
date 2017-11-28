// import React from "react";
import React from 'react';
import AppBar from 'material-ui/AppBar';
import axios from './AxiosConfiguration'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import * as FontAwesome from 'react-icons/lib/fa'
import {ListItem} from 'material-ui/List';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { browserHistory } from 'react-router';

import './Menu.css';

import Badge from 'material-ui/Badge';
// import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';




// import ListExample from './Cart'


// const iconStyles = {
//   marginRight: 24
// };

const style = {
  margin: 12,
  bottom: 0,
};

// const SvgIconExampleIcons = () => (
//   <div>
//     <ShoppingCart style={iconStyles}/>
//   </div>
// );


function getIndex(value, arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}



class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openLeft: false,
      open: false
    }

  }

  update = (data, elt) => {
    data.splice(getIndex(elt, data),1)
    localStorage.setItem("toCart", JSON.stringify(data))
    this.forceUpdate()
  }

  sendRequest = () => {
    const data = JSON.parse(localStorage.getItem('toCart'))
    // const datatry = JSON.parse({list: data})
    console.log(data)
    axios.post("/order", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })

  }

  getRequest = () => {
    axios.get("/kitchen",{hi: "there"})
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }


  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  handleLeftToggle = () => this.setState({openLeft: !this.state.openLeft});
  handleLeftClose = () => this.setState({openLeft: false});

  // onButtonClick(){
  //   // console.log(this.props);
  //   // console.log(this.state.input);
  //   localStorage.setItem("tableID", parseInt(this.state.input))
  //   this.props.history.push('/menu2')
  // }


  render() {
    let data = JSON.parse(localStorage.getItem('toCart'));
    data = data == null ? [] : data;
    console.log("sss: ", data);
    return (
      <div>

        <div className = "navbar">
        <AppBar
          title="Menu"
          iconElementRight={
            // <Badge badgeContent={data.length} primary={true} badgeStyle={{margin: 0, top: 17, right: 17}}>
              <IconButton><ShoppingCart /></IconButton>
            //</Badge>
          }
          onLeftIconButtonTouchTap={this.handleLeftToggle}
          onRightIconButtonTouchTap={this.handleToggle}
          style={{backgroundColor: '#fb226e',}}
        />
        </div>

        <Drawer docked={false} width={200} open={this.state.openLeft} onRequestChange={(openLeft) => this.setState({openLeft})}>
          <MenuItem onClick={()=>this.props.history.push('/menu2')}>Menu</MenuItem>
          <MenuItem onClick={() => this.props.history.push('/monitor')}>Your Order</MenuItem>
        </Drawer>

        <Drawer docked={false} width={200} openSecondary={true} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <AppBar title="Cart" onClick={this.handleClose} style={{backgroundColor: '#fb226e',}}/>
          {/* {data.map((each) => each.food)} */}

          {data.map((each) => {

            return(
              <ListItem
                // onClick={() => console.log(getIndex(each, data))}
                primaryText = {each.food}
                secondaryText = {each.price}
                rightIconButton={<Cancel onClick={() => this.update(data, each)} />}
                />
              )
            })
          }
          <div className = "finishOrder">
            <RaisedButton label="Order" secondary={true} style={style}
              onClick={this.sendRequest}
            />
          </div>

        </Drawer>

      </div>
    );
  }
}

class Bar extends React.Component {
  render(){

    // console.log("Tabbar: " + localStorage.getItem('tabBarShow'))
    // console.log(!(localStorage.getItem('tabBarShow') == 'true'))
    // console.log(this.props)

    if (!(localStorage.getItem('tabBarShow') === 'true')) {
      return (
        <div></div>
      )
    } else {
      return (
        <Route component={DrawerUndockedExample} />
      );
    }
  }
}

export default Bar;
