import React, { Component } from 'react';

class ContactWayTim extends Component {
    render() {
        return (
            <div onClick={()=>{window.open('http://wpa.qq.com/msgrd?v=3&uin=1569540783&site=qq&menu=yes','_blank')}} className='bg-white shadow-xl rounded-xl pl-2 pr-4 flex items-center transform-gpu hover:scale-110 duration-300'>
                <img alt='error' className='h-20 w-20' src={require('../image/tim.svg').default} />
                <div className='text-3xl font-extrabold ml-2 text-blue-300 font-mono cursor-default'>TIM</div>
            </div>
        );
    }
}

export default ContactWayTim;