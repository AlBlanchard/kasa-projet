import logo from '../assets/logo_kasa.png'
import '../styles/scss/components/Banner.scss'

function Banner() {
    return (
        <header className='header'>
            <img src={logo} alt='logo de Kasa' className='header__logo' />
            <nav className='nav'>
                <div className='nav__button nav__button--index'><span>ACCUEIL</span></div>
                <div className='nav__button nav__button--about'><span>A PROPOS</span></div>
            </nav>
        </header>
    )
}

export default Banner