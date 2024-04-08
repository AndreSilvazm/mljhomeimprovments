import React from 'react';
import Mobile from '../Header/Mobile/index'
import Logo from '../../assets/Logo.webp'
import './style.css'

function index(props) {
    return (
        <header>

            <section className='MobileContainer'>
                <Mobile />

                <span className='TelNumber'>Tel: (631) 614-4708</span>

            </section>

            <section className='LogoContainer'>

                <img src={Logo} alt="Logo"/>

            </section>

        </header>
    );
}

export default index;