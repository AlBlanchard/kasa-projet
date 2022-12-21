import '../styles/scss/components/Carousel.scss'
import arrow from '../assets/carousel_arrow.png'
import { useState } from 'react'

function Carousel(picturesObj) {
    const pictures = picturesObj.pictures;

    return (
        <div className='carousel'>
            <img src={pictures[0]} alt='Carroussel de photos du logement'></img>

            <div className='carousel__arrows'>
                <button className='arrow arrow--left'><img src={arrow} alt=''></img></button>
                <button className='arrow arrow--right'><img src={arrow} alt=''></img></button>
            </div>
        </div>
    )
}

export default Carousel