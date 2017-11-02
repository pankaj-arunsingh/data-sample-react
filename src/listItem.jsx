import React, { Component } from 'react';
class ListItem extends Component {

  render() {
    let
    circleDiv = {
        width: '30px',
        height: '30px',
        border: '1px solid #cccccc',
        borderRadius: '50%',
        backgroundColor: "#cccccc",
        textAlign: 'center'
    },
    userImage = {
        verticalAlign: 'middle'
    },
    listItem = {
        marginTop: '15px',
        marginBottom: '15px',
        marginLeft: '0px',
        paddingTop: '10px',
        marginRight:'0px'
    },
    noRLPadding = {
        paddingLeft: '0px',
        paddingRight: '0px'
    },
    userCont={
        marginTop:'5px'
    };
    return this.props.items.map(function (item, i) {
        return <div className="row" key={i} style={listItem}>
            <div className="col-xs-2 col-sm-1" style={userCont}><div style={circleDiv}><span className="glyphicon glyphicon-user" style={userImage}></span></div></div>
            
            <div className="col-xs-8 col-sm-5"><b>{item?item.name:""}</b>
                <div className="col-xs-12 text-muted" style={noRLPadding}>{item?item.email:""}</div>
                <div className="col-xs-12 text-muted visible-xs" style={noRLPadding}>last login: {item?item.duration:""}</div>
            </div>
            <div className="col-xs-3 text-muted hidden-xs">{item?item.date:""}</div>
            <div className="col-xs-2 text-muted hidden-xs">{item?item.duration:""}</div>
            <div className="col-xs-2 col-sm-1"><span className="glyphicon glyphicon-option-vertical"></span></div>
       
        </div>
    });
  }
}

export default ListItem;