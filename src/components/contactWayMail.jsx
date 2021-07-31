import React, { Component } from 'react';

class ContactWayMail extends Component {
    render() {
        return (
            <div className='bg-white shadow-xl rounded-xl pl-2 pr-4 flex items-center transform-gpu hover:scale-110 duration-300'>
                <img alt='error' className='h-20 w-20' src={require('../image/mail.svg').default} />
                <abbr title='AndPuQing@126.com' className='text-3xl font-extrabold ml-2 text-red-300 font-mono cursor-default'>Mail</abbr>
            </div>
        );
    }
}

export default ContactWayMail;