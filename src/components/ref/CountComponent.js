import React, { useEffect, useRef, useState } from 'react';

function CountComponent(props) {
    const[inputVal , setInputVal] = useState('')

    const  count = useRef(0)

    useEffect(()=>{
        count.current = count.current+1
    })
    return (
        <div className="App">
            <input type='text' value ={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
            <h1>Render Count: {count.current} </h1>
        </div>
    );
}

export default CountComponent;