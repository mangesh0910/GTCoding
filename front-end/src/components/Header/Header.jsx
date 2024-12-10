import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='wrapper'>
                <div className='cta'>
                    <h1 className='course-title'>Sound Design Masterclass</h1>
                    <p className='course-desc'>Learn the art of sound design</p>
                    <a className='btn-container' href='#'>Demo Lesson</a>
                </div>
            </div>
        </header>
    )
}

export default Header