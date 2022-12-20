import '../styles/scss/components/HomeCardSection.scss'
import HomeCard from './HomeCard';
import apiRes from '../datas/logements.json'
import React from 'react';

function HomeCardSection() {
    return (
        <section className='homeCardSection'>
            <ul className='homeCardSection__list'>
                {apiRes.map(({ id, title, cover }) => (
                    <React.Fragment key={id}>
                        <HomeCard
                            id={id}
                            title={title}
                            cover={cover}
                        />
                    </React.Fragment>
                ))}
            </ul>
        </section>
    )
}

export default HomeCardSection

