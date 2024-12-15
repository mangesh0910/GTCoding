import React from 'react';
import './Testimonials.css';
import { Blog1, Blog2, Blog3 } from '../../assets';

const Testimonials = () => {
    return (
        <section id='testimonials' className='dark-gray'>
            <div className='wrapper'>
                <h2>What our students say?</h2>
                <div className='content-container'>
                    <div className='testimonial'>
                        <div className='test-image'>
                            <img src={Blog1} alt='blog1' />
                        </div>
                        <p className='name'>Peter Adams</p>
                        <p className='cmp-name'>Facebook</p>
                        <p className='details'>This is a great course. I got to learn a lot.</p>
                    </div>
                    <div className='testimonial'>
                        <div className='test-image'>
                            <img src={Blog2} alt='blog2' />
                        </div>
                        <p className='name'>Rober Fox</p>
                        <p className='cmp-name'>Google</p>
                        <p className='details'>I got to learn a lot about Music Production with this course. Thanks :)</p>
                    </div>
                    <div className='testimonial'>
                        <div className='test-image'>
                            <img src={Blog3} alt='blog3' />
                        </div>
                        <p className='name'>Emily Smith</p>
                        <p className='cmp-name'>Instagram</p>
                        <p className='details'>Awesome! Great job!!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials