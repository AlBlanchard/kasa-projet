import '../styles/scss/components/Carousel.scss'
import arrow from '../assets/icons/carousel_arrow.png'
import { useState } from 'react'

function Carousel(picturesObj) {
    const pictures = picturesObj.pictures;
    let [pictureNbr, setPictureNbr] = useState(0)

    return (
        <div className='carousel'>
            <img src={pictures[pictureNbr]} alt='Carroussel de photos du logement'></img>

            <div className='carousel__arrows'>
                <button className='arrow arrow--left' onClick={() => (pictureNbr <= 0) ? (setPictureNbr(pictureNbr = (pictures.length - 1))) : (setPictureNbr(pictureNbr - 1))}><img src={arrow} alt=''></img></button>
                <button className='arrow arrow--right' onClick={() => (pictureNbr >= (pictures.length - 1)) ? (setPictureNbr(pictureNbr = 0)) : (setPictureNbr(pictureNbr + 1))}><img src={arrow} alt=''></img></button>
            </div>
        </div>
    )
}

export default Carousel