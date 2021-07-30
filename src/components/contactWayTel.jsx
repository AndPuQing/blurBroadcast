import React, { Component } from 'react';

class ContactWayTel extends Component {
    render() {
        return (
            <div onClick={()=>{window.open('https://t.me/bluueso','_blank')}} className='bg-white shadow-xl rounded-xl pl-2 pr-4 flex items-center transform-gpu hover:scale-110 duration-300'>
                <img className='h-16 w-16' src={require('../image/telegram.svg').default} />
                <div className='text-2xl font-extrabold ml-3 text-purple-300 font-mono cursor-default'>Telegram</div>
            </div>
        );
    }
}

export default ContactWayTel;