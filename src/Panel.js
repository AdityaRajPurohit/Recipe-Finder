import React, { Component } from 'react'
import './Panel.css';
import HeadBar from './HeadBar';

export default class TitleBar extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#FBE3CF" }}>
                <div className="container-fluid">
                    {/* Title */}
                    <div className="alert alert-info" role="alert">
                        <a href="#" className="alert-link">{this.props.data.meals.name}</a>
                    </div>
                    {/* Content */}
                    <div className="card mb-3" >
                        <div className="row no-gutters">
                            {/* Iamge */}
                            <div className="col-md-4">
                                <img src="..." className="card-img" alt="..." />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        )
    }
}
