import React from 'react'
import {useState,useEffect} from 'react'

const UseEffectOne = () => {
    const [state, setstate] = useState(0)
    const handleClick = () => {
        setstate(state => state +1)
    };
    useEffect(() => {
        console.log("useEffect");
    } ,[] )
    return (
        <div>
            {console.log("rendering")}
            <h1>count : {state} </h1>
            <button onClick={handleClick} >+</button>
        </div>
    )
}

export default UseEffectOne
