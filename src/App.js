import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
// import CustomContext from "./context";  // Corrected import
import { itemContext } from "./context";
import { useContext } from "react";
import Cart from "./components/cart";
function App() {
  const value=useContext(itemContext)
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      {/* <CustomContext> */}
        {value.togglecart?<Cart/>:(<><Navbar />
        <Items /></>)}
      {/* </CustomContext> */}
      
    </div>
  );
}
export default App;