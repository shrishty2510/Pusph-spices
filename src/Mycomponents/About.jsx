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


    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `PUSPH BRAND - About Us`;
    }, [])
    return (

        <section style={about}>
            <div className="aboutcon">
                <div className="background-about ">
                    <img src="https://pushpmasale.com/wp-content/uploads/2020/01/About-us-Final-Website-Slider-Changes-26.01.2020.jpg" style={aboutimg} className="d-block w-100 m-auto  " alt="bg1" />
                    <h3 className="text-center text-light glow">The real taste of food</h3>
                </div>
               
            </div>
            <main style={{ backgroundColor: 'global', }}>
                <div class="container-fluid">
                    <div class="row my-3">
                        <div class="col-sm-12 text-center col-md-5 col-lg-4 col-xl-3">
                            <img class="founder-img p-2 shaded" data-aos="fade-up"
                                src="https://pushpmasale.com/wp-content/uploads/2019/10/Munimji_Pushp-350x414.jpg"
                                alt="founder-img" />
                        </div>
                        <div class="col-sm-12 col-md-7  col-lg-8 col-xl-9">
                            <div class="about-heading"  data-aos="flip-down">
                                <h3 class=" habout mt-2">Our Founder </h3>
                                <hr className='my-4  d-sm-block d-md-none d-lg-block' style={{
                                    color: 'rgb(206 65 65)',
                                    width: '180px',
                                    opacity: '1',

                                }} />
                            </div>
                            <div class="content1">
                                <p>
                                    Pushp Brand Spices was founded by Late Shri Kishanlalaji Surana in 1974 as a small-scale
                                    industry in Indore, the heart of central India.
                                    From being a family-owned business that catered solely to the Malwa region, the company
                                    since its inception has grown dynamically, not only to become a professionally managed
                                    group of companies but also to cater to the vast Indian market.
                                </p>
                            </div>
                            <div className="about-accordin" data-aos="zoom-in" data-aos-duration="1000">
                                <Accordion id="about-accordin">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{ fontWeight: 'bold', }} >Pushp Brand Spices holds a substantial presence across 15+ states in India</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="text-info" style={{ fontSize: '15px', }}>
                                            Under the valuable guidance of Shri Labhchandji Surana and the able leadership of Shri
                                            Mahendra Surana and Shri Surendra Surana, the company today is diverse company with
                                            two popular brands of quality spice products - “Pushp” and “Munimji”.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-sm-12 order-sm-2 order-2 order-xl-0 order-lg-0 order-md-0 col-md-7 col-lg-9">
                            <div data-aos="flip-down">
                                <h3 class="habout"> PIONEERS IN THE NATURAL SPICES INDUSTRY</h3>
                                <hr className='my-4  d-sm-block d-md-none d-lg-block' style={{
                                    color: 'rgb(206 65 65)',

                                    width: '670px',
                                    opacity: '1',

                                }} />
                            </div>
                            <div class="content1">
                                <p>
                                    Creating a harmonious balance between traditional pounding methods and cutting-edge
                                    technology, Pushp Masale offers you spices that are in their most pristine form, devoid of
                                    any harm, delivering all the goodness straight to your food.
                                </p>
                            </div>
                            <div className="about-accordin" data-aos="zoom-in-down" data-aos-duration="1000">
                                <Accordion id="about-accordin1">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{ fontWeight: 'bold', }} >A pure blend of finest spices!</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="text-info" style={{ fontSize: '15px', borderBottom: 'none' }}>
                                            It is the quality of spices that makes all the difference in the overall flavour of food.
                                            Unwavering emphasis is given to the quality of raw material that goes into blending it all
                                            comprehensively.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className="about-accordin" data-aos="zoom-in-down" data-aos-duration="1000">
                                <Accordion id="about-accordin1">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{ fontWeight: 'bold', }} >Our quality starts from the ground up!</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="text-info" style={{ fontSize: '15px', borderBottom: 'none', }}>
                                            Our spices are picked from specific Indian fields, as we follow the stringent rules of
                                            sustainability and best practices. We have seasoned experts involved in every department
                                            leaving no room for any sort of compromise on either quality or practices, giving you the
                                            perfect value for your money and the perfect flavour for your food.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                        </div>
                        <div class="col-sm-12 text-center col-md-5  col-lg-3 offset-lg-0">
                            <img class="img-fluid " src="https://pushpmasale.com/wp-content/uploads/2019/12/banner-3.png" data-aos="fade-down" alt="" style={{ marginTop: '80px', }} />
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-sm-12 text-center col-md-5 col-lg-3 float-start">

                            <img class="img-fluid " src="https://pushpmasale.com/wp-content/uploads/2019/10/sec-img-8.png" width="250px" data-aos="fade-down" alt="" style={{ marginTop: '80px', }} />
                        </div>
                        <div class="col-sm-12 col-xs-12 col-md-7 col-lg-9">
                            <div data-aos="flip-down">
                                <h3 class="habout">ADDING SPICES TO YOUR LIVES SINCE 1974</h3>
                                <hr className='my-4 d-sm-block d-md-none d-lg-block' style={{
                                    color: 'rgb(206 65 65)',

                                    width: '610px',
                                    opacity: '1',

                                }} />
                            </div>
                            <div class="content1">
                                <p>Today, after almost 48 years of inception, broadened operations and rising competition,
                                    Pushp Spices continues to hold the forte in its domain of processing spices, masala powders
                                    and home food solutions.</p>
                            </div>
                            <div class="content2">
                                <p align="justify" class="text-lead">
                                    The blends and spices made <span className='text-danger'>at Pushp Masale</span> contain no
                                    fillers, starches, free-flow agents
                                    or additives of any kind, making them rich in flavour and quality. Using our vast knowledge
                                    and experience for your benefit, Pushp Masale offers the widest possible range of <span
                                        class='text-danger'> top-quality </span>
                                    spices and blends to meet your every need.</p>
                            </div>

                        </div>
                    </div>
                
                    <div class="row my-3">

                        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-8">
                            <div data-aos="flip-down">
                                <h3 class="habout font-effect-outline">DELIVERING ONLY THE BEST - OUR HIGHLY EFFICIENT
                                    TEAM AND SOPHISTICATED INFRASTRUCTURE</h3>
                                <hr className='my-4  d-xs-block d-md-none d-lg-block' style={{
                                    color: 'rgb(206 65 65)',

                                    width: '650px',
                                    opacity: '1',

                                }} />
                            </div>
                            <div class="content2">
                                <p class="text-lead"><span className='text-danger'>While the initiation involved spices ground manually, </span>today we have switched to automatic
                                    machinery in order to keep up with the growing demand while keeping the quality intact. Our
                                    tech-savvy processing units and highly skilled staff are continuously driving the organisation
                                    to meet the posed challenges while measuring up to the needs of our customers across
                                    multiple spice segments and markets.</p>
                            </div>
                            <div>
                                <ul type="square">
                                    <li class='text-info h6'>Plant product capacity- 200 metric tonnes per day</li>
                                    <li class='text-info h6'>Plant - spread over an elaborate 2,15,000 square feet</li>
                                </ul>
                            </div>


                        </div>
                        <div class="col-sm-12 text-center col-md-12 col-lg-12 col-xl-4  float-end">

                            <img class=" img-fluid " src="https://pushpmasale.com/wp-content/uploads/2019/10/infrastructure-3001.png" data-aos="fade-down" width="600" alt="" style={{ marginTop: '120px', }} />
                        </div>
                    </div>
                    <div class="row my-2" >
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="content2">
                                <p align="justify" class="text-lead">
                                    It is the combined effort of our core corporate values, state-of-the-art infrastructure,
                                    impeccable safety and hygiene controls, stringent quality controls, customer-driven
                                    processes and dynamic supply chain distribution systems that have led to the Company’s
                                    growth, stature and position, in the market as well as in the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </section >
    )
};
