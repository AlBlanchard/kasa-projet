import '../styles/scss/components/DropDown.scss'
import ddIcone from '../assets/icons/dropdown_icone.png'
import ddIconeBig from '../assets/icons/dropdown_icone_big.png'
import { useState } from 'react'

function DropDown({ title, text }) {
    let [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='dropdown'>
            <div className='dropdown__header'>
                <span className='title'>{title}</span>
                <button onClick={() => setIsOpen(isOpen ? (isOpen = false) : (isOpen = true))}>
                    <img className='ddIcone ddIcone--open ddIcone--small' src={ddIcone} alt='icone pour activer le dropdown'></img>
                    <img className='ddIcone ddIcone--open ddIcone--big' src={ddIconeBig} alt='icone pour activer le dropdown'></img>
                </button>
            </div>

            <div className='dropdown__textContainer'>
                <p>{text}</p>
            </div>
        </div>
    ) : (
        <div className='dropdown'>
            <div className='dropdown__header'>
                <span className='title'>{title}</span>
                <button onClick={() => setIsOpen(isOpen ? (isOpen = false) : (isOpen = true))}>
                    <img className='ddIcone ddIcone--close ddIcone--small' src={ddIcone} alt='icone pour activer le dropdown'></img>
                    <img className='ddIcone ddIcone--close ddIcone--big' src={ddIconeBig} alt='icone pour activer le dropdown'></img>
                </button>
            </div>
        </div>
    )
}

export default DropDown