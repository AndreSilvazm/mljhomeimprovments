import React from 'react';
import { FaStar } from "react-icons/fa";
import './style.css'

function index(props) {
    return (
        <div>

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner carouselContainer  h-[40vh]">

                    <div class="carousel-item active ItemDoCarousel">


                        <img src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt="" />
                        <h1 className='text-white'>MML</h1>

                        <i className=' flex flex-row w-fit m-auto text-yellow-400'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </i>

                        <p className='text-white w-[80%] m-auto'>
                            Jason's team is professional, capable, gracious and excellent at what they do. They truly do everything they can to make
                            sure that their customer is thrilled with their work. I am very happy that Father of Four was recommended
                        </p>

                    </div>

                    <div class="carousel-item  ItemDoCarousel">


                        <img src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt="" />
                        <h1 className='text-white'>Fay</h1>

                        <i className=' flex flex-row w-fit m-auto text-yellow-300'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </i>

                        <p className='text-white'>
                            We are more than satisfied with the work done by A Father of Four! Not only were they able to start work immediately,
                            but the work done is of the highest quality. Jason is very attentive, honest, fair, and ensures the job is done
                        </p>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default index;