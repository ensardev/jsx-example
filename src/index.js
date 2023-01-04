import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App(){
    const inputType = "number"
    const minValue = 3;

    return (
        <div>
            <input type="number" min={5} max={10}/>
            <br/>
            <input type={inputType} min={minValue} max={10}/>
        </div>

    )
}

root.render(<App/>)