import React, { Component } from 'react';

class TopBar extends Component {

  render() {
      let
      selectedMenu={
          borderRight:'1px solid #c5c0c0',
          borderLeft:'1px solid #c5c0c0',
          paddingLeft:'30px',
          textAlign:'left'
      },
      allOther={
           paddingLeft:'30px',
          textAlign:'left'
      }
    return (
       <div className="row no-right-margin">
  <a href="#" className="btn btn-default col-sm-3 hidden-xs no-radius" style={selectedMenu}>Users</a>
  <a href="#" className="btn btn-default col-sm-9 col-xs-12 no-radius" style={allOther}>All Users
      <div className="col-xs-2 col-sm-1 pull-right"><span className="glyphicon glyphicon-option-vertical"></span></div>
       <div className="col-xs-2 col-sm-1 pull-right"><span className="glyphicon glyphicon-cog"></span></div>
        <div className="col-xs-2 col-sm-1 pull-right"><span className="glyphicon glyphicon-signal"></span></div>
         <div className="col-xs-2 col-sm-1 pull-right"><span className="glyphicon glyphicon-th"></span></div>
  </a>
</div>
    );
  }
}

export default TopBar;