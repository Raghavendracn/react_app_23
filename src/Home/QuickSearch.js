import React, { Component } from 'react'
import './QuickSearch.css'

class QuickSearch extends Component {
    render(){
        return(
            <div id="quickSearch">
            <span id="quickHeading">Quick Search</span>
            <span id="quickSubHeading">Find Restaurants By Meal Type</span>
            <div className="cardMain">
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="images/dinner.png" alt="breakfast"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Breakfast
                        </div>
                        <div className="componentSubHeading">
                            Start Your Day with Exclusive Breakfast Option
                        </div>
                    </div>
                </div>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="images/drinks.png" alt="breakfast"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Breakfast
                        </div>
                        <div className="componentSubHeading">
                            Start Your Day with Exclusive Breakfast Option
                        </div>
                    </div>
                </div>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="images/snacks.png" alt="breakfast"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Breakfast
                        </div>
                        <div className="componentSubHeading">
                            Start Your Day with Exclusive Breakfast Option
                        </div>
                    </div>
                </div>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="images/nightlife.png" alt="breakfast"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Breakfast
                        </div>
                        <div className="componentSubHeading">
                            Start Your Day with Exclusive Breakfast Option
                        </div>
                    </div>
                </div>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="images/lunch.png" alt="breakfast"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Breakfast
                        </div>
                        <div className="componentSubHeading">
                            Start Your Day with Exclusive Breakfast Option
                        </div>
                    </div>
                </div>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="images/nukkad_pe.jpg" alt="breakfast"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Breakfast
                        </div>
                        <div className="componentSubHeading">
                            Start Your Day with Exclusive Breakfast Option
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
   
}
export default QuickSearch