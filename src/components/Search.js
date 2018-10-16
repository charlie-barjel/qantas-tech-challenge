import React, { Component } from 'react';
import {getMakes, getModels} from '../data/Api';
import { Link } from 'react-router-dom'

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      makes: [],
      models: [],
      selectedModels: [],
      selectedMake: '',
      selectedModel: ''
    };

    this.handleMakeChange = this.handleMakeChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  handleMakeChange(event) {
    const target = event.target;
    this.setState({
      selectedMake: target.value,
      selectedModel: '',
      selectedModels: this.state.models.filter(m => m.makeId === parseInt(target.value)),
    });
  }

  handleModelChange(event) {
    const target = event.target;
    this.setState({
      selectedModel: this.state.models.find(m => m.id === parseInt(target.value)),
    });
  }

  searchHandler() {
    console.log(this.state.selectedModel);
  }

  render() {

    const makeOptions = this.state.makes.map(m => <option key={m.id} value={m.id}>{m.name}</option>);
    const modelOptions = this.state.selectedModels.map(m => <option key={m.id} value={m.id}>{m.name}</option>);
    const link = "/make/model/" + this.state.selectedModel.id;

    return (<div>
      <select onChange={this.handleMakeChange}>
        <option>Select make</option>
        {makeOptions}
      </select>

      <select onChange={this.handleModelChange}>
        <option>Select model</option>
        {modelOptions}
      </select>

      <div>
        <button disabled={this.state.selectedModel === ''}>
          <Link to={link}>Search</Link>
        </button>
      </div>
    </div>)
  }

  componentDidMount() {
    getMakes().then(data => this.setState({
      makes: data
    }));

    getModels().then(data => this.setState({
      models: data
    }));
  }
}

export default Search;
