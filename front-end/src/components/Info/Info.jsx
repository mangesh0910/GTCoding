import React from 'react';
import './Info.css';
import { StudentIcon, VideoIcon } from '../../assets';

const Info = () => {
    return (
        <section id='info' className='dark-gray'>
            <div className='wrapper'>
                <div className='content-container'>
                    <div className='info-content'>
                        <img src={StudentIcon} />
                        <h3 className='std-count'>23000+</h3>
                        <h3 className='std-label'>Students</h3>
                    </div>
                    <div className='info-content'>
                        <img src={VideoIcon} />
                        <h3 className='std-count'>26 Hrs</h3>
                        <h3 className='std-label'>Video Content</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info