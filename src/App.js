// import './App.css';
// import { useState } from 'react';
// import Items from './components/Items';
// import Navbar from './components/Navbar';
// import itemContext from './context';
// // import totalContext from './totalContext';
// import CustomContext from './context';

// function App() {
  
//   return (
//         <div className='App'>
//           <h2>Shopping Cart</h2>
//             <CustomContext>
//             <Navbar />
//             <Items />
//             </CustomContext>
              
//         </div>
//   );
// }
// export default App;


import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomContext from "./context";  // Corrected import

function App() {
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <CustomContext>
        <Navbar />
        <Items />
      </CustomContext>
    </div>
  );
}

export default App;