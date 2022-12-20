import logo from '../assets/logo_kasa.png'
import '../styles/scss/components/Header.scss'

function Header() {
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

export default Header