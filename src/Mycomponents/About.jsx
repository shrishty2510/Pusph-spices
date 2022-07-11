import React from 'react'
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import './css/about.css';
export const About = () => {
    let aboutimg = {
        height: '400px',
        opacity: '1',
        // filter: 'invert(20%)',


    }
    let about = {
        margintop: '-90px',
    }

    let pstyle = {
        fontSize: '18px',
        fontFamily: 'Ibarra Real Nova',

    }
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `PUSPH BRAND - About Us`;
    }, [])
    return (

        <section style={about}>
            <div className="aboutcon">
                <div className="background-about   ">
                    <img src="https://pushpmasale.com/wp-content/uploads/2020/01/About-us-Final-Website-Slider-Changes-26.01.2020.jpg" style={aboutimg} className="d-block w-100 m-auto  " alt="bg1" />
                    <h3 className="text-center text-light glow">The real taste of food</h3>
                </div>
            </div>
            <main style={{ backgroundColor: 'global', }}>

                <div class="container-fluid">
                    <div className="row ">

                        <div className="col-sm-12 ">
                            <div className="border-right border-warning h-100 row mt-5 "  >
                                <div className="col-sm-3" data-aos="fade-up"> <img class="img-fluid mb-2 shaded" src="https://pushpmasale.com/wp-content/uploads/2019/10/Munimji_Pushp-350x414.jpg" style={{ width: '250px', boxShadow: ' 0 0px 10px rgb(0 0 0 / 15%)', }} /></div>
                                <div class="content col-sm-9">
                                    <div data-aos="flip-up"><h3 class="featurette-heading habout mt-2">Our Founder </h3></div>
                                    <hr className='my-4' style={{
                                        color: 'rgb(206 65 65)',
                                        width: '150px',
                                        opacity: '1',
                                    }} />

                                    <p class="lead " style={{
                                        color: '#0886f0', padding: '15px 0px',
                                        fontStyle: 'italic',
                                        fontFamily: 'Ibarra Real Nova',

                                    }}>Pushp Brand Spices was founded by Late Shri Kishanlalaji Surana in 1974 as a small-scale
                                        industry in Indore, the heart of central India.
                                        From being a family-owned business that catered solely to the Malwa region, the company
                                        since its inception has grown dynamically, not only to become a professionally managed
                                        group of companies but also to cater to the vast Indian market.</p>

                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    <span style={{ fontWeight: '600', color: '#2d3436' }} className="about-span">Pushp Brand Spices holds a substantial presence across 15+ states in India</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body text-danger" style={{ fontSize: '15px', }}>Under the valuable guidance of Shri Labhchandji Surana and the able leadership of Shri
                                                    Mahendra Surana and Shri Surendra Surana, the company today is diverse company with
                                                    two popular brands of quality spice products - “Pushp” and “Munimji”.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className="col-sm-12 mt-3" style={{
                            padding: '30px',
                            width: '70 %',
                            backgroundColor: '#f4f5f7',
                        }}>
                            <div class="row featurette d-flex justify-content-center align-items-center">
                                <div class="col-md-9">
                                    <div data-aos="flip-up"><h3 class="featurette-heading habout"> PIONEERS IN THE NATURAL SPICES INDUSTRY</h3></div>
                                    
                                    <hr className='my-4' style={{
                                        color: 'rgb(206 65 65)',
                                        width: '580px',
                                        opacity: '1',
                                    }} />
                                    <p className='lead ' style={{ color: '#0886f0', fontSize: '18px', fontFamily: 'Ibarra Real Nova' }}>Creating a harmonious balance between traditional pounding methods and cutting-edge
                                        technology, Pushp Masale offers you spices that are in their most pristine form, devoid of
                                        any harm, delivering all the goodness straight to your food.</p><br />
                                    <div class="accordion accordion-flush" id="accordionFlushExample" >
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    <span style={{ fontWeight: '600', color: '#2d3436' }} className="about-span">A pure blend of finest spices!</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body text-danger" style={{ fontSize: '15px', }}>It is the quality of spices that makes all the difference in the overall flavour of food.
                                                    Unwavering emphasis is given to the quality of raw material that goes into blending it all
                                                    comprehensively.</div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item" >
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    <span style={{ fontWeight: '600', color: '#2d3436' }} className="about-span">Pushp Brand Spices holds a substantial</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body text-danger" style={{ fontSize: '15px', }}>Under the valuable guidance of Shri Labhchandji Surana and the able leadership of Shri
                                                    Mahendra Surana and Shri Surendra Surana, the company today is diverse company with
                                                    two popular brands of quality spice products - “Pushp” and “Munimji”.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-md-3 ml-4" data-aos="fade-up">
                                    <img class="img-fluid " src="https://pushpmasale.com/wp-content/uploads/2019/12/banner-3.png" style={{ height: '250px', width: '300px' }} />

                                </div>
                            </div><br />

                            <div class="row featurette d-flex justify-content-center align-items-center">
                                <div class="col-md-8 order-md-2">
                                    <div data-aos="flip-up"><h3 class="featurette-heading habout">ADDING SPICES TO YOUR LIVES SINCE 1974</h3></div>
                                    
                                    <hr className='my-4' style={{
                                        color: 'rgb(206 65 65)',
                                        width: '565px',
                                        opacity: '1',
                                    }} />
                                    <p className='lead ' style={{ color: '#0886f0', fontSize: '18px', fontFamily: 'Ibarra Real Nova' }}>The blends and spices made <span className='text-danger'>at Pushp Masale</span> contain no fillers, starches, free-flow agents
                                        or additives of any kind, making them rich in flavour and quality. Using our vast knowledge
                                        and experience for your benefit, Pushp Masale offers the widest possible range of <span className='text-danger'> top-quality </span>
                                        spices and blends to meet your every need.</p><br />

                                    <p className='text-muted' style={pstyle}>Today, after almost 48 years of inception, broadened operations and rising competition,
                                        Pushp Spices continues to hold the forte in its domain of processing spices, masala powders
                                        and home food solutions.</p>
                                </div>


                                <div class="col-md-4 " data-aos="fade-up">
                                    <img class="img-fluid " src="https://pushpmasale.com/wp-content/uploads/2019/10/sec-img-8.png" style={{ height: '250px', width: '250px' }} />

                                </div>
                            </div><br />

                            <div class="row featurette d-flex justify-content-center align-items-center ">
                                <div class="col-md-9">
                                    <div data-aos="flip-up"><h3 class="featurette-heading habout">DELIVERING ONLY THE BEST - OUR HIGHLY EFFICIENT
                                        TEAM AND SOPHISTICATED INFRASTRUCTURE</h3></div>
                                    
                                    <hr className='my-4' style={{
                                        color: 'rgb(206 65 65)',
                                        width: '425px',
                                        opacity: '1',
                                    }} />
                                    <p class="text-muted" style={pstyle}><span className='text-danger'>While the initiation involved spices ground manually, </span>today we have switched to automatic
                                        machinery in order to keep up with the growing demand while keeping the quality intact. Our
                                        tech-savvy processing units and highly skilled staff are continuously driving the organisation
                                        to meet the posed challenges while measuring up to the needs of our customers across
                                        multiple spice segments and markets.</p>
                                    <div>
                                        <ul type="square">
                                            <li className='text-info'>Plant product capacity- 200 metric tonnes per day</li>
                                            <li className='text-info'>Plant - spread over an elaborate 2,15,000 square feet</li>
                                        </ul>
                                    </div>

                                    <p class="text-muted" style={pstyle}>It is the combined effort of our core corporate values, state-of-the-art infrastructure,
                                        impeccable safety and hygiene controls, stringent quality controls, customer-driven
                                        processes and dynamic supply chain distribution systems that have led to the Company’s
                                        growth, stature and position, in the market as well as in the industry.</p>


                                </div>
                                <div class="col-md-3 ml-4" data-aos="fade-up">
                                    <img class=" img-fluid " src="https://pushpmasale.com/wp-content/uploads/2019/10/infrastructure-3001.png" style={{ width: '400px', height: '200px' }} />
                                </div>
                            </div>



                        </div>

                    </div>



                </div>


            </main>

        </section >
    )
};
{/* <div id="accordion">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" data-target="" aria-expanded="true" aria-controls="collapseOne">
                                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{ color: 'black', }}></i>
                                                </button>
                                                <span>Pushp Brand Spices holds a substantial presence across 15+ states in India.</span>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body">
                                                Under the valuable guidance of Shri Labhchandji Surana and the able leadership of Shri
                                                Mahendra Surana and Shri Surendra Surana, the company today is diverse company with
                                                two popular brands of quality spice products - “Pushp” and “Munimji”.
                                            </div>
                                        </div>
                                    </div> */}