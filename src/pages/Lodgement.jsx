import '../styles/scss/pages/Lodgement.scss'
import { useParams } from 'react-router-dom'
import apiRes from '../datas/logements.json'
import Carousel from '../components/Carousel'
import Tags from '../components/Tags'
import Stars from '../components/Stars'
import HostCard from '../components/HostCard'
import Dropdown from '../components/Dropdown'
import React from 'react';
import Error from '../pages/Error';

function Lodgement() {
    const { id } = useParams();
    const datas = apiRes.find((element) => { return element.id === id });

    return (
        datas ? (
            <main>
                <section className='lodgementSection' key={id}>
                    <section className='lodgementSection__carousel'>
                        <Carousel
                            pictures={datas.pictures}
                        />
                    </section>

                    <section className='lodgementSection__middle'>
                        <div className='titleAndLocation'>
                            <h2 className='titleAndLocation__title'>{datas.title}</h2>
                            <p className='titleAndLocation__location'>{datas.location}</p>

                            <Tags
                                tags={datas.tags}
                            />
                        </div>

                        <div className='hostAndStars'>
                            <Stars
                                rating={datas.rating}
                            />
                            <HostCard
                                name={datas.host.name}
                                picture={datas.host.picture}
                            />
                        </div>
                    </section>

                    <section className='lodgementSection__descrAndEquip'>
                        <Dropdown
                            title='Description'
                            text={datas.description}
                        />

                        <Dropdown
                            title='Equipements'
                            equipments={datas.equipments}
                        />
                    </section>

                </section>
            </main>
        ) : (
            <Error />
        )
    )
}

export default Lodgement
