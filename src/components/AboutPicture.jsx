import aboutBanner from '../assets/about_banner.jpg'
import aboutBannerBig from '../assets/about_banner_big.jpg'
import '../styles/scss/components/AboutPicture.scss'

function AboutPicture() {
    return (
        <section className='aboutPicture'>
            <div className='aboutPicture__container'>
                <img className='picture picture--small' src={aboutBanner} alt='Paysage côtié avec des sapins dans une brume automnal' />
                <img className='picture picture--big' src={aboutBannerBig} alt='Paysage côtié avec des sapins dans une brume automnal' />
            </div>
        </section>
    )
}

export default AboutPicture