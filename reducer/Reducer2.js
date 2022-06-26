import React, { useContext } from 'react'
import {ThemeContext} from '../App'
const Reducer2 = () => {
    const context =useContext(ThemeContext);
    return (
        <div>
            <h1>useRecucer 2</h1>
            <hr/>
            
            <button onClick={()=>context.dispatch({
                    type:"incriment",
                    value_1:1
                })} >incriment</button>
            
            
                <button onClick={()=>context.dispatch({
                    type:"dicriment",
                    value_1:1
                })} >dicriment</button>
            
        </div>
    )
}

export default Reducer2