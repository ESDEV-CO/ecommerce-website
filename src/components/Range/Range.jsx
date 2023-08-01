import React from 'react'
import './Range.css'

const Range = () => {
    return (
        <div className='range'>
            <h3>Browse the Range</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rem!</p>
            <div className="range_data">
                <div className="range_data_img">
                    <img src={require('../../assets/dining.png')} alt="dining" />
                    <h4>Dining</h4>
                </div>
                <div className="range_data_img">
                    <img src={require('../../assets/living-room.png')} alt="living" />
                    <h4>Living</h4>
                </div>
                <div className="range_data_img">
                    <img src={require('../../assets/bedroom.png')} alt="Bedroom" />
                    <h4>Bedroom</h4>
                </div>
            </div>
        </div>
    )
}

export default Range