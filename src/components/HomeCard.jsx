import '../styles/scss/components/HomeCard.scss'
import { Link } from 'react-router-dom'

function HomeCard({ id, title, cover }) {
    return (
        <li className='homeCard' key={id}>
            <Link to={`/logements/${id}`} className='homeCard__container'>
                <img src={cover} alt={`${title}`} />

                <div className='cardHoverText'>
                    <span>{title}</span>
                </div>
            </Link>
        </li>
    )
}

export default HomeCard