import '../styles/scss/pages/Error.scss'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main>
            <section className='errorSection'>
                <div className='errorSection__container'>
                    <div className='errorTitle'>
                        <h2>404</h2>
                    </div>
                    <p><span>Oups! La page que&nbsp;</span><span>vous demandez n'existe pas.</span></p>
                </div>

                <Link to='/' className='errorSection__backLink'>Retourner sur la page d’accueil</Link>
            </section>
        </main>
    )
}

export default Error