import React, { Component } from 'react';
// 渲染每个repo
class Repo extends Component {
    render() {
        // 别问，问就手敲的
        var languagedata = {
            "C": "#555555",
            "C++": "#f34b7d",
            "C#": "#178600",
            "Jupyter Notebook": "#da5b0b",
            "Objective-C": "#438eff",
            "HTML": "#e34c26",
            "SCSS": "#c6538c",
            "Vue": "#41b883",
            "Python": "#3572a5",
            "Kotlin": "a97bff",
            "Java": "#b07219",
            "JavaScript": "#f1e05a",
            "TypeScript": "#2b7489",
            "Ruby": "#701516",
            "Dart": "#00b4ab",
            "CSS": "#563d7c",
            "PHP": "#4f5d95",
            "null": "#ffffff",
        }
        var data = this.props.data
        return (
            <div className='h-20 m-2 rounded-lg bg-white shadow-md pl-2 pt-2'>
                <a href={data.html_url} target='_blank' rel='noreferrer' className='font-bold text-lg truncate capitalize bg-gradient-to-r from-green-200 to-blue-200 bg-growing-underline'>{data.name}</a>
                <div className='font-bold text-xs text-blue-300 truncate'>{data.description}</div>
                <div className='flex flex-rol items-center'>
                    <span className="h-6 flex items-center">
                        <svg className="flex-shrink-0 h-3 w-3" style={{ color: languagedata[data.language] }} viewBox="0 0 80 80" fill="currentColor">
                            <ellipse ry="40" rx="40" cy="40" cx="40" />
                        </svg>
                    </span>
                    <div className='font-bold text-xs capitalize text-black ml-1'>{data.language}</div>
                </div>
            </div>
        );
    }
}

export default Repo;