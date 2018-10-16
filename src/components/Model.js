import React, {Component} from 'react';
import {getModelById} from '../data/Api';
import Detail from './Detail';

class Model extends Component {

  constructor(props) {
    super(props);

    this.state = {
      model: {}
    };

    getModelById(parseInt(props.match.params.id)).then(m => {
      this.setState({model: m});
    });
  }

  render() {

    if (this.state.model) {
      return (<div>
        <p>Result</p>
        <Detail id={this.state.model.id} name={this.state.model.name} price={this.state.model.price} imageUrl={this.state.model.imageUrl}/>
      </div>);
    }

    return <p>Sorry, car not found!</p>;
  }
}

export default Model;
