import React, { useEffect, useRef, useState } from 'react';

function StateChange(props) {
    const[inputVal, setInputVal] = useState('')
    const previousInputVal = useRef('')

    useEffect(()=>{
        console.log("Input Value: "+inputVal)
        previousInputVal.current = inputVal
    })

    return (
        <div className='App'>
            <input
                type='text'
                value={inputVal}
                onChange={(e)=>setInputVal(e.target.value)}
            /> 
            <h3> Current Value: {inputVal}</h3>
            <h3>Previous Value: {previousInputVal.current}</h3>   
        </div>
    );
}

export default StateChange;