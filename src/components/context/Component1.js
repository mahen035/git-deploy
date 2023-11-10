import { useState, createContext } from "react";
import React from 'react';
import Component2 from "./Component2";

export const UserContext = createContext();
function Component1(props) {
    const[user, setUser] = useState('John Doe')
    return (
        <div className="App">
            <UserContext.Provider value={user}>
                <h1>Component1</h1>
                <h2>Hi {user}</h2>
                <Component2 />
            </UserContext.Provider>
        </div>
    );
}

export default Component1;