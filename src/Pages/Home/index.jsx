import React from 'react';
import Header from '../../Components/Header/index'
import LandingPage from '../Home/LandingPage/index'
import EstimateContainer from './EstimateContainer/index'
import AboutUs from './AboutUs/index'
import Products from './Products/index'
import Reviews from './Reviews/index'
import Footer from './Footer/index'
import Aside from '../../Components/AsideTools/index'

function index() {
    return (

        <>
            <Header/>
            <LandingPage/>
            <Aside/>
            <EstimateContainer/>
            <AboutUs/>
            <Products/>
            <Reviews/>
            <Footer/>
            
        </>
    );
}

export default index;