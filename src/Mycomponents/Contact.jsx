
import React,{useEffect} from 'react'
import { AddressMap } from './AddressMap';

export const Contact = () => {
    useEffect(() => {
        window.scrollTo(0,0);
        document.title = `PUSPH BRAND - Contact Us`;

      }, []);

  return (
    <>
    <section className="contact" style={{marginTop:'100px',}}>
  
       <div style={{backgroundColor:'#fff',}}>

                <div class="contact3 px-4" >
                <div class="row no-gutters">
                    <div class="container" style={{boxShadow:' 0 0px 10px rgb(0 0 0 / 15%)',}}>
                    <div class="row">
                    <p className='text-info text-center m-2 '>Fill in the form and we will get back to you at the earliest!</p>
                        <div class="col-lg-5">
                        <div class="card-shadow">
                            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" class="img-fluid contact_img" alt="mainpic" />
                        </div>
                        </div>
                        <div class="col-lg-7">
                           
                        <div class="contact-box ml-3" >
                            <h1 class="font-weight-bold mt-2">Get In Touch</h1>
                            <form  class="mt-4" action="" method="POST" >
                            <div class="row">
                                <div class="col-lg-12">
                                <div class="form-group my-3">
                                    <input class="form-control" type="text" placeholder="Your Name" name='yourname'  />
                                </div>
                                </div>
                                <div class="col-lg-12">
                                <div class="form-group my-3">
                                    <input class="form-control" type="email" placeholder="Your Email Address"  name='email'  />
                                </div>
                                </div>
                                <div class="col-lg-12">
                                <div class="form-group my-3">
                                    <input class="form-control" type="number" placeholder="Mobile No."  name='mobile'  />
                                </div>
                                </div>
                                <div class="col-lg-12">
                                <div class="form-group my-3">
                                    <textarea class="form-control" rows="3" placeholder="Message"  name='message'  ></textarea>
                                </div>
                                </div>
                                <div class="col-lg-12">
                                <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                        <div class="col-lg-12">
                        <div class="card mt-4 border-0 mb-4">
                            <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <div class="card-body d-flex align-items-center c-detail pl-0">
                                <div class="mr-3 align-self-center px-3">
                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="mainpic1"  />
                                </div>
                                <div class="">
                                    <h6 class="font-weight-medium">Address</h6>
                                    <pre>
                                    19, Mahavar Nagar,<br/>
                                     Annapurna Main Road, Indore (M.P.) <br />
                                     452009,  LL: 0731-2481134
                                    </pre>
                                    {/* <p class="">Vijay Nagar
                                    <br /> Indore</p> */}
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="card-body d-flex align-items-center c-detail">
                                <div class="mr-3 align-self-center px-4">
                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="mainpic2"  />
                                </div>
                                <div class="">
                                    <h6 class="font-weight-medium">Phone</h6>
                                    <p class="">MOBILE: 9285108050<br />sales@pushpmasale.com
                                </p>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="card-body d-flex align-items-center c-detail">
                                <div class="mr-3 align-self-center px-2">
                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="mainpic3"  />
                                </div>
                                <div class="">
                                    <h6 class="font-weight-medium">Email</h6>
                                    <p class="">
                                    info.pushpmasale@gmail.com
                                    
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div class="container-fluid">
                <div class="row">
                    {/* <div className="col-xl-12 col-lg-12"><AddressMap/></div> */}
                   

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3710623772045!2d75.85450821400048!3d22.714445533475562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd08fe78cb0f%3A0x65afa9ac4dd2c1cf!2sPushp%20Brand%20Masale!5e0!3m2!1sen!2sin!4v1657874018909!5m2!1sen!2sin" width="600" height="450" style={{border:'0',}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
                </div>
                </div>
        </div>

   </section> 
    </>
  )
};



