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
                            name={host.name}
                            picture={host.picture}
                        />
                    </div>
                </section>

                <section className='lodgementSection__descrAndEquip'>
                    <Dropdown
                        title='Description'
                        lodgDescription={datas.description}
                    />

                    <Dropdown
                        title='Equipements'
                        equipments={datas.equipments}
                    />
                </section>

            </section>
        </main>
    )
}

export default Lodgement
