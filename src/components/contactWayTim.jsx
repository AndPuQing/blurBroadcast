import React, { Component } from 'react';

class ContactWayTim extends Component {
    render() {
        return (
            <div onClick={()=>{window.open('http://wpa.qq.com/msgrd?v=3&uin=1569540783&site=qq&menu=yes','_blank')}} className='bg-white shadow-xl rounded-xl pl-2 pr-4 flex items-center transform-gpu hover:scale-110 duration-300'>
                <img className='h-16 w-16' src={require('../image/tim.svg').default} />
                <div className='text-2xl font-extrabold ml-3 text-blue-300 font-mono cursor-default'>TIM</div>
            </div>
        );
    }
}

export default ContactWayTim;