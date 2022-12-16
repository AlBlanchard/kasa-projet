import bg from '../assets/section1_bg.jpg'
import '../styles/scss/components/HomePicture.scss'

function HomePicture() {
    return (
        <section className='homePicture'>
            <div className='homePicture__container'>
                <img src={bg} alt='Paysage côtié avec des sapins dans une brume automnal' />

                <div className='hoverText'>
                    <span>Chez vous,&nbsp;</span>
                    <span>partout et ailleurs</span>
                </div>
            </div>
        </section>
    )
}

export default HomePicture