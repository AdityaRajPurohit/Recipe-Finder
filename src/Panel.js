import React, { Component } from 'react'
import './Panel.css';
import './Search';

export default class TitleBar extends Component {
    render() {
        // console.log("Panel:" + this.props.data.meals);
        return (
            <div className="jumbotron box" >
                <div className="container-fluid">
                    {/* Title */}
                    <div className="alert alert-info head">
                        <a href="#" className="alert-link text-white"><h2 >Name of the dish</h2></a>
                    </div>
                    {/* Content */}
                    <div className="card mb-3 " style={{ maxWidth: "540" }}>
                        <div className="row no-gutters jumbotron text-white bg-primary">
                            {/* Iamge */}
                            <div className=" image-container" >
                                <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/wpputp1511812960.jpg" className="card-img" alt="food item" />
                            </div>


                            {/* Right Item */}
                            <div className="col-md-8 containt-box  bg-primary text-white">
                                <div className="card-body">
                                    <div>
                                        <ul className="list-group" >
                                            <li className="list-group-item list1" >The category of the meal</li>
                                            <li className="list-group-item list1">The area of the meal</li>
                                        </ul>
                                        <div>
                                            <div className="scrollable " style={{ height: 250 }}>
                                                <ul className="list-group">
                                                    <li className="list-group-item list1">
                                                        Cras justo odio
                                                        <span className="badge badge-primary badge-pill">14</span>
                                                    </li>
                                                    <li className="list-group-item list1">Dapibus ac facilisis in
                                                        <span className="badge badge-primary badge-pill">14</span>
                                                    </li>

                                                    <li className="list-group-item list1">Porta ac consectetur ac
                                                        <span className="badge badge-primary badge-pill">14</span>
                                                    </li>
                                                    <li className="list-group-item list1">Vestibulum at eros
                                                        <span className="badge badge-primary badge-pill">14</span>
                                                    </li>
                                                    <li className="list-group-item list1">Vestibulum at eros
                                                        <span className="badge badge-primary badge-pill">14</span>
                                                    </li>
                                                    <li className="list-group-item list1">Vestibulum at eros
                                                        <span className="badge badge-primary badge-pill">14</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recipe */}
                        <div className="card col-md-12 Recipe-box  bg-primary">
                            <h2 >Recipe</h2>
                            <div className=" scrollable Recipe  text-white">
                                he title of the meal should be mentioned in bold, similar to a panel header. There should be a heart emoji beside
                                the title that acts as a ‘like’ button for a particular recipe/meal. If you like that recipe/meal, you can click on
                                 the heart button, which will tThen turn red. Clicking on the heart button again should ‘unlike’ the recipe/meal.
                                 This should happen for all the meals independently
                                 he title of the meal should be mentioned in bold, similar to a panel header. There should be a heart emoji beside
                                the title that acts as a ‘like’ button for a particular recipe/meal. If you like that recipe/meal, you can click on
                                 the heart button, which will tThen turn red. Clicking on the heart button again should ‘unlike’ the recipe/meal.
                                 This should happen for all the meals independently

                                 he title of the meal should be mentioned in bold, similar to a panel header. There should be a heart emoji beside
                                the title that acts as a ‘like’ button for a particular recipe/meal. If you like that recipe/meal, you can click on
                                 the heart button, which will tThen turn red. Clicking on the heart button again should ‘unlike’ the recipe/meal.
                                 This should happen for all the meals independently
                            </div>
                        </div>
                    </div>


                </div>
            </div >
        )
    }
}
