import React, { Component } from 'react';

class Repo extends Component {

    render() {
        var data = this.props.data
        return (
            <div className='h-20 m-2 rounded-lg bg-white shadow-md pl-2 pt-2'>
                <a href={data.html_url} target='_blank' className='font-bold pt-2 text-lg truncate capitalize bg-gradient-to-r from-blue-100 to-blue-100 bg-growing-underline'>{data.name}</a>
                <div className='font-bold text-xs break-all capitalize text-blue-300'>{data.description}</div>
                <div className='font-bold text-xs break-all capitalize text-black inline-block align-text-bottom'>{data.language}</div>
            </div>
        );
    }
}

export default Repo;