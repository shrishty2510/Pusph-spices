import React ,{useState} from 'react'
import {NavLink, Link } from "react-router-dom";
import './css/navbarmenu.css'

export const Navbarmenu = () => {
  const [value ,setValue] = useState('fas fa-bars');
    let category_name1="ctc spices";
    let category_name2="blended spices";
    let category_name3="pure spices";
    let category_name4="soya chunks";
    const click_function = () =>{
        value ==='fas fa-bars'? setValue('fa-solid fa-xmark') : setValue('fas fa-bars')
       
       
    }
  return (
    <section>
         <nav>
        <div className="logo">
            <img src="https://pushpmasale.com/wp-content/uploads/2019/10/main-logo.png" alt="logo" /> </div>
            <label for="btn" className="nav-icon">
                <span onClick={click_function} className={value}></span>
              </label> 
              <input type="checkbox" id="btn" /> 
       
        <ul className="main-ul">
           <li><NavLink  className="hover-underline-animation" to="/">Home</NavLink></li>
           <li><NavLink  className="hover-underline-animation" to="/about">About</NavLink> </li>
           <li>
            <label for="btn-1" className="show">Products +</label>
            <NavLink   className="hover-underline-animation  " to="#">Products</NavLink> 
            <input type="checkbox" name="" id="btn-1" />
            <ul className='second-ul'>
                <li className='second-li'>
                    <label for="btn-2" className="show">PUSHP MASALE +</label>
                    <NavLink to="" >PUSHP MASALE <span className="fa fa-plus"></span></NavLink> 
                    <input type="checkbox" name="" id="btn-2" />
                    <ul className='third-ul'>
                        <li><NavLink  to={`/pushp_product/${category_name1}/`} >CTC SPICES</NavLink> </li>
                        <li><NavLink  to={`/pushp_product/${category_name2}/`}>BLENDED SPICES</NavLink> </li>
                        <li><NavLink  to={`/pushp_product/${category_name3}/`}>PURE SPICES</NavLink> </li>
                        <li><NavLink   to={`/pushp_product/${category_name4}/`}>SOYA CHUNKS</NavLink> </li>
                        <li><NavLink  to="/quickFry">QUICK FRY</NavLink> </li>
                    </ul>
                </li>    
                <li><NavLink  to="/munimji_masale" >MUNIMJI MASALE</NavLink> </li>
                <li><NavLink   to="/pushp_category" >ALL PRODUCTS</NavLink>
                </li>
                
            </ul>
          </li> 
           <li><NavLink  className="hover-underline-animation" to="">Recipes</NavLink> </li>
           <li><NavLink  className="hover-underline-animation" to="">Buy Online</NavLink> </li>
           <li><NavLink  className="hover-underline-animation" to="">Careers</NavLink> </li>
           <li><NavLink  className="hover-underline-animation" to="/contact">Contact Us</NavLink> </li>
        </ul>
    </nav>
    </section>
  )
}
