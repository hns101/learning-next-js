"use client"
import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (<>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
    </>)
};