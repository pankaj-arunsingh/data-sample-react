import React, { Component } from 'react';
import Header from './header';
import TopBar from './topBar'
import SideMenu from './sideMenu';
import MainContent from './mainContent';
import './bootstrap/css/bootstrap.min.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <TopBar/>
       <div className="row no-right-margin">
       <SideMenu/>
       <MainContent/>
       </div>
      </div>
    );
  }
}

export default App;
