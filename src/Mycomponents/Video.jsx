import React from 'react'
import video from './js/video'
import './css/video.css'
export const Video = () => {
    return (
        <>
            <div className="container-fluid" style={{ marginTop: '120px', }}>
                <div className="row">
                    <div className="text-center h2 my-3"><p style={{ letterSpacing: '0.1rem', }}>Recipe Videos</p></div>
                    {video.map((value) => {
                        return (
                            <>
                                <div className="video-card text-center col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                                    <div className="video-iframe py-4"><iframe width="360" height="250" src={value.frame} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                                    <div><p className="text-danger h4 " style={{ letterSpacing: '0.1rem', }}>{value.receipe_name}</p></div>
                                </div>

                            </>
                        )
                    })}


                </div>
                <div class="video-footer-logo  mt-5"> <hr class="line-right" /> <img  alt="" style={{ width:'220px', height:'30px', objectFit:'cover'}} src="https://yt3.ggpht.com/ytc/AKedOLQgvWw24Pu9THdlDSG8GhmPWUfLmspMjE2ry9jRIA=s176-c-k-c0x00ffffff-no-rj" /> <hr class="line-right" /> </div>
                <div class="widget widget_mc4wp_form_widget  text-center mt-5"> 
                   <p class="h5 widget-title">Never Miss a Recipe!</p>
                    <div class="mc4wp-form mc4wp-form-26"> 
                       <div class="mc4wp-form-fields">
                            <p>Join thousands of subscribers and get our best recipes delivered each week!</p>
                            <div class="fields-container">
                                <input type="email" name="email" value="" size="35" placeholder="Your Email Address"/><br/> 
                                <input type="submit" value="Subscribe" />
                            </div> 
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}
