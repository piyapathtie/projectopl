import React, {Component} from 'react';
import './Menu.css';
import * as FontAwesome from 'react-icons/lib/fa'
import Bar from './Bar.js'
// import Square from './index.js';


var HashMap = require('hashmap');
var map = new HashMap();
// map.set("name", "Tie");

class EachMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      price: props.price,
      img: props.image
    }
  }

    // items[1] = { name: '', populate_at: '', same_as: '',
    //              autocomplete_from: '', title: '' };
    // items[2] = { name: '', populate_at: '', same_as: '',
    //              autocomplete_from: '', title: '' };

  _buttonClick = () => {
    // console.log(this.state.name, "Clicked!")
    localStorage.setItem("try", "tie")
    // map.set({name: this.state.name, price: this.state.price})
    // console.log(map.keys())
    localStorage.setItem("toCart", map.set({name: this.state.name, price: this.state.price}))
    console.log(map.keys())
    console.log(map)
    // console.log(localStorage.getItem('cart').key())
  }

  render(){
    return (
          <div className="recipe">
            <a className="btnStyle3 btnStyle addToCart" id="addToCart" onClick={() =>  this._buttonClick()}>Add to Cart</a>
            {/* <div> */}
            <div className="obj" id={this.state.name} onClick={() => console.log(this.state.name, " Clicked")}>
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
    localStorage.setItem('tabBarShow', 'false');
    return (
      <div>

            <div className="body-content">

                <div className="recipe-menu">
                  {this.state.menus.map((menu) => {
                    return (<EachMenu name={menu.name} price={menu.price} image={menu.image}/>)
                  })}
                </div>

            </div>


      </div>
    )
  }
}
export default Menu2
