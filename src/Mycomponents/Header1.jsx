import {NavLink, Link } from "react-router-dom";
import "./css/header.css"
// import menu from './images/icons8-hamburger-64.png'
// import {
//  FaFacebookSquare,
//  FaInstagramSquare,
//  FaYoutubeSquare,  } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";





export const Header1 = () => {
   let category_name1="ctc spices";
   let category_name2="blended spices";
   let category_name3="pure spices";
   let category_name4="soya chunks";
   return (
      <>
         <nav className="navbar navbar-expand-lg header-middle">
            <div className="containerlogo "style={{backgroundColor:'white', opacity:'1'}} >
                  <img src="https://pushpmasale.com/wp-content/uploads/2019/10/main-logo.png" alt="logo" width="210" height="70"classNameName='' style={{opacity:'1',padding:'0px 6px',}}  />
            </div>
            <div className="container-fluid float-end">
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav  mb-lg-0">
                     <li className="nav-item">
                        <NavLink className="nav-link hover-underline-animation" aria-current="page"   to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link hover-underline-animation" to="/about">About</NavLink>
                     </li>
                     <li className="nav-item dropdown  hover-underline-animation">
                        <NavLink className="nav-link dropdown-toggle"  to="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Products
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{border:'none',}}>
                           <li className=''><Link className="dropdown-item" to="/pushp_category">Pusph Masale</Link>
                           </li>
                           <li  className=""><Link className="dropdown-item" to={`/pusph_product/${category_name1}/`} style={{border:'none',}} >Ctc Spices</Link></li>
                           <li  className=""><Link className="dropdown-item" style={{border:'none',}} to={`/pusph_product/${category_name2}/`}>Blended Spices</Link></li>
                           <li  className=""><Link className="dropdown-item"  style={{border:'none',}} to={`/pusph_product/${category_name3}/`}>Pure Spices</Link></li>
                           <li  className=""><Link className="dropdown-item" style={{border:'none',}} to={`/pusph_product/${category_name4}/`}>Soya Chunks</Link></li>
                          
                           <li><Link className="dropdown-item" to="/munimji_masale" style={{border:'none',}} >Munimji Masale</Link></li>
                           <li><Link className="dropdown-item" style={{border:'none',}} to="/quickFry">Quick Fry</Link></li>
                           
                        </ul>
                     </li>
                     
                     <li className="nav-item">
                        <NavLink className="nav-link hover-underline-animation"  to="/buynow">Buy Online</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link hover-underline-animation"  to="/contact">Contact Us</NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
};


{/* <li  className=""><Link className="dropdown-item" to={`/pusph_product/${category_name1}/`} style={{border:'none',}} >Ctc Spices</Link></li>
<li  className=""><Link className="dropdown-item" style={{border:'none',}} to={`/pusph_product/${category_name2}/`}>Blended Spices</Link></li>
<li  className=""><Link className="dropdown-item"  style={{border:'none',}} to={`/pusph_product/${category_name3}/`}>Pure Spices</Link></li>
<li  className=""><Link className="dropdown-item" style={{border:'none',}} to={`/pusph_product/${category_name4}/`}>Soya Chunks</Link></li> */}