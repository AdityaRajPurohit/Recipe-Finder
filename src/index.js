import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Search from './Serach';
const App = () =>{
    return (
        <div>
            <Heading />
            <Search />
        </div>
    );
}

ReactDOM.render(<App/>,document.querySelector('#root'));