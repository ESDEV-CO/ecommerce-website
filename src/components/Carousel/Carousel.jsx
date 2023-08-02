import React from 'react'
import './Carousel.css'
import { GoHorizontalRule } from 'react-icons/go'
import { BsArrowRight } from 'react-icons/bs'
import { ImRadioChecked } from 'react-icons/im'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Carousel = () => {
    return (
        <div className='carousel'>
            <div className="carousel_info">
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className='filled_btn carousel_btn'>Explore more</button>
            </div>
            <div className="carousel_data">
                <div className="carousel_slide">
                    <img src={require('../../assets/carousel1.png')} alt="slide1" />
                    <div className="slide_description">
                        <p>01 &nbsp; <GoHorizontalRule /> &nbsp; Bed Room</p>
                        <h4>Inner Peace</h4>
                        <button className='arrow_btn'><BsArrowRight /></button>
                    </div>
                </div>
                <div className="carousel_slide">
                    <img src={require('../../assets/carousel2.png')} alt="slide2" />
                    <div className="carousel_slide_radio">
                        <button className='slide_radio_active'>
                            <ImRadioChecked />
                        </button>
                        <button className='slide_radio'></button>
                        <button className='slide_radio'></button>
                        <button className='slide_radio'></button>
                    </div>
                </div>
                <div className="carousel_slide">
                    <img src={require('../../assets/carousel3.png')} alt="slide3" />

                </div>
                <button className='next_btn'><MdOutlineKeyboardArrowRight /></button>
            </div>
        </div>
    )
}

export default Carousel