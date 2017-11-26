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
      data.push({food: name, price: price, id: localStorage.getItem("tableID"), status: "waiting"});
      callback(null, data);
    },
    function(data, callback) {
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
          image: "/img/img1.png",
          name: "Pineapple",
          price: "10.00"
        },
        {
          image: "/img/img2.png",
          name: "fish",
          price: "10.10"
        },
        {
          image: "/img/img3.png",
          name: "shell",
          price: "10.10"
        },
        {
          image: "/img/img4.png",
          name: "pork",
          price: "10.10"
        }
      ]
    }
  }
  render(){
    localStorage.setItem('tabBarShow', 'true');
    return (

      <div>

        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Bar />
        {/* </MuiThemeProvider> */}

            <div className="body-content">

                <div className="recipe-menu">
                  {this.state.menus.map((menu) => {
                    return (<EachMenu name={menu.name} price={menu.price} image={menu.image}/>)
                  })}
                </div>

            </div>

          </MuiThemeProvider>

      </div>
    )
  }
}
export default Menu2
