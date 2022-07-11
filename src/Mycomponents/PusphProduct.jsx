import React, { useEffect } from 'react'

import { useParams, Link } from 'react-router-dom';
import Categories from './js/pusphmasalecategories'


const PusphProduct = () => {
    const { category_name } = useParams();


    useEffect(() => {
        window.scrollTo(350, 350)
        document.title = `${category_name.toUpperCase()} - pusph masale`;

    }, [])



    return (
        <>
            <section>
                <div className="background_image"> <img src="https://pushpmasale.com/wp-content/uploads/2020/01/product_header_28_01_20.jpg" alt="bg_image" height='500' width='100%' /> </div>
                <main >
                    <div className="item_container" >
                        <div data-aos="zoom-in"> <h2 style={{ fontFamily: "Poppins", }} className='text-grey text-center'>{category_name.toUpperCase()}</h2></div>
                        <hr className='my-3 ' style={{
                            color: 'rgb(206 65 65)',
                            width: '200px',
                            margin: 'auto',
                            opacity: '1',
                        }} />
                        <div className="row mt-5" >
                            {Categories.filter(product => product.category === category_name.toUpperCase()).map(filteredItem => (
                                <>
                                    <div className="col-md-4" key={filteredItem.id} data-aos="fade-down" data-aos-easing="ease-in-out">
                                        <div className="card mb-5 ">
                                            <div className="card_img text-center">
                                                <Link to={`/product_page/pusph_masale/${filteredItem.spice}/${filteredItem.id}`} > <img src={filteredItem.image} width='170' height='170' alt="product_image" /></Link>
                                            </div>
                                            <div className="card_info my-4">
                                                <div><h6 className="text-center text-muted">{filteredItem.category}</h6></div>
                                                <div className='text-center'><Link className="category-link h4 text-decoration-none" to={`/product_page/pusph_masale/${filteredItem.spice}/${filteredItem.id}`}>{filteredItem.spice}</Link></div>

                                            </div>
                                        </div>



                                    </div>
                                </>

                            ))}

                        </div>
                    </div>
                </main>
            </section>
        </>
    )
};

export default PusphProduct;
