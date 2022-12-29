import '../styles/scss/pages/Lodgement.scss'
import { useParams } from 'react-router-dom'
import apiRes from '../datas/logements.json'
import Carousel from '../components/Carousel'
import Tags from '../components/Tags'
import Stars from '../components/Stars'
import HostCard from '../components/HostCard'
import Dropdown from '../components/Dropdown'
import React from 'react';

function Lodgement() {
    const { id } = useParams();
    const datas = apiRes.find((element) => { return element.id === id });
    const host = datas.host

    return (
        <main>
            <section className='lodgementSection' key={id}>
                <section className='lodgementSection__carousel'>
                    <Carousel
                        pictures={datas.pictures}
                    />
                </section>

                <section className='lodgementSection__titleAndTag'>
                    <div className='titleAndLocation'>
                        <h2 className='titleAndLocation__title'>{datas.title}</h2>
                        <p className='titleAndLocation__location'>{datas.location}</p>
                    </div>

                    <Tags
                        tags={datas.tags}
                    />
                </section>

                <section className='lodgementSection__hostAndStars'>
                    <Stars
                        rating={datas.rating}
                    />
                    <HostCard
                        name={host.name}
                        picture={host.picture}
                    />
                </section>

                <section className='lodgementSection__descrAndEquip'>
                    <Dropdown
                        title='Description'
                        text={datas.description}
                    />

                    <Dropdown
                        title='Equipements'
                        text={datas.equipments}
                    />
                </section>

            </section>
        </main>
    )
}

export default Lodgement
