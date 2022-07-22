import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './css/owl.css'
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
                        <div class="col-sm-12 text-center main-owl-container mb-4">
                           <h4 style={{letterSpacing:'5px'}}> PUSPH MASALE</h4>
                            <hr className='my-4' style={{
                                color: 'rgb(206 65 65)',
                                width: '160px',
                                opacity: '1',
                                margin: 'auto',
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
          autoplay={true} {...options} style={{padding:'0px 50px',}} >  
        <div class="product-card">
            <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/10/paneer_masala-233x300.jpg" class="product-thumb" alt=""  />
            </div>
            <h6 class='text-center text-danger hide my-3 ' >PANEER MASALA</h6>
       

        </div>
    <div class="product-card">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/10/Shahi_-Hing_Compounded_Asafoetida-238x300.jpg" class="product-thumb" alt="" />
        </div>
        <div className='hide text-center'><h6 class='text-center text-danger  ml-3  my-3  ' >SHAHI HING</h6></div>

    </div>
    <div class="product-card ">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/12/punjabi_garam_masala_box-233x300.jpg" class="product-thumb" alt="" />
        </div>
        <h6 class='text-center text-danger hide  my-3' >PUNJABI GARAM MASALA</h6>

    </div>
    <div class="product-card ">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/12/kitchen_king_masala_box-233x300.jpg " alt="" />

        </div>
        <h6 class='text-center text-danger hide  my-3 ' >KICHTEN KING MASALA</h6>

    </div>
    <div class="product-card">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/10/chana_asala-233x300.jpg" alt="" />

        </div>
        <h6 class='text-center text-danger hide  my-3 ' >CHANA MASALA</h6>

    </div>
    <div class="product-card">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/10/pav_bhaji_masala-233x300.jpg" alt="" />

        </div>
        <h6 class='text-center text-danger hide  my-3' >CHAAT MASALA</h6>

    </div>
    <div class="product-card ">
        <div class="product-image mb-3 ">
            <img src=" https://pushpmasale.com/wp-content/uploads/2019/10/chat_asala-233x300.jpg " alt="" />

        </div>
        <h6 class='text-center text-danger hide  my-3 ' >PAVBHAJI MASALA</h6>

    </div>
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}


export default Owldemo