import React, { Component } from 'react';
class Introduce extends Component {
    render() {
        return (
            <div className="bg-gradient-to-tl from-green-400 to-blue-400 h-30 w-1/2 rounded-lg p-5 m-5 mr-0 shadow-lg">
                <div className='text-5xl font-bold text-white mb-3 mt-6 font-sertf'>
                    <p>Hi👋, I'm PuQing</p>
                </div>
                <div className='text-2xl font-bold text-white tracking-wide inline-block'>
                    I'm an undergraduate student studying Computer Science and Technology at the
                    <p className='italic inline'>&nbsp;Gay Electronic Science and Technology University
                    </p>&zwj;
                    (<a rel='noreferrer' className='bg-gradient-to-tl from-blue-200 to-blue-100 bg-growing-underline' href='https://www.guet.edu.cn/' target='_blank'>
                        GUET
                    </a>).
                    I started writing <a rel='noreferrer' className='bg-gradient-to-tl from-indigo-200 to-blue-200 bg-growing-underline' href='https://puqing.work' target='_blank'>the blog</a>
                    &nbsp;arouned 2020. I am also trying to learn alchemy, let's work towards the direction of training SOTA's taoist medicine.
                </div>
                <img className='absolute -top-0 left-10 h-16 w-16 rounded-full' src={require('../image/1627146470321.jpg').default} alt='error'></img>
            </div>
        );
    }
}

export default Introduce;