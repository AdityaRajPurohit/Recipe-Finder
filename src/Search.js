import React, { Component } from "react";
import HeadBar from './HeadBar';



export default class Search extends Component {

    state = {
      value: '',
      controller: 1,
      divValue:1
    }
  inputChangedHandler = (e) => {
    const state = this.state;
    state.value= e.target.value;
    console.log(this.state);
  }
  async onFormSubmitted(e){
    e.preventDefault();
    this.setState(this.state);
    console.log(this.state.value);
    console.log("from :"+this.state.value);
    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.value}`;
    const r=await fetch(url);
    const result=await r.json();
    if(result.meals === null){
      this.setState({divValue:2});
      console.log(this.state.divValue);
    }
    else{
      this.setState({divValue:3});
      console.log(this.state.divValue);
    }
  }
  display(){
    if(this.state.divValue === 1){
        return <HeadBar content="Type a Dish Name to Search for its Ingredients"/>
    }
    if(this.state.divValue === 2){
        return <HeadBar content="No Data has been received"/>
    }
    
        
}
  
  render() {
    return (
      <div>
      <div className="container">
        <br/>
        <form className="card-sm" onSubmit={this.onFormSubmitted.bind(this)}>
          <div className="card-body row align-items-center">
            <div className="col">
              <input
                className="form-control form-control-borderless"
                type="search"
                placeholder="Enter the Name of Dish"
                onChange={this.inputChangedHandler}
                
              />
            </div>
            <div className="col-auto">
              <button className="btn  btn-primary" type="submit" >
                Get Ingredients
              </button>
            </div>
          </div>
        </form>
      </div>

      {this.display()}

      </div>

    );
    
  }
}
