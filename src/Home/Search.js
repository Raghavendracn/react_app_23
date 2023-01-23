import React, { Component } from 'react'
import './Search.css'

const Lurl = "http://3.17.216.66:4000/location";
const Rurl = "http://3.17.216.66:4000/restaurant?stateId=";
class Search extends Component {
    constructor(){
        super()
        this.state={
           location:'',
           rest:''
        }
    }
    renderCity = (data) => {
        if(data){
            return  data.map((item)=> {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
       
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }
    handleCity = (event)=>{
        // console.log(event.target.value);
        let stateId = event.target.value
        fetch(`${Rurl}${stateId}`,{method:"GET"})
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            this.setState({rest:data})
        })
    }
    render(){
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div className="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----SELECT YOUR CITY----</option>
                       {this.renderCity(this.state.location)}
                    </select>
                    <select id="restDrop">
                        <option>----SELECT YOUR RESTAURANTS----</option>
                        {this.renderRest(this.state.rest)}
                    </select>
                </div>
            </div>
        )
    }
    // api calling on page load
    componentDidMount(){
    fetch(Lurl,{method:'GET'})
    .then((res)=> res.json())
    .then((data)=>{
        // console.log(data)
        this.setState({location:data})
    })
    .catch((err)=>{
        console.log(err);
    })
    }
   
}
export default Search