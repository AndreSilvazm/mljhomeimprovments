import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import './style.css'



function index(props) {
    return (
        <footer className='flex flex-row items-start bg-black text-white p-2'>

            <address className='w-1/3 text-center flex flex-col justify-center items-center '>
                <i>
                    <IoLocationSharp />

                </i>
                <h1 className='uppercase'>Serving</h1>

                <p>
                    Nassau County, NY

                </p>

                <p>
                    Suffolk County, NY

                </p>

                <p>
                    and surrounding areas


                </p>
            </address>


            <div className='w-1/3 text-center flex flex-col justify-center items-center'>
                <i className='w-fit m-auto mb-2'>
                    <FaCalendarAlt />

                </i>
                <h1 className='uppercase border-b '>Hours</h1>

                <p>Mon-Fri | 7:30 am - 4:30pm</p>
            </div>



            <div className='w-1/3 flex  flex-col justify-center'>

                <i className='w-fit m-auto mb-2'><BsFillTelephoneFill />
                </i>

                <h1 className='m-auto uppercase border-b mb-3'>Contact</h1>

                <div className='grid grid-cols-2 gap-x-4 gap-y-3  '>



                    <div>

                        <h2 className='uppercase'>Mobile</h2>
                        <p>(631) 579-0985</p>
                    </div>

                    <div>
                        <h2 className='uppercase'>Text</h2>
                        <p>(631) 579-0985</p>

                    </div>

                    <div>

                        <h2 className='uppercase'>Email</h2>
                        <p>jasonzehner@icloud.com</p>
                    </div>



                </div>

            </div>

        </footer>
    );
}

export default index;