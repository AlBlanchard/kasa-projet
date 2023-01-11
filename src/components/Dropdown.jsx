import '../styles/scss/components/DropDown.scss'
import ddIcone from '../assets/icons/dropdown_icone.png'
import { useState } from 'react'

function DropDown({ title, text, equipments }) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        isOpen ? (
            // Vérifie si le texte reçu est un tableau afin de changer la structure(pour les équipements par exemple)
            equipments ? (
                <div className='dropdown'>
                    <div className='dropdown__header'>
                        <span className='title'>{title}</span >
                        <button onClick={() => setIsOpen(isOpen ? (isOpen = false) : (isOpen = true))}>
                            <img className='ddIcone ddIcone--open' src={ddIcone} alt='icone pour activer le dropdown'></img>
                        </button>
                    </div >

                    <ul className='dropdown__textContainer'>
                        {equipments.map(ddLine => (
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
                        <p className='text'>{text}</p>
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