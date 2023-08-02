import React from 'react'
import './Products.css'

const Products = () => {
    return (
        <div className='products'>
            <h2>Our Products</h2>
            <div className="all_products">
                <div className="product_info">
                    <img src={require('../../assets/sylthe.png')} alt="product" />
                    <div className="product_info_des">
                        <h4>Syltherine</h4>
                        <h6>Stylish cafe chair</h6>
                        <div className="side_by_side">
                            <h5>Rp 2.500.000</h5>
                            <s>Rp 3.500.000</s>
                        </div>
                    </div>
                </div>
                <div className="product_info">
                    <img src={require('../../assets/leviosa.png')} alt="product" />
                    <div className="product_info_des">
                        <h4>Leviosa</h4>
                        <h6>Stylish cafe chair</h6>
                        <div className="side_by_side">
                            <h5>Rp 2.500.000</h5>
                        </div>
                    </div>
                    <div className="product_info_cart">
                    </div>
                </div>
                <div className="product_info">
                    <img src={require('../../assets/lolito.png')} alt="product" />
                    <div className="product_info_des">
                        <h4>Lolito</h4>
                        <h6>Luxury big sofa </h6>
                        <div className="side_by_side">
                            <h5>Rp 7.000.000</h5>
                            <s>Rp 14.000.000</s>
                        </div>
                    </div>
                </div>
                <div className="product_info">
                    <img src={require('../../assets/respira.png')} alt="product" />
                    <div className="product_info_des">
                        <h4>Respira</h4>
                        <h6>Outdoor bar table and stool</h6>
                        <div className="side_by_side">
                            <h5>Rp 500.000</h5>
                        </div>
                    </div>
                </div>
                <div className="product_info">
                    <img src={require('../../assets/grifo.png')} alt="product" />
                    <div className="product_info_des">
                        <h4>Grifo</h4>
                        <h6>night Lamp</h6>
                        <div className="side_by_side">
                            <h5>Rp 1.500.000</h5>
                        </div>
                    </div>
                </div>
                <div className="product_info">
                    <img src={require('../../assets/muggo.png')} alt="product" />
                    <div className="product_info_des">
                        <h4>Muggo</h4>
                        <h6>Small mug</h6>
                        <div className="side_by_side">
                            <h5>Rp 150.000</h5>
                        </div>
                    </div>
                </div>
                <div className="product_info">
                    <img src={require('../../assets/pingky.png')} alt="product" />
                    <div className="product_info_des">
                        <h4>Pingky</h4>
                        <h6>cute bed set</h6>
                        <div className="side_by_side">
                            <h5>Rp 7.000.000</h5>
                            <s>Rp 14.000.000</s>
                        </div>
                    </div>
                </div>
                <div className="product_info">
                    <img src={require('../../assets/potty.png')} alt="product" />
                    <div className="product_info_des">
                        <h4>Potty</h4>
                        <h6>Minimalist flower pot</h6>
                        <div className="side_by_side">
                            <h5>Rp 500.000</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products