import React from 'react';
import './style.css'
import { FaStar } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";


function index(props) {
    return (
        <div className='listMainContainer'>

            <div className='StarContainer flex'>
                <i className='EstrelaIcon'><FaStar/></i>
                <p className='ContainerEstrela'>Estrela</p>
            </div>

            <div className='StarContainer flex'>
                <i className='EstrelaIcon'><FaCalculator/></i>
                <p className='ContainerEstrela'>Estrela</p>

            </div>

            <div className='StarContainer flex'>
                <i className='EstrelaIcon'><CiMail/></i>
                <p>Estrela</p>

            </div>

            <div className='StarContainer flex'>
                <i className='EstrelaIcon'><CiShare2/></i>
                <p className='ContainerEstrela'>Estrela</p>

            </div>


        </div>
    );
}

export default index;