import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './css/product_page.css'
import OwlDemo2 from "./ProductSlider2";
import Items from './js/munimji_data.js'


export const Product_page2 = () => {
  const { product_name, product_id } = useParams();
  // const [product, setProduct] = useState();
  const product = {};


  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${product_name} - munimji masale`;

  });


  return (

    <>
      <section style={{ marginTop: '0px', }}>
        <div className="background_image"> <img src="https://pushpmasale.com/wp-content/uploads/2020/01/product_header_28_01_20.jpg" alt="bg_image" height='500' width='100%' /> </div>
        <main>
          <div className="container product_container mt-4">
            <div className="row">


              {Items.filter(item => item.spice === product_name).map(filteredItem => (
                <>
                  <div className="col-xl-3  col-lg-4  col-md-12 col-sm-12 col-xs-12">
                    <div className="product_image text-center" data-aos="fade-right" style={{
                      margin: '50px 0px',
                    }}> <img src={filteredItem.image} width='300' height='380' alt="item" style={{ objectFit: 'cover' }} />
                    </div>

                  </div>
                  <div className="offset-xl-2 col-xl-6  offset-lg-2  offset-md-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="product_info"
                      style={{
                        margin: '15px 0px',
                        fontFamily:'poppins',
                      }}>
                      <div data-aos="fade-left"><p  style={{  textShadow:"3px 3px 3px grey", fontSize: '45px', fontWeight: 'bold' }}>{product_name}</p></div>
                      <div className="usage">
                        <div><p className='h4'>Usage</p></div>
                        <p  style={{
                          lineHeight: '1.5',
                          letterSpacing: '0.03em',
                          fontSize:'15px',
                          fontFamily: 'arial',
                          textAlign:'justify',
                        }}>{filteredItem.description}
                        </p>
                      </div>
                      
                      <div class="hrline"></div>
                      {filteredItem.recipe ?
                        <>
                          <Accordion id="accordin">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header" style={{boxShadow:'none'}}
                            >
                              <Typography   ><div className="recipe">
                                <p className='h4'>Recipe</p></div></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {filteredItem.recipe.map((recipe) => {
                                  return <>
                                    <ul>
                                      <li className='text-info'>{recipe}</li>
                                    </ul>
                                  </>
                                })}
                                {filteredItem.Note ?
                                  <><div className="note">
                                    <p className='h6'>Note :</p>
                                    <p className='text-danger' style={{ fontSize: '14px' }}>{filteredItem.Note}</p>
                                  </div></> : null

                                }

                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </> : null
                      }

                     
                      {filteredItem.ingredient ?
                        <><div className="ingredient mt-3">
                          <p className='h4'>Ingredient</p>
                          {filteredItem.ingredient.map((ingredient) => {
                            return <>
                              <ul>
                                <li>{ingredient}</li>
                              </ul>
                            </>
                          })}
                        </div></> : null

                      }


                      <div className="package"
                        style={{
                          margin: '10px 0px',
                        }}>
                        <p className='h4'>Packaging Available In</p>
                        <div className='weightage' style={{
                          position: 'relative',
                          paddingRight: '30px',
                          marginTop: '5px',
                          fontSize:'15px',
                          fontFamily: 'arial',
                        }}>
                          <li className='text-danger'>{filteredItem.available[0]}</li>
                          <li className='text-danger'>{filteredItem.available[1]}</li>
                        </div>

                      </div>
                      {/* <div className=" buynow"  data-aos="flip-down"> <span>Buy Now</span></div> */}
                      <div class="hrline"></div>
                    </div>
                  </div>
                  <div><OwlDemo2 category_name={filteredItem.category} spice={filteredItem.spice}  /></div>
                </>
              ))
              }




            </div>
          </div>
        </main>
      </section>
    </>
  )
};
