import { useParams } from 'react-router-dom'
import apiRes from '../datas/logements.json'
import Carousel from '../components/Carousel'
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
            </section>
        </main>
    )
}

export default Lodgement
