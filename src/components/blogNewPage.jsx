import React, { Component } from 'react';

class BlogNewPage extends Component {
    render() {
        console.log(this.state)
        return (
            <div className='h-20 ml-2 w-2/6 mr-5'>
                <img id='blogimg' alt='load fail' src={require('../image/1627146470321.jpg').default} className=' w-full rounded-lg shadow-xl -z-1 bg_move'/>
            </div>
        );
    }
    componentDidMount() {
        fetch("https://puqing.work/sitemap.xml")
            .then(response => {
                response.text().then(text => {
                    var pattern = new RegExp('https://puqing.work/p/[^/]+/', 'g')
                    // console.log(pattern.exec(text)[0])
                    this.setState({ imgsrc: pattern.exec(text)[0] + 'index.jpg' })
                })
            })
    }
    componentDidUpdate() {
        console.log(this.state.imgsrc)
        // document.getElementById('blogimg').src=this.state.imgsrc
    }
}

export default BlogNewPage;