import React, { Component } from 'react';
class Introduce extends Component {
    render() {
        return (
            <div className="bg-gradient-to-tl from-green-400 to-blue-400 h-30 w-1/2 rounded-lg p-5 m-5">
                <div className='text-5xl font-bold text-white mb-3 mt-6 font-sertf'>
                    <p>Hi, I'm PuQing</p>
                </div>
                <div className='text-xl font-bold text-white tracking-wide'>
                    <p>I write interesting Bug. I am an alchemist from the magical of China.
                        Now studying at a <a className='bg-gradient-to-tl  from-blue-200 to-blue-100 bg-growing-underline' href='https://www.guet.edu.cn/' target='_blank'>
                            Gay Electronic Science and Technology University</a>. This is my first open source project.There may be many questions.</p>



                </div>
                <img  className='absolute -top-0 left-10 h-16 w-16 rounded-full' src={require('../image/1627146470321.jpg').default} alt='error'></img>
            </div>
        );
    }
}

export default Introduce;