import React, { Component } from 'react';

class Introduce extends Component {
    render() {
        return (
            <div className="m-4 bg-gradient-to-tl from-green-400 to-blue-400 h-30 w-1/2 rounded-lg p-5">
                <div className='text-5xl font-bold text-white mb-2'>
                    <p>Hi, I'm PuQing</p>
                </div>
                <div className='text-xl font-bold text-white'>
                    I write interesting Bug. I am an alchemist from the magical of China.
                    Now studying at a&nbsp;
                    <a className='underline' href='https://www.guet.edu.cn/' target='_blank'>
                        <div className='border-2'>Gay Electronic Science and Technology University</div></a>
                    .
                    This is my first open source project.There may be many questions.

                </div>
            </div>
        );
    }
}

export default Introduce;