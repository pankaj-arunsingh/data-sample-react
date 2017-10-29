import React, { Component } from 'react';
import CustomerList from './customerList';

class MainContent extends Component {

  render() {
     let mainContainer={
        backgroundColor:'rgb(236, 232, 232)',
        padding:'15px',
        borderLeft:'1px solid #c5c0c0'
      }
    return (
        <div className="col-sm-9 col-xs-12 container" style={mainContainer}>
            <CustomerList/>
        </div>
    );
  }
}

export default MainContent;