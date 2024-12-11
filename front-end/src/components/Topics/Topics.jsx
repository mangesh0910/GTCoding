import React, { useState } from 'react';
import './Topics.css';
import { BG2, BG3, BG4, BG5, BG6, BG7, BGElement1 } from '../../assets';

const Topics = () => {
    const [currentImage, setCurrentImage] = useState(BG2)
    return (
        <section id='topics' className='black'>
            <div className='wrapper'>
                <h2>What will you learn?</h2>
                <div className='content-container'>
                    <ul>
                        <li onMouseEnter={() => setCurrentImage(BG2)}>What are frequencies?</li>
                        <li onMouseEnter={() => setCurrentImage(BG3)}>Using DAW</li>
                        <li onMouseEnter={() => setCurrentImage(BG4)}>Vocals Processing</li>
                        <li onMouseEnter={() => setCurrentImage(BG5)}>Mixing</li>
                        <li onMouseEnter={() => setCurrentImage(BG6)}>Mixing Console</li>
                        <li onMouseEnter={() => setCurrentImage(BG7)}>Mastering</li>
                    </ul>
                    <img className='topics-image' src={currentImage} alt='topics' />
                </div>
            </div>
        </section>
    )
}

export default Topics