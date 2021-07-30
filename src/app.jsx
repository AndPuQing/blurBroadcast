import React, { Component } from 'react';
import ContactWay from './components/contactWay';
import Introduce from './components/introduce';
import Reposlist from './components/reposlist';

class App extends Component {
    render() {
        return (
            <div className='w-full h-full flex flex-col'>
                <div className='flex flex-row w-full'>
                    {/* 介绍业 */}
                    <Introduce />
                    {/* 现在repo */}
                    <Reposlist />
                </div>
                <div className='w-full flex-row'>
                    <ContactWay />
                </div>
            </div>
        );
    }

}

export default App;