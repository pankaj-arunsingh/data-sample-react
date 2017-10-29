import React, { Component } from 'react';
import customerData from './customerData';
class CustomerList extends Component {
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

        let
            containerFluid = {
                backgroundColor: '#ffffff',
                padding: '0px',
                border: '1px solid #cccccc',
                boxShadow: '0 10px 6px -6px #777'
            },
            searchIcon = {
                top: '0px',
                backgroundColor: '#ffffff',
                border: '0px',
                borderRadius: '0px',
                borderBottom: '1px solid #cccccc',
            },
            searchBox = {
                border: '0px',
                borderBottom: '1px solid #cccccc',
                borderRadius: '0px'
            },
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

        const renderItems = this.state.items.map(function (item, i) {
            return <div className="row" key={i} style={listItem}>
                <div className="col-xs-2 col-sm-1" style={userCont}><div style={circleDiv}><span className="glyphicon glyphicon-user" style={userImage}></span></div></div>
                
                <div className="col-xs-8 col-sm-5"><b>{item.name}</b>
                    <div className="col-xs-12 text-muted" style={noRLPadding}>{item.email}</div>
                    <div className="col-xs-12 text-muted visible-xs" style={noRLPadding}>last login: {item.duration}</div>
                </div>
                <div className="col-xs-3 text-muted hidden-xs">{item.date}</div>
                <div className="col-xs-2 text-muted hidden-xs">{item.duration}</div>
                <div className="col-xs-2 col-sm-1"><span className="glyphicon glyphicon-option-vertical"></span></div>
           
            </div>
        });
        return (
            <section className="container-fluid" style={containerFluid}>
                <div className="input-group">
                    <span className="input-group-addon glyphicon glyphicon-search" style={searchIcon}></span>
                    <input type="text" className="form-control" placeholder="Search" style={searchBox} />
                </div>
                {renderItems}
            </section>
        );
    }
}

export default CustomerList;