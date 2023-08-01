import React from 'react'
import './Products.css'

const Products = () => {
    return (
        <div className='products'>
            <h2>Our Products</h2>
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
        </div>
    )
}

export default Products