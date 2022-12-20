import '../styles/scss/components/HomeCard.scss'

function HomeCard({ id, title, cover }) {
    return (
        <li className='homeCard' key={id}>
            <div className='homeCard__container'>
                <img src={cover} alt={`${title}`} />

                <div className='cardHoverText'>
                    <span>{title}</span>
                </div>
            </div>
        </li>
    )
}

export default HomeCard