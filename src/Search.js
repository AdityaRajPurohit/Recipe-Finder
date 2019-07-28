import React, { Component } from "react";



export default class Search extends Component {

    state = {
      value: ''
    }
  inputChangedHandler = (e) => {
    const state = this.state;
    state.value= e.target.value;
    console.log(this.state);
  }
  onFormSubmitted = (e) => {
    e.preventDefault();
    this.setState(this.state);
    console.log(this.state.value);
  }
  render() {
    return (
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
    );
  }
}
