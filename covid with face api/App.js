
// import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div>
//       {/* <BrowserRouter>
//      < Link1/>
//           <Routes>
//           <Route path="/" exact  element={<Home />} />
//           <Route path="/home" exact  element={<Home />} />
//           <Route path="/ami" element={<Contact />} />
//           <Route path="/about" element={<About />} />
          
//           </Routes>
//         </BrowserRouter> */}
//         <h1>hello</h1>
//     </div>
//       );
// }

// export default App;
import React from 'react'
import Covidd from './Covid/Covidd';

const App = () => {
  return (
    <div>
      < Covidd />
    </div>
  )
}

export default App
