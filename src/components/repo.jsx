import React, { Component } from 'react';

class Repo extends Component {

    render() {
        var data = this.props.data
        return (
            <div className='h-20 m-2 rounded-lg bg-white shadow-md'>
                <div className='font-bold pt-2 pl-2 text-lg truncate capitalize text-blue-500'>{data.name}</div>
                <div className='font-bold pl-2 text-sm truncate capitalize text-blue-300'>{data.description}</div>

            </div>
        );
    }
}

export default Repo;