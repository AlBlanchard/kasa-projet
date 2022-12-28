import '../styles/scss/pages/Lodgement.scss'
import { useParams } from 'react-router-dom'
import apiRes from '../datas/logements.json'
import Carousel from '../components/Carousel'
import Tags from '../components/Tags'
import Stars from '../components/Stars'
import React from 'react';

function Lodgement() {
    const { id } = useParams();
    const datas = apiRes.find((element) => { return element.id === id });

    return (
        <main>
            <section key={id}>
                <Carousel
                    pictures={datas.pictures}
                />

                <h2 className='lodgementTitle'>{datas.title}</h2>
                <p className='lodgementLocation'>{datas.location}</p>

                <Tags
                    tags={datas.tags}
                />

                <Stars
                    rating={datas.rating}
                />
            </section>
        </main>
    )
}

export default Lodgement
