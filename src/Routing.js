import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home/Home'
import Header from './Header'
import Footer from './Footer'
import Listing from './Listing/ListingDisplay'



const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <hr />
                <Route exact path="/" component={Home} />
                <Route path="/listing:mealId" component={Listing}/>
            <hr />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing