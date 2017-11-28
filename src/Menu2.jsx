import React, {Component} from 'react';
import './Menu.css';
import * as FontAwesome from 'react-icons/lib/fa'
import Bar from './Bar.js'
import waterfall from 'async/waterfall';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';



class EachMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      price: props.price,
      img: props.image
    }

    this.state.item = [
    ]
  }

  _buttonClick = () => {

    // Dont do this style!!
    const {name, price, img} = this.state;
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
      data.push({food: name, price: price, id: parseInt(localStorage.getItem("tableID")), status: "waiting"});
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

class Menu2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          image: "/img/BAKEDLEGOFLAMB.jpg",
          name: "BAKED LEG OF LAMB",
          price: 490
        },
        {
          image: "/img/freshsaltedsalmon.jpg",
          name: "FRESH SALTED SALMON",
          price: 250
        },
        {
          image: "/img/kaoobsaparod.jpg",
          name: "KAO OB SAPAROD",
          price: 190
        },
        {
          image: "/img/kaopad.jpg",
          name: "KAO PAD",
          price: 150
        },
        {
          image: "/img/kaophadphuket.jpg",
          name: "KAO PAD PHUKET",
          price: 180
        },
        {
          image: "/img/nasigoreng.jpg",
          name: "NASI GORENG",
          price: 180
        },
        {
          image: "/img/phadseelew.jpg",
          name: "PHAD SEELEW",
          price: 150
        },
        {
          image: "/img/phadthaikungsod.jpg",
          name: "PHAD THAI KUNG SOD",
          price: 180
        },
        {
          image: "/img/vodkasnack.jpg",
          name: "VODKA SNACK",
          price: 300
        }
      ]
    }
  }
  render(){
    localStorage.setItem('tabBarShow', 'true');
    return (

      <div>

        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <Bar />

            <div className="body-content">
                <div className="recipe-menu">
                  {this.state.menus.map((menu) => {
                    return (<EachMenu name={menu.name} price={menu.price} image={menu.image}/>)
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
