import React from 'react'
import { useEffect } from 'react';
import $ from 'jquery'; 
import { useState,useRef} from 'react';
import { NavLink ,Link } from "react-router-dom";
import  { Product_page} from "./Product_page"

import "./css/pusphcategory.css"
import categories from './js/pusphmasalecategories'


export const Pusphcategory = () => {
  const [data, setData] = useState(categories);
  const [value,setValue] = useState('');
  const [value1,setValue1] = useState('');
  const [value2,setValue2] = useState('');
  const [value3,setValue3] = useState('');
  const [product,setProduct] = useState('PRODUCTS')
  const productsection = useRef(null);

  
  const gotoproductsection = () =>{
    window.scrollTo({top:productsection.current.offsetTop,behavior: 'smooth'});
  }

  const filterItem = (catItem) => {
    const result = categories.filter((currData) => {
      setProduct(catItem);
      if (catItem==="CTC SPICES"){
        setValue('active');setValue1('');setValue2('');setValue3('')
      }
      else if (catItem==="BLENDED SPICES"){
        setValue1('active');setValue('');setValue2('');setValue3('')
      }
      else if (catItem==="PURE SPICES"){
        setValue2('active');setValue1('');setValue('');setValue3('')
      }
      else if (catItem==="SOYA CHUNKS"){
        setValue3('active');setValue1('');setValue2('');setValue('')
      }
      // $('.category1').replaceWith('<NavLink>' + $('.category1').html() +'</NavLink>')
      return currData.category === catItem;

    });
    setData(result);
  }
 

  useEffect(() => {
    window.scrollTo(0,0)
    document.title = `PUSPH CATEGORY MASALE - pusph masale`;

  }, [])
 
  
  return (
    <>
    <section style={{ marginTop: '0px', }}>
      <div className="background_image"> <img src="https://pushpmasale.com/wp-content/uploads/2020/01/product_header_28_01_20.jpg" alt="bg_image" height='500' width='100%' /> </div>
        <h1 className='text-dark mx-2 mt-4'>Category</h1>

        <div class="flex-containerr  " data-aos="fade-up">
          
            <div onClick={gotoproductsection} className="" >
                <div><Link   className="category text-decoration-none" to="" onClick={() => filterItem('CTC SPICES')}> <img src="https://m.media-amazon.com/images/I/71iYBTkjVML._SL1500_.jpg" alt="ctc spices" width='200' /></Link></div>
               <div><Link id={value}  className="category-link h5 text-decoration-none " to="" onClick={() => filterItem('CTC SPICES')}>CTC SPICES</Link></div>
            </div>
            <div onClick={gotoproductsection} className=""  >
                <div><Link   className="category  text-decoration-none" to="" onClick={() => filterItem('BLENDED SPICES')}> <img src="https://m.media-amazon.com/images/I/71+ZE9HwQCL._AC_SX451_SY423_.jpg" alt="ctc spices"  width='200' /></Link></div>
               <div><Link   id={value1}  className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('BLENDED SPICES')}>BLENDED SPICES</Link></div>
            </div>
            <div onClick={gotoproductsection} className=""  >
                <div><Link   className="category text -decoration-none" to="" onClick={() => filterItem('PURE SPICES')}> <img src="https://m.media-amazon.com/images/I/71FHrd5vWLL._SX679_PIbundle-4,TopRight,0,0_AA679SH20_.jpg"  width='200' alt="pure spices" /></Link></div>
               <div><Link  id={value2}   className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('PURE SPICES')}>PURE SPICES</Link></div>
            </div>
            <div onClick={gotoproductsection} className="" >
                <div><Link   className="category  text-decoration-none" to="" onClick={() => filterItem('SOYA CHUNKS')}> <img src="https://m.media-amazon.com/images/I/81DY0qkwCJL._SL1500_.jpg" height="200" alt="soya chunks"  width='200' /></Link></div>
               <div><Link  id={value3}   className="category-link h5 text-decoration-none" to="" onClick={() => filterItem('SOYA CHUNKS')}>SOYA CHUNKS</Link></div>
            </div>
        
        </div>
        <main ref={productsection} >
          <div className="item_container" >
          <div data-aos="zoom-in"> <h2 style={{fontFamily: "Poppins",}} className='text-grey text-center'>{product}</h2></div>
            <hr className='my-3 ' style={{
              color: 'rgb(206 65 65)',
              width: '200px',
              margin: 'auto',
              opacity: '1',
            }} />
            <div className="row mt-5" >
              {data.map((values, index) => {
                const { id, image, category, spice } = values;
                return (
                  <>
                    <div className="col-md-4" key={index} data-aos="fade-down"  data-aos-easing="ease-in-out">
                      <div className="card mb-5 ">
                        <div className="card_img text-center">
                         <Link  to={`/product_page/pusph_masale/${spice}/${id}`} > <img src={image}  width='170' height='170' alt="product_image" /></Link>
                        </div>
                        <div className="card_info my-4">
                          <div><h6 className="text-center text-muted">{category}</h6></div>
                          <div className='text-center'><Link className="category-link h4 text-decoration-none" to={`/product_page/pusph_masale/${spice}/${id}`}>{spice}</Link></div>

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
