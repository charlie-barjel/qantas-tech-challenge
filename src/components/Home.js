import React, { Component } from 'react';
import {getCarOfTheWeek, getModelById} from '../data/Api';
import Detail from './Detail';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      carOfTheWeek: {}
    };

    getCarOfTheWeek().then(c => {
      getModelById(c.modelId).then(s =>
      this.setState({
        carOfTheWeek: s
      }))
    });
  }

  render() {
    return (<div>
      <h3>Car of the Week!</h3>
      <Detail id={this.state.carOfTheWeek.id} name={this.state.carOfTheWeek.name} price={this.state.carOfTheWeek.price} imageUrl={this.state.carOfTheWeek.imageUrl}/>
    </div>
      );
  }
}

export default Home;
