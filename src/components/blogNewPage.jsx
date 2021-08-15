import React, { Component } from 'react';

class BlogNewPage extends Component {
    render() {
        console.log(this.state)
        return (
            <div onClick={() => { window.open(this.state.linkaddr, '_blank') }} className='h-20 ml-2 w-2/6 mr-5 overflow-hidden rounded-lg shadow-lg relative'>
                <img id='blogimg' alt='loading fail' className=' w-full bg_move' />
                <div className='text-white font-extrabold absolute text-4xl top-5 left-4 cursor-default'>最近文章</div>
            </div>
        );
    }
    componentDidMount() {
        // 获取博客最新文章
        fetch("https://blog.puqing.work/sitemap.xml", {
            mode='no-cors'
        })
            .then(response => {
                response.text().then(text => {
                    var pattern = new RegExp('https://blog.puqing.work/p/[^/]+/', 'g')
                    // console.log(pattern.exec(text)[0])
                    var addr = pattern.exec(text)[0]
                    this.setState({ linkaddr: addr })
                    this.setState({ imgsrc: addr + 'index.jpg' })
                })
            })
    }
    componentDidUpdate() {
        console.log(this.state.imgsrc)
        document.getElementById('blogimg').src = this.state.imgsrc
    }
}

export default BlogNewPage;