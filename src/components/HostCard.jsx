import '../styles/scss/components/HostCard.scss'

function HostCard({ name, picture }) {
    const nameSplit = name.split(' ')
    const firstName = nameSplit[0]
    const lastName = nameSplit[1]

    return (
        <div className='hostCard'>
            <div className='hostCard__name'>
                <span className='firstName'>{firstName}</span>
                <span className='lastName'>{lastName}</span>
            </div>

            <div className='hostCard__photoContainer'>
                <img className='photo' src={picture} alt={name} />
            </div>
        </div>
    )
}

export default HostCard