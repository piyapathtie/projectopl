import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Menu2 from './Menu2';
import Bar from "./Bar"
import './Menu.css';
import Dessert from './Dessert.js'
import MenuRice from './MenuRice.js'
import Appetizers from './Appetizers.js'
import Salad from './Salad.js'
import Soup from './Soup.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
          <div style={{position: "fixed", width:'100%', zIndex: 10000}}>
          <Bar />
          <Tabs
            style={{backgroundColor: "#E53935"}}
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Appetizers" value={0} style={{backgroundColor: '#fb226e',}} />
            <Tab label="Salad" value={1} style={{backgroundColor: '#fb226e',}}/>
            <Tab label="Soup" value={2} style={{backgroundColor: '#fb226e',}}/>
            <Tab label="Food" value={3} style={{backgroundColor: '#fb226e',}}/>
            <Tab label="Rice & Noodle" value={4} style={{backgroundColor: '#fb226e',}}/>
            <Tab label="Dessert" value={5} style={{backgroundColor: '#fb226e',}}/>
          </Tabs>
          </div>

          <div style={{paddingTop: 40}}>
            <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange}
              >
                <div>
                  <Appetizers/>
                </div>

                <div>
                  <Salad/>
                </div>

                <div>
                  <Soup/>
                </div>

                <div>
                  <Menu2/>
                </div>

                <div>
                  <MenuRice/>
                </div>

                <div>
                  <Dessert/>
                </div>
            </SwipeableViews>
          </div>

      </div>
    );
  }
}
