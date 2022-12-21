import logo from '../assets/logo_kasa.png'
import '../styles/scss/components/Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='logo de Kasa' className='header__logo' />
            <nav className='nav'>
                <Link to='/' className='nav__button nav__button--index'><span>ACCUEIL</span></Link>
                <Link to='/about' className='nav__button nav__button--about'><span>A PROPOS</span></Link>
            </nav>
        </header>
    )
}

export default Header