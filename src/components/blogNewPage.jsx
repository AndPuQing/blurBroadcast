import React, { Component } from 'react';
import analyze from 'rgbaster'
class BlogNewPage extends Component {
    render() {
        return (
            <div onClick={() => { window.open(this.state.linkaddr, '_blank') }} className='mt-5 ml-5 mr-5 sm:mt-0 h-28 sm:h-20 sm:ml-2 sm:w-2/6 sm:mr-5 overflow-hidden rounded-lg shadow-lg relative'>
                <img id='blogimg' alt='loading fail' className=' w-full bg_move' />
                <div id='text' className='text-white font-extrabold absolute text-5xl sm:text-4xl top-5 left-4 cursor-default'>最近文章</div>
            </div>
        );
    }
    componentDidMount() {
        // 获取博客最新文章
        fetch("https://blog.puqing.work/sitemap.xml")
            .then(response => {
                response.text().then(text => {
                    // console.log(text)
                    var pattern = new RegExp('https://blog.puqing.work/p/[^/]+/', 'g')
                    // console.log(pattern.exec(text))
                    var addr = pattern.exec(text)[0]
                    this.setState({ linkaddr: addr })
                    this.setState({ imgsrc: addr + 'index.jpg' })
                    // 获取图片平均颜色
                    const result = analyze(this.state.imgsrc)
                    result.then(
                        value => {
                            var color = value[0].color
                            //设置字体为补色
                            document.getElementById('text').style.color = ColorReverse(color)
                        }
                    )
                    document.getElementById('blogimg').src = this.state.imgsrc


                })
            })
    }

}
// RGB转换为16进制
function colorHex(color) {
    // RGB颜色值的正则
    var reg = /^(rgb|RGB)/;
    // var color = this;
    if (reg.test(color)) {
        var strHex = "0x";
        // 把RGB的3个数值变成数组
        var colorArr = color.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        // 转成16进制
        for (var i = 0; i < colorArr.length; i++) {
            var hex = Number(colorArr[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        return strHex;
    } else {
        return String(color);
    }
};
// 取补色
function ColorReverse(OldColorValue) {
    var ColorHex = colorHex(OldColorValue)
    var str = "000000" + (0xFFFFFF - ColorHex).toString(16);
    return '#' + str.substring(str.length - 6, str.length);
}
export default BlogNewPage;