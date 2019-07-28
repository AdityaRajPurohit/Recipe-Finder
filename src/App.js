import React, { Component } from 'react'
import Heading from './Heading';
import Search from './Search';
import HeadBar from './HeadBar';
import Menu from './Menu';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            disableDiv:true
        };
    }
    render() {
        var divStyle ={
            display:this.state.disableDiv?'block':'none'
        };
        return (
            <div>
            <Heading />
            <Search />
            <HeadBar /> 
            <Menu style={divStyle}/>
            </div>
        )
    }
}
