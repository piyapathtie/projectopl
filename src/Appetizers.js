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
        console.log(data)
        console.log(JSON.stringify(data))
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

class Appetizers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          kind: "food",
          image: "/img/appetizers/eggplantrolls.jpg",
          name: "EGGPLANT ROLLS",
          price: 190
        },
        {
          kind: "food",
          image: "/img/appetizers/freshsaltedsalmon.jpg",
          name: "FRESH SALTED SALMON",
          price: 250
        },
        {
          kind: "food",
          image: "/img/appetizers/vodkasnack.jpg",
          name: "VODKA SNACK",
          price: 300
        },
        {
          kind: "food",
          image: "/img/appetizers/BOILEDRUSSIANRAVIOLI.jpg",
          name: "BOILED RUSSIAN RAVIOLI",
          price: 200
        },
        {
          kind: "food",
          image: "/img/appetizers/FRIEDRUSSIANRAVIOLI.jpg",
          name: "FRIED RUSSIAN RAVIOLI",
          price: 220
        },
        {
          kind: "food",
          image: "/img/appetizers/VARENIKSWITHPOTATO.jpg",
          name: "VARENIKS WITH POTATO",
          price: 160
        },
        {
          kind: "food",
          image: "/img/appetizers/VARENIKSWITHCOTAGECHEESE.jpg",
          name: "VARENIKS WITH COTAGE CHEESE",
          price: 160
        },
        {
          kind: "food",
          image: "/img/appetizers/BOILEDBEEFTONGUE.jpg",
          name: "BOILED BEEF TONGUE",
          price: 200
        },
        {
          kind: "food",
          image: "/img/appetizers/COLDBOILEDPORKWITHADJIKASAUSE.jpg",
          name: "COLD BOILED PORK WITH ADJIKA SAUSE",
          price: 180
        },
        {
          kind: "food",
          image: "/img/appetizers/CHICKENROLL.jpg",
          name: "CHICKEN ROLL",
          price: 160
        },
        {
          kind: "food",
          image: "/img/appetizers/ASSORTEDMEAT.jpg",
          name: "ASSORTED MEAT",
          price: 320
        },
        {
          kind: "food",
          image: "/img/appetizers/ASSORTEDFRIEDPORKANDCHICKENSAUSAGES.jpg",
          name: "ASSORTED FRIED PORK AND CHICKEN SAUSAGES",
          price: 420
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
export default Appetizers
