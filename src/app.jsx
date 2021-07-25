import React, { Component } from 'react';
import Introduce from './components/introduce';
import Reposlist from './components/reposlist';

class App extends Component {
    render() {
        return (
            <div className='h-full w-full flex'>
                <Introduce />
                <Reposlist />
            </div>
        );
    }
    
}

export default App;