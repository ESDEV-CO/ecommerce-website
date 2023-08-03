import React from 'react'
import './Share.css'

const Share = () => {
    return (
        <div className='share'>
            <h5>Share your setup with</h5>
            <h2>#FuniroFurniture</h2>
            <div className="share_images">
                <div className='column1'>
                    <div className='first_child'>
                        <img src={require('../../assets/share1.png')} alt="share image" />
                        <img src={require('../../assets/share2.png')} alt="share image" />
                    </div>
                    <div className='second_child'>
                        <img src={require('../../assets/share6.png')} alt="share image" />
                        <img src={require('../../assets/share7.png')} alt="share image" />
                    </div>
                </div>
                <div className='column2'><img src={require('../../assets/share3.png')} alt="share image" /></div>
                <div className='column1'>
                    <div className='first_child'>
                        <img src={require('../../assets/share4.png')} alt="share image" />
                        <img src={require('../../assets/share5.png')} alt="share image" />
                    </div>
                    <div className='second_child'>
                        <img src={require('../../assets/share8.png')} alt="share image" />
                        <img src={require('../../assets/share9.png')} alt="share image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share