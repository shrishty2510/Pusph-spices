import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pic1 from './images/product images/owldemo/Hing Mockup 100g.png';
import pic2 from './images/product images/owldemo/QF Dal Tadka.png';
import pic3 from './images/product images/owldemo/QF Sabji Masala.png';
import pic4 from './images/product images/owldemo/QF Shahi Sabji Masala.png';
import pic5 from './images/product images/owldemo/QF Shahi Paneer.png';
import pic6 from './images/product images/owldemo/Kashmiri Mirch.png';
import pic7 from './images/product images/owldemo/Achar masala.png';
import pic8 from './images/product images/owldemo/Poha Masala.png';

const options = {
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        800: {
            items: 3,
        },
        1000: {
            items: 4,

        }
    },
};
export class Owldemo extends Component {

    render() {
        return (
            <div>
                <div class='container-fluid'  >
                    <div className="row title"  >
                        <div class="col-sm-12 main-owl-container mb-4">
                           
                            <p style={{ letterSpacing: '2px', fontSize: '25px', fontWeight: 'bold', fontFamily: 'Ibarra Real Nova', }}>PUSPH MASALE (swad ka superstar)</p>
                            <hr className='my-4' style={{
                                color: 'rgb(206 65 65)',
                                width: '460px',
                                opacity: '1',

                            }} />
                        </div>
                    </div>
                </div>
                <div class='container-fluid' >
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        nav
                        margin={60}
                        autoplay={true} {...options} style={{ padding: '0px 50px', }} >
                        <div class="product-card">
                            <div class="product-image mb-3 ">
                                <img src={pic6} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} class="product-thumb" alt="" />
                            </div>
                            <h6 class='text-center text-danger hide my-3 ' >Kashmiri Mirch Powder</h6>


                        </div>
                        <div class="product-card">
                            <div class="product-image mb-3 ">
                                <img src={pic3} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

                            </div>
                            <h6 class='text-center text-danger hide  my-3' >SABJI MASALA</h6>

                        </div>
                        <div class="product-card">
                            <div class="product-image mb-3 ">
                                <img src={pic1} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }}  class="product-thumb" alt="" />
                            </div>
                            <div className='hide text-center'><h6 class='text-center text-danger  ml-3  my-3  ' >SHAHI HING</h6></div>

                        </div>
                        <div class="product-card ">
                            <div class="product-image mb-3 ">
                                <img src={pic8} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} class="product-thumb" alt="" />
                            </div>
                            <h6 class='text-center text-danger hide  my-3' >Poha (Jeeravan) Masala</h6>

                        </div>
                        <div class="product-card ">
                            <div class="product-image mb-3 ">
                                <img src={pic5} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

                            </div>
                            <h6 class='text-center text-danger hide  my-3 ' >SHAHI PANEER MASALA </h6>

                        </div>
                        <div class="product-card ">
                            <div class="product-image mb-3 ">
                                <img src={pic7} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

                            </div>
                            <h6 class='text-center text-danger hide  my-3 ' >Achar Masala</h6>

                        </div>
                        <div class="product-card ">
                            <div class="product-image mb-3 ">
                                <img src={pic4} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

                            </div>
                            <h6 class='text-center text-danger hide  my-3 ' >SHAHI SABJI MASALA</h6>

                        </div>
                        <div class="product-card">
                            <div class="product-image mb-3 ">
                                <img src={pic2} style={{ filter: "drop-shadow(5px 5px 5px #2C3333)" }} alt="" />

                            </div>
                            <h6 class='text-center text-danger hide  my-3 ' >DAL TADKA MASALA</h6>

                        </div>



                    </OwlCarousel>
                </div>
            </div>
        )
    }
}


export default Owldemo