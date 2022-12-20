import '../styles/scss/components/Error.scss'

function Error() {
    return (
        <main>
            <section className='errorSection'>
                <div className='errorSection__container'>
                    <h1>404</h1>
                    <p><span>Oups! La page que&nbsp;</span><span>vous demandez n'existe pas.</span></p>
                </div>

                <span className='errorSection__backLink'>Retourner sur la page d’accueil</span>
            </section>
        </main>
    )
}

export default Error