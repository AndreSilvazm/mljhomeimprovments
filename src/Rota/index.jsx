import React from 'react';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/index'
import AboutPage from '../Pages/AboutPage/index'

function index(props) {

    
    return (
        <div>

            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/About' element={<AboutPage/>}/>
                </Routes>
            </Router>
            
        </div>
    );
}

export default index;