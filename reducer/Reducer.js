import React from 'react'
import {useReducer} from 'react'
const initialState={
    number:0,
};
const reducer = (state,action) => {
   switch (action.type) {
       case "incriment":
           return {number: state.number+ action.value_1};
           
           break;
           case "dicriment":
            return {number :state.number-action.value_1};
            
            break;
       default:
           return state;
           break;
   }
};

const Reducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>count - {count.number} </h1>
            {
                count.number===10?null:<button onClick={()=>dispatch({
                    type:"incriment",
                    value_1:1
                })} >incriment</button>
            }
            {
                count.number===0?null:<button onClick={()=>dispatch({
                    type:"dicriment",
                    value_1:1
                })} >dicriment</button>
            }
        </div>
    )
}

export default Reducer
