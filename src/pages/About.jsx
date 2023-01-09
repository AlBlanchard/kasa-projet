import '../styles/scss/pages/About.scss'
import AboutPicture from '../components/AboutPicture'
import DropDown from '../components/Dropdown'
import apiResAbout from '../datas/about.json'
import React from 'react';

function About() {
    return (
        <main>
            <AboutPicture />
            <section className='aboutSection'>
                {apiResAbout.map(({ title, text }) => (
                    <React.Fragment key={title}>
                        <DropDown
                            title={title}
                            aboutText={text}
                        />
                    </React.Fragment>
                ))}
            </section>
        </main>
    )
}

export default About