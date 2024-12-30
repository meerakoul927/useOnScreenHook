import React from 'react'
import ReactDOM from 'react-dom';
import Element from './src/components/Elements/Element';

function App() {
    let arr = [];
    for(let i = 0 ; i < 20 ; i++){
         arr.push(<Element
           value = {i}
           key = {i}
         />)
    }
    return arr;
 
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);