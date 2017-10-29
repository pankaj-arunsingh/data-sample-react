import React, { Component } from 'react';
class Header extends Component {
  
  render() {
       let style={
        display:'block'
    },
    headerStyle={
        float:'none'
    },
    saveButton={
        backgroundColor:'white',
        display:'block'
    }
    return (
        <nav className="navbar-default">
  <div className="container-fluid">
    <div className="navbar-header" style={headerStyle}>
      <button type="button" style={style} className="navbar-toggle pull-left" data-toggle="collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Product Name</a>
     <button type="button" style={saveButton} className="navbar-toggle pull-right" data-toggle="collapse">
        <span className="sr-only">save</span>
        <span className="glyphicon glyphicon-floppy-disk"></span>
      </button>
    </div>
</div>
</nav>
    );
  }
}

export default Header