import React, { Component } from 'react';
import Repo from './repo';

class Reposlist extends Component {
    render() {
        return (
            <div className='sm:w-1/2 rounded-lg pl-5 pr-5 pb-2 pt-2 m-5 bg-gradient-to-tr from-green-400 via-blue-200 to-pink-200 shadow-lg'>
                <div className='font-bold text-3xl text-blue-700 ml-2'>GitHub Project</div>
                <div className='grid grid-cols-2'>
                    {this.state.banners.map((element, index) => {
                        return (
                            <Repo key={index} data={element} />
                        )
                    })}
                </div>
            </div>
        );
    }
    // 在渲染前生命周期
    componentDidMount() {
        // 获取repos信息，按照最后push的时间排序
        fetch("https://api.github.com/users/AndPuQing/repos?sort=pushed")
            .then(res => res.json())
            .then(data => {
                // 读取前六个

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