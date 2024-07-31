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
                            <div className='color'>
                                <p>#44444</p>
                                <span className='fontCol'></span>
                            </div>
                        </div>

                        <div className='content'>
                            <p>Background Color</p>
                            <div className='color'>
                                <p>#FFFFFF</p>
                                <span className='bgCol'></span>
                            </div>
                        </div>

                        <div className='content'>
                            <p>Button Color</p>
                            <div className='color'>
                                <p>#2072EF</p>
                                <span className='btnCol'></span>
                            </div>
                        </div>

                        <div className='content'>
                            <p>Button Border Color</p>
                            <div className='color'>
                                <p>#2072EF</p>
                                <span className='borderCol'></span>
                            </div>
                        </div>

                        <div className='content'>
                            <p>Button Mouseover Color</p>
                            <div className='color'>
                                <p>#0053D1</p>
                                <span className='mouseOverCol'></span>
                            </div>
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