import '../styles/scss/components/DropDown.scss'
import ddIcone from '../assets/icons/dropdown_icone.png'
import { useState } from 'react'

function DropDown({ title, text }) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        isOpen ? (
            // Vérifie si le texte reçu est un tableau afin de changer la structure(pour les équipements par exemple)
            Array.isArray(text) ? (
                <div className='dropdown'>
                    <div className='dropdown__header'>
                        <span className='title'>{title}</span >
                        <button onClick={() => setIsOpen(isOpen ? (isOpen = false) : (isOpen = true))}>
                            <img className='ddIcone ddIcone--open' src={ddIcone} alt='icone pour activer le dropdown'></img>
                        </button>
                    </div >

                    <ul className='dropdown__textContainer'>
                        {text.map(ddLine => (
                            <li className='ddLine'>{ddLine}</li>
                        ))}
                    </ul>
                </div >
            ) : (
                <div className='dropdown'>
                    <div className='dropdown__header'>
                        <span className='title'>{title}</span >
                        <button onClick={() => setIsOpen(isOpen ? (isOpen = false) : (isOpen = true))}>
                            <img className='ddIcone ddIcone--open' src={ddIcone} alt='icone pour activer le dropdown'></img>
                        </button>
                    </div >

                    <div className='dropdown__textContainer'>
                        <p id='ddText'>{text}</p>
                    </div>
                </div >
            )

        ) : (
            <div className='dropdown'>
                <div className='dropdown__header'>
                    <span className='title'>{title}</span>
                    <button onClick={() => setIsOpen(isOpen ? (isOpen = false) : (isOpen = true))}>
                        <img className='ddIcone ddIcone--close ddIcone' src={ddIcone} alt='icone pour activer le dropdown'></img>
                    </button>
                </div>
            </div>
        ))
}

export default DropDown