import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

import categories from './js/data'
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
export class OwlDemo3 extends Component {
    

    render() {
        let value = this.props.category_name;
        let value1 = this.props.spice;
        return (
            <>
                <div class='container-fluid' my-3 >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <div class="col-sm-12 h3 text-center" style={{ fontFamily: 'Ibarra Real Nova',fontWeight:'bolder', letterSpacing:'0.2rem' }}>
                        More From Pushp Brand
                            <hr className='my-3 ' style={{
                                color: 'rgb(206 65 65)',
                                width: '350px',
                                margin: 'auto',
                                opacity: '1',
                            }} />
                        </div>
                    </div>
                </div>

                <div class='container-fluid' >
                     <OwlCarousel  margin={80} autoplay={true} autoplayTimeout={1000} lazyLoad={true} loop={true} className="owl-theme"  {...options} >
                        {categories.filter(product => product.category === value & product.spice !== value1).map(filteredItem => (
                            <>
                                <div className="product-owl-carousel" >
                                    <div className="">
                                        <Link to={`/product_page/pushp_masale/${filteredItem.spice}/${filteredItem.id}`}> <img src={filteredItem.image} alt="product_image" /></Link>

                                        <h6 style={{ marginLeft: '65px' }} className='text-danger my-2 '>{filteredItem.spice}</h6>
                                    </div>

                                </div>

                            </>
                        ))}

                    </OwlCarousel> 
                   
                </div>
               
            </>
        )
    }
}


export default OwlDemo3;
