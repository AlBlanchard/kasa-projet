import logoMonochrome from '../assets/logo_kasa_monochrome.png'
import '../styles/scss/components/Footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoMonochrome} alt='logo de Kasa' className='footer__logo' />
            <div className='footer__text'>
                <span>© 2020 Kasa. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer