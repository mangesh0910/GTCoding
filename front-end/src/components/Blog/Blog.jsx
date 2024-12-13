import React from 'react'
import './Blog.css'
import { Testimonial1, Testimonial2, Testimonial3 } from '../../assets';

const Blog = () => {
    return (
        <section id='blog' className='pink'>
            <div className='wrapper'>
                <h2 className='light'>Latest Posts</h2>
                <div className='content-container'>
                    <div className='post'>
                        <h3 className='tag'>Daw</h3>
                        <a href="#" >
                            <img className='post-image' src={Testimonial1} alt='Testimonial1' />
                        </a>
                        <a href='#' >
                            <h3 className='post-title'>How To Use Drum Machine in Logic Pro X</h3>
                        </a>
                    </div>
                    <div className='post'>
                        <h3 className='tag'>Mixing</h3>
                        <a href="#" >
                            <img className='post-image' src={Testimonial2} alt='Testimonial2' />
                        </a>
                        <a href='#' >
                            <h3 className='post-title'>How To Mix Guitars Effectively</h3>
                        </a>
                    </div>
                    <div className='post'>
                        <h3 className='tag'>Vox</h3>
                        <a href="#" >
                            <img className='post-image' src={Testimonial3} alt='Testimonial3' />
                        </a>
                        <a href='#' >
                            <h3 className='post-title'>The Real Power of Harmonies in Music Production</h3>
                        </a>
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='btn'>All Posts</button>
                </div>
            </div>
        </section>
    )
}

export default Blog