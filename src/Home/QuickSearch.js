import React, { Component } from 'react'
import './QuickSearch.css'
// import JSON from './meals.json'
import JSON from './QuickSearch.json'
import QuickDisplay from './QuickDisplay'

const QSurl = "http://3.17.216.66:4000/quicksearch";

class QuickSearch extends Component {
    constructor(){
        super();
        this.state={
            mealData:JSON,
            mealDataa:""
        }
    }
    render(){
        return(
            <div id="quickSearch">
            <span id="quickHeading">Quick Search</span>
            <span id="quickSubHeading">Find Restaurants By Meal Type</span>
            <div className="cardMain">
               <QuickDisplay mealType={this.state.mealDataa} />
            </div>
        </div>
        )
    }
   componentDidMount(){
    fetch(QSurl,{method:"GET"})
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        this.setState({mealDataa:data})
    })

   }
}
export default QuickSearch