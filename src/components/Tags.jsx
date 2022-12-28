import '../styles/scss/components/Tags.scss'
import React from 'react';

function Tags(tagsObj) {
    const tags = tagsObj.tags

    return (
        <ul className='tagsContainer'>
            {tags.map((tag) => (
                <li className='tagsContainer__tag' key={tag}>
                    <span>{tag}</span>
                </li>
            ))}
        </ul>
    )
}

export default Tags