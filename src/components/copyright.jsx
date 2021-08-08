import React, { Component } from 'react';

class Copyright extends Component {
    render() {
        return (
            <div className='m-5 mt-10'>
                <div className='h-1 bg-gray-500 w-20 rounded-lg mb-5'></div>
                <p className='text-sm font-bold text-gray-600 cursor-default'>© 2020-2021 PuQing Site</p>
                <p className='text-xs font-semibold text-gray-300 mt-3 cursor-default'>Built with React</p>
                <p className='text-xs font-semibold text-gray-300 cursor-default'>Designed by PuQing</p>
            </div>
        );
    }
}

export default Copyright;