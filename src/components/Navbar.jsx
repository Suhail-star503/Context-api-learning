import React, { useContext } from "react";
import styles from "../styles/Total.module.css";
import { itemContext } from "../context";  // Corrected import

function Navbar() {
  const value = useContext(itemContext);
  const handleclick = () => {
    value.settogglecart((prev) => !prev)
  }
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
      <button style={{ color: "black", backgroundColor: "skyblue", width: "70px", height: "30px" }} onClick={handleclick}>Cart</button>

      <button style={{ color: "black", backgroundColor: "skyblue", width: "70px", height: "30px" }} onClick={value.handleReset}>Reset</button>
    </div>
  );
}

export default Navbar;