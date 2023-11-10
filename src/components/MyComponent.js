import { useState } from "react";
function MyComponent(props){

    const[color, setColor] = useState('Red')
    const[car, setCar] = useState({
        make: 'Honda',
        model:'CRV',
        year:2010,
        color:'Blue'
    })
    return(
        <>
        <h1>This is a custom component. Hello {props.myName}</h1>
        <h2>My Favorite color is: {color}</h2>
        <button onClick={()=>setColor('Blue')}>Change Color</button>
        <h3>My {car.make} {car.model} from {car.year} is of {car.color} color</h3>
        <button onClick={()=>setCar(prevState=>{
            return{...prevState, color:'Silver'}
        })}>Update Car</button>
        <p>A new paragraph for this component</p>
        </>
    )
}

export default MyComponent;