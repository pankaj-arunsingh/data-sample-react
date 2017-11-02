import React, { Component } from 'react';
//import customerData from './customerData';
import ListItem from './listItem';
var customerData=[];
class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    fetchData(){
        let _this=this;
        return fetch('http://localhost:3010/customerData')
		.then(function(res){
            return res.json();
        }).then(function(myRes){
            customerData=myRes;
            _this.setState({items:myRes});
        }).catch(function(error){
            console.log(error);
        });
    }
    componentWillMount() {
        this.fetchData();
    }
    filterList(event) {
        let nameList = customerData.map(function (item) {
            return item.name;
        });
        console.log("nameList "+nameList);
        let updatedNameList = nameList.filter(function (item) {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        console.log("updatedNameList "+updatedNameList);
        let updatedList =[];
        customerData.forEach(function (item) {
            if(updatedNameList.length!==0){
                updatedNameList.forEach(function(element) {
                   if(element===item.name){
                       updatedList.push(item);
                   }
                });
            }
        });
        console.log("updatedList "+updatedList)
        this.setState({ items: updatedList !== null ? updatedList : [] });
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
                <ListItem items={this.state.items} />
            </section>
        );
    }
}

export default CustomerList;