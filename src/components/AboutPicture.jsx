import aboutBg from '../assets/about_bg.jpg'
import '../styles/scss/components/AboutPicture.scss'

function AboutPicture() {
    return (
        <section className='aboutPicture'>
            <div className='aboutPicture__container'>
                <img src={aboutBg} alt='Paysage côtié avec des sapins dans une brume automnal' />
            </div>
        </section>
    )
}

export default AboutPicture