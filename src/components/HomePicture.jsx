import homeBanner from '../assets/home_banner.jpg'
import homeBannerBig from '../assets/home_banner_big.jpg'
import '../styles/scss/components/HomePicture.scss'

function HomePicture() {
    return (
        <section className='homePicture'>
            <div className='homePicture__container'>
                <img className='picture picture--small' src={homeBanner} alt='Paysage côtié avec des sapins dans une brume automnal' />
                <img className='picture picture--big' src={homeBannerBig} alt='Paysage côtié avec des sapins dans une brume automnal' />

                <div className='hoverText'>
                    <span>Chez vous,&nbsp;</span>
                    <span>partout et ailleurs</span>
                </div>
            </div>
        </section>
    )
}

export default HomePicture