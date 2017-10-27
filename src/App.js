
import React, { Component } from 'react';
import './bootstrap/css/bootstrap.min.css';
import './App.css';
import customerData from './customerData'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    var _this = this;
      _this.setState({
        items: customerData
  });
  }

  render() {
    const renderItems = this.state.items.map(function(item, i) {
      return <li key={i}>{item.name}</li>
    });

    return (
      <ul className="App">
        {renderItems}
      </ul>
    );
  }
}