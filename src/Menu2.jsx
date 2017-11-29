import React, {Component} from 'react';
import './Menu.css';
import * as FontAwesome from 'react-icons/lib/fa'
import Bar from './Bar.js'
import waterfall from 'async/waterfall';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import TabsExampleSwipeable from './Tab.js';

import SwipeableViews from 'react-swipeable-views';



class EachMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      price: props.price,
      img: props.image,
      kind: props.kind,
    }

    this.state.item = [
    ]
  }

  _buttonClick = () => {

    // Dont do this style!!
    const {kind, name, price, img} = this.state;
    waterfall([
    function(callback) {

        callback(null, localStorage.getItem("toCart"));

    },
    function(items, callback) {
        // console.log(items === null)
        if (items === null) {
          var arr = []
          callback(null, arr)
        }else {
          callback(null, JSON.parse(items))
        }
    },
    function(data, callback) {
      data.push({kind: kind, food: name, price: price, id: parseInt(localStorage.getItem("tableID")), status: "Waiting"});
      callback(null, data);
    },
    function(data, callback) {
        // console.log(data)
        // console.log(JSON.stringify(data))
        // console.log("hi"+data[1].food)
        localStorage.setItem("toCart", JSON.stringify(data))
        // localStorage.setItem("toCart", data)
        callback(null, true);
    }
], function (err, result) {
});

  }

  render(){
    return (
          <div className="recipe">
            <a className="btnStyle3 btnStyle addToCart" id="addToCart" onClick={() =>  this._buttonClick()}>Add to Cart</a>
            {/* <div> */}
            <div className="obj" id={this.state.name} >
              <div> <img src={this.state.img}/> </div>
              <div> <h4>{this.state.name}</h4> - {this.state.price} </div>
            </div>
          </div>
    )
  }
}

class Menu2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          kind: "food",
          image: "/img/food/FRIEDSALMONSTEAK.jpg",
          name: "FRIED SALMON STEAK",
          price: 250
        },
        {
          kind: "food",
          image: "/img/food/FRIEDFILLETWHITESANPPER.jpg",
          name: "FRIEDFILLETWHITESANPPER",
          price: 220
        },
        {
          kind: "food",
          image: "/img/food/SALMONPOTATO.jpg",
          name: "SALMON POTATO",
          price: 280
        },
        {
          kind: "food",
          image: "/img/food/CHICKENFARANG.jpg",
          name: "CHICKEN FARANG",
          price: 250
        },
        {
          kind: "food",
          image: "/img/food/CHICKENLIVER.jpg",
          name: "CHICKEN LIVER",
          price: 220
        },
        {
          kind: "food",
          image: "/img/food/CHICKENPOTATO.jpg",
          name: "CHICKEN POTATO",
          price: 250
        },
        {
          kind: "food",
          image: "/img/food/BAKEDCHICKENLEG.jpg",
          name: "BAKED CHICKEN LEG",
          price: 180
        },
      ]
    }
  }
  render(){
    localStorage.setItem('tabBarShow', 'true');
    return (

      <div>

        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>

            <div className="body-content">
                <div className="recipe-menu">
                  {this.state.menus.map((menu) => {
                    return (<EachMenu kind={menu.kind} name={menu.name} price={menu.price} image={menu.image}/>)
                  })}
                </div>

            </div>

          </div>
          </MuiThemeProvider>

      </div>
    )
  }
}
export default Menu2
