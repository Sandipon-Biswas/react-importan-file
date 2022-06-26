
import './App.css';
import React from 'react'
import {useReducer} from 'react'
import Clickcomponenet from './Clickcomponenet';
import Hover from './Hover';
import Home from './ContextAPI/Home';
// import ThemeContext from './ContextAPI/ThemeContext';
import Reducer from './Reducer/Reducer';
import ContextwithReducer from './Reducer/ContextwithReducer';


const initialState={
  number:1,
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

 export const ThemeContext=React.createContext(); 

function App() {
  const [count, dispatch] = useReducer(Reducer, initialState)
  // const user={
  //   name:"tahder manun",
  //   email:"gamil.com",
  //   address:"khulna"

  // }
  return (
    <div className="App">
      <h1>hello</h1>
      {
      // context api
      /* < ThemeContext.Provider value={user} >
      < Home/>
      </ThemeContext.Provider> */}
      //day 10
      <h1>count - {count.number} </h1>
      <hr/>
      <ThemeContext.Provider value={{
        dispatch:dispatch
      }} >

      </ThemeContext.Provider >
      < ContextwithReducer/>
     
    </div>
  );
}

export default App;
