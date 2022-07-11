import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./css/pusphcategory.css"
import categories from './js/munimjimasale'


export const Munimjimasale = () => {
  const [data, setData] = useState(categories);

  useEffect(() => {
    window.scrollTo(550, 550);
    document.title = `MUNIMJI MASALE - pusph masale`;

  }, []);
  return (
    <>
      <section style={{ marginTop: '0px', }}>
        <div className="background_image"> <img src="https://pushpmasale.com/wp-content/uploads/2020/01/product_header_28_01_20.jpg" alt="bg_image" height='500' width='100%' /> </div>
        <main>
          <div className="container mt-5">
            <div data-aos="zoom-in"> <h1 className='text-dark text-center m-4' style={{ fontFamily: "Poppins", }}>Our Products</h1></div>
            <hr className='my-3 ' style={{
              color: 'rgb(206 65 65)',
              width: '300px',
              margin: 'auto',
              opacity: '1',
            }} />
            <div className="text-center  mt-4" data-aos="fade-down"><h6 className='  text-info' style={{letterSpacing:'0.1rem',fontFamily: "Poppins",}}>Primary, handpicked, quality spices traditionally pounded to give your food the best flavours every day.
            </h6></div>
          
            <div className="row ">
              {data.map((values, index) => {
                const { id, image, category, spice } = values;
                return (
                  <>
                    <div className="col-md-4" data-aos="fade-down">
                      <div className="card  mt-5">
                        <div className="card_img text-center">
                          <Link  to={`/product_page/munimji_masale/${spice}/${id}`}><img src={image} width='170' height='170' alt="product_image" /></Link>
                        </div>
                        <div className="card_info my-4">
                          <div><h6 className="text-center text-muted">{category}</h6></div>
                          <div className='text-center'><Link className="category-link h5 text-decoration-none" to={`/product_page/munimji_masale/${spice}/${id}`}>{spice}</Link></div>

                        </div>
                      </div>



                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </main>
      </section>
    </>
  )
}