import React from 'react';
import { useState, useEffect } from 'react';
function Counter(props) {
    const[count, setCount] = useState(0)

    useEffect(()=>{

       // console.log("UseEffect is called...")
       
            setCount(count=>count+1)
       
    },[])

    return (
        <div>
            <h1>I have rendered {count} times</h1>
        </div>
    );
}

export default Counter;