import React from 'react'
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Owldemo } from "./Owldemo";
import OwlDemo1 from "./ProductSlider";
import { Link } from "react-router-dom";
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import './css/main.css';


export const Main = () => {

    let divstyle = {
        lineHeight: '2rem',
        fontSize: '16px',


    };
    let flex = {
        display: 'flex',
        flexFlow: 'row  wrap',
        justifyContent: 'space-around',
        
    }
    let hrstyle1 = {
        color: 'rgb(206 65 65)',
        width: '500px',
        opacity: '1',
        margin: 'auto',
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
         

            <section className="main">
                <section >
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://pushpmasale.com/wp-content/uploads/2019/12/001.jpg" class="d-block w-100"  alt="bg1"  />
                            </div>
                            <div class="carousel-item">
                                <img src="https://pushpmasale.com/wp-content/uploads/2019/12/05.jpg" class="d-block w-100" alt="bg2"  />
                            </div>
                        </div>
                    </div>

                </section>
                <section >
                    <div className="container-fluid container1">
                        <div className="headings " data-aos="fade-down"> <h2 className='text-center' >THE FINEST BLEND OF PURITY AND QUALITY</h2><br />
                            <h5 className='text-center mb-2 text-info'>We deliver the best herbs and spices of India to offer you the most unique food
                                experiences.</h5></div>
                        <div className=' text-center container-fluid px-4 para col-md-12' data-aos="fade-down" style={divstyle}>

                            <span className='text-danger'>Established in 1974</span>, Pushp Masale is a pioneer in the field of processing and manufacturing
                            of Pure Spices, CTC Spices, Blended Spices, Munimji Masale, RTE and other food solutions
                            for your kitchen. Undivided attention is given to procuring raw materials resulting in superior <span className='text-danger'>quality spices </span>
                            that are privileged to enjoy the trust of a majority of Indian households. A deliberate effort is
                            made to craft our spices without the presence of artificial colours and preservatives. Our
                            state-of-the-art infrastructure facilitates <span className='text-danger'>ensure safe</span> storage and processing of herbs and
                            spices so that no compromise is made on any level and you get what you deserve- only the
                            finest and the purest of spices.

                        </div>

                       
                    </div>
                </section>
                <section className='container-fluid'>
                    <div className="flex-container  my-4 mb-5" style={flex}>
                        <div className=''> <img src="https://pushpmasale.com/wp-content/uploads/elementor/thumbs/No_synthetic_colour_and_preservatives-oglulfcokk2le7da1rxrp99vs342a0lh595qqdzmos.png" alt="item1" />
                            <h6 className='text-center '>No synthetic colour and preservatives</h6>
                        </div>
                        <div> <img src="https://pushpmasale.com/wp-content/uploads/elementor/thumbs/pure_vegetarian-oglun79phai3bosfojkeet586ad0tfn821ird7cuxo.png" alt="item2" />
                            <h6 className='text-center'>Pure Vegetarian</h6>
                        </div>
                        <div> <img src="https://pushpmasale.com/wp-content/uploads/elementor/thumbs/Fully_Automatted_plant-oglunvpiezfjpjsxpu4p7mz7mb0kdkc8tehduecmfw.png" alt="item3" />
                            <h6 className='text-center'>Fully Automated plant</h6>
                        </div>
                        <div> <img src="https://pushpmasale.com/wp-content/uploads/elementor/thumbs/Spices_Grind_and_Packed_in_Total_Hygiene-ogluoxb20cv0lyabmadrzdhndpv8xghiakkt1gsvj0.png" alt="item3" />
                            <h6 className='text-center'>Spices Ground and Packed in Total Hygiene</h6>
                        </div>
                    </div>
                </section>
               
                <section class="product" >
                    <div data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000"> <Owldemo /></div>
                    
        
                   
                   
                    <div className="container" >
                        <div className="button my-4" data-aos="flip-down"><Link to="/pushp_category"  class=" d-block  text-decoration-none  text-light">View products</Link></div><br></br>
                        
                    </div>
                </section>
               
                <section>
                <div data-aos="zoom-in" ><h2 className='text-center my-4' style={{ letterSpacing: "0.1rem" }}>Our Social Media Library</h2></div>
                        <hr className='my-4' style={hrstyle1} />

                    <div className="container ">
                        <div className="row">
                            <div className=" col-lg-6 col-sm-12  col-12 col-md-12  my-4 social-icon-div">
                                <h4 className='text-center my-4' style={{letterSpacing:'0.9',}}>SPICE UP YOUR FEEDS!</h4>
                                <h5 className='text-center text-muted'>We are socially active. Stay connected to get the latest on what’s happening in the world of
                                    herbs and spices.</h5>
                                <div class=" flex1">
                                    <Tooltip title='facebook'>
                                    <div className='icon1'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg></div>
                                    </Tooltip>
                                    <Tooltip title='twitter'>
                                    <div className='icon2'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg></div>
                                    </Tooltip>
                                    <Tooltip title='instagram'>
                                    <div className='icon3'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.146 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.046-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.146.008-2.388.046-3.231.046-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg></div>
                                    </Tooltip>
                                    <Tooltip title='youtube'>
                                    <div className='icon4'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                    </svg></div>
                                    </Tooltip>
                                   
                                </div>

                            </div>
                            <div className=" col-lg-5 col-sm-12 col-md-12 col-xs-12 offset-lg-1 mt-5  iframe-div" data-aos="fade-left" >
                               
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/b_3y9h15iSo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='section2'>
                    <div className='elementor-background-overlay'>
                        <div className="container">
                            <div className="row">
                                <div className="container3 col-sm-12 "> <h1 className='text-center  my-4 ' style={{fontWeight:'400',letterSpacing:'0',}}>QUALITY ASSURANCE</h1>
                                    <h4 className='text-center py-4 ' style={{fontWeight:'400',}}>We are committed to our consumers by offering them the best quality products.</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 col-md-6 col-12 text-center" data-aos="fade-down">
                                    <figure class="wp-caption ">
                                        <img width="300" height="280" src="https://pushpmasale.com/wp-content/uploads/2019/12/9001_pushp-300x300.png " class="attachment-medium size-medium py-4" alt="" />

                                        <figcaption class="widget-image-caption wp-caption-text text-center h4 py-4">AN ISO 9001:2015 Certified Company</figcaption></figure>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-md-6 col-12  text-center" data-aos="fade-down">
                                    <figure class="wp-caption "><img width="300" height="280" src="https://pushpmasale.com/wp-content/uploads/2019/12/22000_pushp-300x300.png" class="attachment-medium size-medium py-4" alt="" />
                                    <figcaption class="widget-image-caption wp-caption-text text-center h4 py-4"> <p>AN ISO 22000 Certified Company</p> </figcaption></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div id="con4">
                        <div className="row" data-aos="flip-right">
                            <div className='col-sm-12 col-lg-6 text-center mt-3' style={{ color: 'whitesmoke', cursor:'pointer' }}><h1 >Download our E-Catalouge <DownloadSharpIcon sx={{ fontSize: "40px",}}></DownloadSharpIcon></h1></div>
                            <marquee className="marquee_div" behavior="scroll" direction="left" scrollamount='9' >PURITY THAT'S ❤️ FOREVER!</marquee>
                            
                           
                        </div>    
                            
                    </div>

                </section>



            </section>
        </>
    )

}
