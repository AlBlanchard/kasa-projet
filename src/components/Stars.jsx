import '../styles/scss/components/Stars.scss'
import React from 'react';
import starFull from '../assets/icons/star_full.png'
import starEmpty from '../assets/icons/star_empty.png'

function Stars(ratingObj) {
    const range = [1, 2, 3, 4, 5]
    const rating = ratingObj.rating



    return (
        <div className='starsContainer'>
            {range.map((stars) =>
                rating >= stars ?
                    <span key={stars.toString()}><img src={starFull} alt='étoile pleine'></img></span>
                    : stars <= range.length ?
                        <span key={stars.toString()}><img src={starEmpty} alt='étoile vide'></img></span>
                        : null
            )}
        </div>
    )
}

export default Stars