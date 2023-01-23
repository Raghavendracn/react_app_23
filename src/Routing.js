import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home/Home'
import Header from './Header'
import Footer from './Footer'



const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <hr />
                <Route exact path="/" component={Home} />
            <hr />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing