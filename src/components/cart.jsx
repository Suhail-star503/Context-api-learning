import React from 'react';
import { itemContext } from '../context';
import { useContext } from 'react';

const Cart = () => {
  const value = useContext(itemContext);
  
  const handleclick = () => {
    value.settogglecart((prev) => !prev);
  };
  const handleclicktoclear=()=>{
    value.setcart([])
    value.setTotal(0)
    value.setItem(0)
  }
  
  return (
    <div style={{ padding: "20px" }}>
      <div>
        <button 
          style={{ height: "30px", backgroundColor: "black", color: "white", marginBottom: "40px" }} 
          onClick={handleclick}
        >
          Go back to shopping page
        </button>
        {value.cart.length===0?null:<button 
          style={{ height: "30px", backgroundColor: "black", color: "white", marginBottom: "40px",margin:"40px" }} 
          onClick={handleclicktoclear}
        >
         Clear cart
        </button>}
        
        {value.cart.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>No item found in your cart</h2>
        ) : (
          <>
            {value.cart.map((item, index) => (
              <div 
                style={{ display: 'flex', justifyContent: "space-around", marginTop: "20px", backgroundColor: "black", color: "white",width:"100%" }} 
                key={index}
              >
                <h3>{item.name}</h3>
                <h4>{item.price}</h4>
                <h4>{item.quantity}</h4>
                <h4>{item.quantity * item.price}</h4>
              </div>
            ))}
            <div 
              style={{ backgroundColor: "darkgreen", margin: "30px", color: "white", display: 'flex', justifyContent: "center" }}
            >
              <h1>Total: {value.total}</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;