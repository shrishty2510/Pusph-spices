import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './css/owl.css'
export class Owldemo extends Component {

    render() {
        return (
            <div>
                <div class='container-fluid'  >
                    <div className="row title"  >
                        <div class="col-sm-12 text-center  mb-4">
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
        <OwlCarousel items={4}  
          className="owl-theme"  
          loop  
          nav  
          margin={8}
          autoplay={true} >  
           <div class="product-card">
            <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/10/paneer_masala-233x300.jpg" class="product-thumb" alt="" />
        </div>
        <h5 class='text-center text-danger hide my-3 ' >PANEER MASALA</h5>
       

        </div>
    <div class="product-card">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/10/Shahi_-Hing_Compounded_Asafoetida-238x300.jpg" class="product-thumb" alt="" />
        </div>
        <div className='hide text-center'><h5 class='text-center text-danger  pb-4  my-3  ' >SHAHI HING</h5></div>

    </div>
    <div class="product-card ">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/12/punjabi_garam_masala_box-233x300.jpg" class="product-thumb" alt="" />
        </div>
        <h5 class='text-center text-danger hide  my-3' >PUNJABI GARAM MASALA</h5>

    </div>
    <div class="product-card ">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/12/kitchen_king_masala_box-233x300.jpg " alt="" />

        </div>
        <h5 class='text-center text-danger hide  my-3 ' >KICHTEN KING MASALA</h5>

    </div>
    <div class="product-card">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/10/chana_asala-233x300.jpg" alt="" />

        </div>
        <h5 class='text-center text-danger hide  my-3 ' >CHANA MASALA</h5>

    </div>
    <div class="product-card">
        <div class="product-image mb-3 ">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/10/pav_bhaji_masala-233x300.jpg" alt="" />

        </div>
        <h5 class='text-center text-danger hide  my-3' >CHAAT MASALA</h5>

    </div>
    <div class="product-card ">
        <div class="product-image mb-3 ">
            <img src=" https://pushpmasale.com/wp-content/uploads/2019/10/chat_asala-233x300.jpg " alt="" />

        </div>
        <h5 class='text-center text-danger hide  my-3 ' >PAVBHAJI MASALA</h5>

    </div>
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}


export default Owldemo