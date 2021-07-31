import React, { Component } from 'react';

class ContactWayTel extends Component {
    render() {
        return (
            <div onClick={()=>{window.open('https://t.me/bluueso','_blank')}} className='bg-white shadow-xl rounded-xl pl-2 pr-4 flex items-center transform-gpu hover:scale-110 duration-300'>
                <img alt='error' className=' h-20 w-20' src={require('../image/telegram.svg').default} />
                <div className='text-3xl font-extrabold ml-2 text-purple-300 font-mono cursor-default'>Telegram</div>
            </div>
        );
    }
}

export default ContactWayTel;