import React, { Component } from 'react';

class ContactWayGit extends Component {
    render() {
        return (
            <div onClick={()=>{window.open('https://github.com/AndPuQing','_blank')}} className='bg-white shadow-xl rounded-xl pl-2 pr-4 flex items-center transform-gpu hover:scale-110 duration-300'>
                <img alt='error' className='h-20 w-20' src={require('../image/github-outline.svg').default} />
                <div className='text-3xl font-extrabold ml-2 text-gray-300 font-mono cursor-default'>GitHub</div>
            </div>
        );
    }
}

export default ContactWayGit;