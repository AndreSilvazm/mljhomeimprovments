import React from 'react';
import Header from '../../Components/Header/index'
import Img from '../../assets/AboutUs/Espec.jpg'

import './style.css'

function index(props) {
    return (
        <>

            <Header />

            <section className='LandingPageAbout'>


                <article className='ArticleContainer'>

                    <h1>Our story</h1>

                    <p>
                        MLJ Home Improvement was founded in 2023 by Marc Jacobs with a vision to be recognized as the premier general contracting company in our region, known for our unwavering commitment to quality, integrity, and customer satisfaction.

                    </p>

                    <p>
                        We aspire to build long-lasting relationships with our clients and partners, becoming their trusted partner of choice for all their construction needs.
                    </p>

                    <p>

                        Since then, we have been dedicated to deliver exceptional construction services with integrity, professionalism, and a commitment to excellence.

                    </p>
                    <p>

                        We strive to exceed our clients' expectations by providing innovative solutions, superior craftsmanship, and personalized attention to every project we undertake.
                    </p>

                </article>


            </section>


            <section className='AboutUsContainer'>

                <article>

                    <h1>
                        About US
                    </h1>

                    <p> Welcome to MLJ Home Improvement , where we offer comprehensive home remodeling services tailored to your unique vision and needs.
                    </p>
                    <p>
                        Our experienced team of designers and contractors works closely with you every step of the way to bring your dream home to life.
                    </p>
                    <p>
                        Our mission is simply, We Build! We don't cut corners.
                        Get in Touch! We love connecting with our customers and partners.

                    </p>
                    <p>
                        Whether you have a question, feedback, or just want to say hello, feel free to mljhomeimprovements@gmail.com.

                    </p>

                </article>

                <article>

                    <h1>
                        Why Choose MLJ Home Improvement?

                    </h1>

                    <p>
                        Experience: With 20 Years of experience in the industry, we have the knowledge and expertise to handle projects of any size and complexity.

                    </p>

                    <p>

                        Quality Craftsmanship: We take pride in our attention to detail and commitment to delivering high-quality results that exceed our clients' expectations.

                    </p>

                    <p>

                        Customer Satisfaction: Your satisfaction is our top priority. We strive to provide exceptional service and communication throughout the remodeling process.

                    </p>

                    <p>
                        Licensed and Insured: Rest assured knowing that we are fully licensed and insured, providing you with peace of mind and protection for your investment.

                    </p>

                </article>

                <article>

                    <h1>
                        Our Values

                    </h1>

                    <p>
                        Customer Centricity: We prioritize our customers' needs and strive to exceed their expectations.
                    </p>

                    <p>
                        Innovation: We embrace creativity and constantly seek innovative solutions.

                    </p>

                    <p>
                        Integrity: We conduct business with honesty, transparency, and accountability.

                    </p>

                    <p>
                        Excellence: We pursue excellence in all aspects of our work, from product development to customer service.

                        Our team consists of passionate individuals who bring diverse expertise and perspectives to MLJ Home Improvement.
                    </p>
                </article>

                <section>

                    <article>

                        <h1>  Get Started Today
                        </h1>

                        <p>

                            Ready to transform your home? Contact us today to schedule a consultation with one of our remodeling experts. We'll discuss your project goals, provide personalized recommendations, and create a custom plan that fits your budget and timeline.
                            Let MLJ Home Improvement make your dream home a reality!

                        </p>

                    </article>

                </section>

                <article className='EspecializeContainer'>

                    <h1>
                        At MLJ Home Improvement, we specialize in :
                    </h1>

                    <div className='AllEspecializationContainer'>
                        <div>
                            <h2>
                                Kitchen Remodeling

                            </h2>

                            <p>
                                Revitalize your kitchen with our expert remodeling services. From custom cabinetry to stylish countertops and modern appliances, we'll create a functional and inviting space that's perfect for cooking, entertaining, and making memories.
                            </p>
                        </div>

                        <div>
                            <h2>
                                Bathroom Renovation

                            </h2>

                            <p>
                                Transform your bathroom into a spa-like retreat with our professional renovation services. Whether you're looking to update fixtures, install a luxurious shower, or create a relaxing soaking tub, we'll help you design a space that combines style and comfort.
                            </p>
                        </div>

                        <div>
                            <h2>
                                Whole Home Renovation

                            </h2>

                            <p>
                                Ready for a complete home makeover? Our whole home renovation services are designed to enhance the beauty, functionality, and value of your property. From structural changes to cosmetic upgrades, we'll work with you to turn your vision into reality.

                            </p>
                        </div>

                        <div>

                            <h2>
                                Interior Design

                            </h2>
                            <p>
                                Elevate your home's interior with our expert design services. Our talented team of designers will help you choose the perfect colors, materials, and furnishings to create a cohesive and stylish look that reflects your personal taste.

                            </p>

                        </div>

                        <div>
                            <h2>
                                Exterior Remodeling

                            </h2>
                            <p>
                                Enhance your home's curb appeal and outdoor living space with our exterior remodeling services. Whether you're looking to add a deck, patio, or outdoor kitchen, we'll help you maximize your home's potential and create an inviting outdoor oasis.
                            </p>

                        </div>
                    </div>

                    <div className='ImgContainer'>
                        <img src={Img} alt="" />
                    </div>

                </article>

                <footer>

                    <h1>
                        Thank you for visiting MLJ Home Improvement. We look forward to serving you!
                    </h1>

                    <p>

                        Business Hours:

                        Mon - Fri
                        8:30 am - 6 pm
                        Sat
                        By appointments only.
                        Sun
                        By appointments only.

                    </p>



                </footer>

            </section>

        </>
    );
}

export default index;