import React, { Component } from 'react';
import BlogNewPage from './components/blogNewPage';
import ContactWay from './components/contactWay';
import Copyright from './components/copyright';
import Introduce from './components/introduce';
import Reposlist from './components/reposlist';

class App extends Component {
    render() {
        return (
            <div className='w-full h-full flex flex-col mt-4'>
                <div className='flex flex-row w-full'>
                    {/* 介绍业 */}
                    <Introduce />
                    {/* 现在repo */}
                    <Reposlist />
                </div>
                <div className='w-full flex-row flex'>
                    <ContactWay />
                    <BlogNewPage />
                </div>
                <div className='w-full'>
                    <Copyright />
                </div>
            </div>
        );
    }

}

export default App;