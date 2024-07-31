import React from 'react'
import './Modal.css'

const Modal = ({ closeModal }) => {

    const handleModalClick = (e) => {
        e.stopPropagation();
      };
    return (
        <>
            <div onClick={() => closeModal(false)} className='backgroundModal'>
                <div className='modal' onClick={handleModalClick}>
                    <div className='header'>
                        <h3>Theme Color</h3>
                        <button>Change Theme</button>
                    </div>
                    <div className='body'>
                        <div className='content'>
                            <p>Font Color</p>
                            <p>#44444</p>
                        </div>

                        <div className='content'>
                            <p>Background Color</p>
                            <p>#FFFFFF</p>
                        </div>

                        <div className='content'>
                            <p>Button Color</p>
                            <p>#2072EF</p>
                        </div>

                        <div className='content'>
                            <p>Button Border Color</p>
                            <p>#2072EF</p>
                        </div>

                        <div className='content'>
                            <p>Button Mouseover Color</p>
                            <p>#0053D1</p>
                        </div>
                    </div>
                    <div className='footer'>
                        <button onClick={() => closeModal(false)} className='cancel'>Cancel</button>
                        <button className='save'>Save</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Modal