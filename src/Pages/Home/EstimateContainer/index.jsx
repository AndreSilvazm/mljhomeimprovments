import React from 'react';
import './style.css'
import img1 from '../../../assets/Carousel/img1.jpg'
import img2 from '../../../assets/Carousel/img2.jpg'
import img3 from '../../../assets/Carousel/img3.jpg'


function index(props) {
    return (
        <section className='EstimateContainer'>


            <section className='FormContainer'>

                <article className='CarouselContainer'>

                </article>


                <article className='RequestEstimateContainer'>
                    <h1>Request a Free Estimate</h1>
                    <span>
                        $1,000 Off Any Job Over $10,000
                    </span>

                    <form action="" className='w-[100%] flex flex-col' id='MainForm' >
                        
                        <input type="text" placeholder='Full name' />

                        <input type="tel" placeholder='Phone' />

                        <input type="email" placeholder='E-mail' />

                        <label htmlFor="Options">Services</label>
                        <select name="Options" id="">

                            <option value=""></option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>

                        <button>
                            Request
                        </button>


                    </form>
                </article>
            </section>


        </section>
    );
}

export default index;