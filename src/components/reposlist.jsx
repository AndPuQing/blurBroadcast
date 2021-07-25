import React, { Component } from 'react';
import Repo from './repo';

class Reposlist extends Component {
    render() {
        return (
            <div className='h-30 w-1/2 rounded-lg p-5 m-5 bg-gradient-to-tr from-green-400 to-indigo-300 shadow-lg grid grid-cols-2'>
                {this.state.banners.map((element, index) => {
                    return (
                        <Repo key={index} data={element} />
                    )
                })}
            </div>
        );
    }
    componentDidMount() {
        fetch("https://api.github.com/users/AndPuQing/repos")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(data.slice(0, 6))
                this.setState({ banners: data.slice(0, 6) })
            })
    }
    constructor() {
        super();
        this.state = {
            banners: ['']
        }
    }
}

export default Reposlist;