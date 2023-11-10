import React, { useRef } from 'react';

function InputRef(props) {
    const inputElement = useRef();

    return (
        <div className="App">
            <input type='text' ref={inputElement}/>
            <button onClick={()=>{
              inputElement.current.focus();  
            }}>Focus Input</button>
        </div>
    );
}

export default InputRef;