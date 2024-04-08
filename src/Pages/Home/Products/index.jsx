import React from 'react';
import domersImg from '../../../assets/Products/domers.webp' 
import extensionsImg from '../../../assets/Products/extensions.webp' 
import kitchenImg from '../../../assets/Products/kitchen.webp' 
import bathroomImg from '../../../assets/Products/batnroom.webp' 
import windowsImg from '../../../assets/Products/windows.webp' 
import doorsImg from '../../../assets/Products/doors.webp' 

import './style.css'


function index(props) {
    return (
        <section className=' text-center  my-5 grid grid-cols-1 gap-y-10  md:grid-cols-3 md:w-[80%] m-auto md:gap-x-10 MainSection'>

            <article className='w-full '>
                <img src={domersImg}  alt="bathroom" className='w-[90%]  rounded-xl  '  />

                <h1>Dormers</h1>

                <p>Attention to detail is extremely important to us and we take great pride in the final results when it comes to installing new dormer roof windows or any other project.</p>

                <a href="" className='rounded-sm'>Learn More</a>

            </article>

            <article className='w-full '>
                <img src={extensionsImg}  alt="bathroom" className='w-[90%]  rounded-xl  '  />

                <h1>Extensions</h1>

                <p>You can trust that when building and designing your new home extension or addition, you will be given our full attention and the work will be of the highest quality. </p>

                <a href="" className='rounded-sm'>Learn More</a>

            </article>

            <article className='w-full '>
                <img src={kitchenImg}  alt="bathroom" className='w-[90%]  rounded-xl  '  />

                <h1>Kitchen Remodeling</h1>

                <p>Run by an actual father of four, we make you feel as if they are part of the family. We take a friendly approach to every home remodeling or renovation job.</p>

                <a href="" className='rounded-sm'>Learn More</a>

            </article>

            <article className='w-full '>
                <img src={bathroomImg}  alt="bathroom" className='w-[90%]  rounded-xl  '  />

                <h1>Bathroom Remodeling</h1>

                <p>We’re not your normal contractor…we’re a family and each remodeling project is driven by passion and integrity. Contact us to start upgrading your bathroom!</p>

                <a href="" className='rounded-sm'>Learn More</a>

            </article>

            <article className='w-full '>
                <img src={windowsImg}  alt="bathroom" className='w-[90%]  rounded-xl  '  />

                <h1>Windows</h1>

                <p>Replace your outdated windows with brand-new ones installed by A Father of Four Home Improvements.</p>

                <a href="" className='rounded-sm'>Learn More</a>

            </article>

            <article className='w-full '>
                <img src={doorsImg}  alt="bathroom" className='w-[90%]  rounded-xl '  />

                <h1>Doors</h1>

                <p>You'll have your new interior or exterior doors installed efficiently and affordably by our skilled team. Join our "family tree" of satisfied homeowners today!</p>

                <a href="" className='rounded-sm'>Learn More</a>

            </article>
        </section>
    );
}

export default index;