import React, { Component } from 'react';
import customerData from './customerData';
import ListItem from './listItem';
class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentWillMount() {
        var _this = this;
        _this.setState({
            items: customerData
        });
    }
    filterList(event){
        var nameList=this.state.items.map(function(item){
            return item.name;
        });
        var updatedNameList=nameList.filter(function(item){
            return item.toLowerCase().search(
                event.target.value.toLowerCase())!==-1;
        });
        var updatedList=this.state.items.map(function(item,i){
             if(item.name===updatedNameList[i]){return item;}
        })
        this.setState({items:updatedList!==null?updatedList:[]});
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
            };

        return (
            <section className="container-fluid" style={containerFluid}>
                <div className="input-group">
                    <span className="input-group-addon glyphicon glyphicon-search" style={searchIcon}></span>
                    <input type="text" className="form-control" placeholder="Search" style={searchBox} onChange={this.filterList.bind(this)} />
                </div>
                <ListItem items={this.state.items}/>
            </section>
        );
    }
}

export default CustomerList;