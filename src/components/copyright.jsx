import React, { Component } from 'react';

class Copyright extends Component {
    render() {
        return (
            <div className='m-5 mt-10'>
                <div className='h-1 bg-gray-500 w-20 rounded-lg mb-5'></div>
                <p className='text-sm font-bold text-gray-600 cursor-default'>© 2020-2021 PuQing Site</p>
                <div className='flex flex-row'>
                    <a target='_blank' href='https://stats.uptimerobot.com/RKNGPSGkAY' className='text-sm font-semibold text-gray-300 cursor-default'>System State</a>
                    <span className="animate-ping duration-500 to-gray-50 transition ml-2 self-center rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <p className='text-xs font-semibold text-gray-300 mt-3 cursor-default'>Built with React</p>
                <p className='text-xs font-semibold text-gray-300 cursor-default'>Designed by PuQing</p>
            </div>
        );
    }
}

export default Copyright;