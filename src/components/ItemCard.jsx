// import React from "react";
// import styles from "../styles/ItemCard.module.css";
// import { useContext } from "react";
// import itemContext from "../context";

// function ItemCard({ name, price }) {
//   const value=useContext(itemContext);
  
//   const handleAdd = () => {
//     value.setTotal((prev)=>prev+price);
//     value.setItem((prev)=>prev+1)
//   };

//   const handleRemove = () => {
//     if(value.total>0){
//       value.setTotal((prev)=>{
//         return prev-price
        
//       })
//       value.setItem((prev)=>prev-1)
//     }
//   };

//   return (
//     <div className={styles.itemCard}>
//       <div className={styles.itemName}>{name}</div>
//       <div className={styles.itemPrice}>&#x20B9; {price}</div>
//       <div className={styles.itemButtonsWrapper}>
//         <button className={styles.itemButton} onClick={() => handleAdd()}>
//           Add
//         </button>
//         <button className={styles.itemButton} onClick={() => handleRemove()}>
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ItemCard;


import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import { itemContext } from "../context";  // Corrected import

function ItemCard({ name, price }) {
  const value = useContext(itemContext);

  const handleAdd = () => {
    value.setTotal((prev) => prev + price);
    value.setItem((prev) => prev + 1);
  };

  const handleRemove = () => {
    if (value.total > 0) {
      value.setTotal((prev) => prev - price);
      value.setItem((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={handleAdd}>
          Add
        </button>
        <button className={styles.itemButton} onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;