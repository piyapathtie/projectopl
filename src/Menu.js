import React, {Component} from 'react';
import './Menu.css';
import Img from 'react-image'

class Menu extends Component {
  render(){
    return (
      <div>
        <input type="checkbox" id="cartToggle" name="toggle" />
        {/* <!-- Menu --> */}
          <nav class="navbar">
            <h2 id="logo"> Menu </h2>
              <div>
                <label for="cartToggle" class="toggleCart btnStyle btnStyle2">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  {/* <span class="num"></span> */}
                </label>
              </div>
            </nav>
          {/* <!-- End of Navigation -->*/}

        <div class="body-content">

          {/* <!-- Cart --> */}
          <nav class="cart">
            <h3> List of orders: <span>0$</span> </h3>
            <ol id="listOfOrders"></ol>
            <a class="btnStyle btnStyle3 finishOrder">Finish Order</a>
          </nav>

          <div class="recipe-menu">

            {/* <!-- Recipe 1 --> */}
            {/* <div class="recipe">
              <p class="name">Hamburger</p>
              <img src="/img/img4.png"/>
              <a class="btnStyle3 btnStyle addToCart" id="addToCartHamburger">Add to Cart</a>
              <p class="price"><span>9.99</span>$</p>
              <div id="checkOrderHamburger" title="Hamburger">
                {/* <h3 class="listHeading">List of Ingredients:</h3> */}
                {/* <ul class="listOfIngredients" id="recipe1"> </ul>
              </div>
            </div> */}

            {/* <!-- Recipe 2 --> */}
            <div class="recipe">
              <p class="name">Pizza</p>
              <img src="/img/img4.png"/>
              <a class="btnStyle3 btnStyle addToCart" id="addToCartPizza">Add to Cart</a>
              <p class="price"><span>9.99</span>$</p>
              <div id="checkOrderPizza" title="Pizza">
                {/* <h3 class="listHeading">List of Ingredients:</h3> */}
                <ul class="listOfIngredients" id="recipe3"> </ul>
              {/* <a class="btnStyle3 btnStyle addIngredient">Add Ingredient</a>
              <a class="btnStyle listOver">Done</a>
              <h4 class="totalDialog" id="totalDialog3">Total: <span>15</span>$</h4> */}
            </div>
          </div>

          {/* <!-- Recipe 3 --> */}
          <div class="recipe">
            <p class="name">Maccaroni</p>
            <img src="/img/img3.png"/>
            <a class="btnStyle3 btnStyle addToCart" id="addToCartPizza">Add to Cart</a>
            <p class="price"><span>12.99</span>$</p>
            <div id="checkOrderPizza" title="Pizza">
              {/* <h3 class="listHeading">List of Ingredients:</h3> */}
              <ul class="listOfIngredients" id="recipe3"> </ul>
            {/* <a class="btnStyle3 btnStyle addIngredient">Add Ingredient</a>
            <a class="btnStyle listOver">Done</a>
            <h4 class="totalDialog" id="totalDialog3">Total: <span>15</span>$</h4> */}
          </div>
        </div>

        {/* <!-- Recipe 4 --> */}
        <div class="recipe">
          <p class="name">Salad</p>
          <img src= "/img/img1.png"/>
          <a class="btnStyle3 btnStyle addToCart" id="addToCartPizza">Add to Cart</a>
          <p class="price"><span>8.99</span>$</p>
          <div id="checkOrderPizza" title="Pizza">
            {/* <h3 class="listHeading">List of Ingredients:</h3> */}
            <ul class="listOfIngredients" id="recipe3"> </ul>
          {/* <a class="btnStyle3 btnStyle addIngredient">Add Ingredient</a>
          <a class="btnStyle listOver">Done</a>
          <h4 class="totalDialog" id="totalDialog3">Total: <span>15</span>$</h4> */}
        </div>
      </div>

      {/* <!-- Recipe 6 --> */}
      <div class="recipe">
        <p class="name">Spaghetti</p>
        <img src="/img/img2.png"/>
        <a class="btnStyle3 btnStyle addToCart" id="addToCartPizza">Add to Cart</a>
        <p class="price"><span>8.99</span>$</p>
        <div id="checkOrderPizza" title="Pizza">
          {/* <h3 class="listHeading">List of Ingredients:</h3> */}
          <ul class="listOfIngredients" id="recipe3"> </ul>
        {/* <a class="btnStyle3 btnStyle addIngredient">Add Ingredient</a>
        <a class="btnStyle listOver">Done</a>
        <h4 class="totalDialog" id="totalDialog3">Total: <span>15</span>$</h4> */}
        </div>
      </div>


      </div>



    </div>





    {/* <div id="finishOrderDialog" title="Confirm Order">
      <div id="finalOrderList">
        <h3>Your Orders:</h3>
        <ol></ol>
      </div>
      <div id="buyerInfo">
        <input type="text" id="buyerName" placeholder="Enter Name">
        <input type="text" id="buyerNumber" placeholder="Enter Phone Number">
        <input type="text" id="buyerAddress" placeholder="Enter Address">
        <input type="text" id="buyerName" placeholder="Enter Name">
        <a class="btnStyle order">Order!</a>
      </div>
    </div> */}

    {/* <div id="thanksMessage">
      <h1>Thank you for the order</h1>
      <h3>We will have it delivered soon</h3>
    </div> */}


      </div>
    )
  }
}

export default Menu;
