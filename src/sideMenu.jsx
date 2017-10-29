import React, { Component } from 'react';
class SideMenu extends Component {

  render() {
    return (
        <div className="col-sm-3 hidden-xs">
          <ul className="nav nav-pills nav-stacked">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span>All Users</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-star"></span>Favourites</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-th-large"></span>Administrators</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-globe"></span>Non-Admins</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-trash"></span>Archived</a></li>
          </ul>
        </div>
    );
  }
}

export default SideMenu