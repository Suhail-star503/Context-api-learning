import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import { itemContext } from "../context";

function ItemCard(props) {
  const value = useContext(itemContext);
  const { data } = props;

  const handleAdd = () => {
    value.setTotal((prev) => prev + data.price);
  
    const existingItem = value.cart.find((item) => item.id === data.id);
  
    let updatedCart;
    if (existingItem) {
      updatedCart = value.cart.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...value.cart, { ...data, quantity: 1 }];
      value.setItem((prev) => prev + 1); // Only increase item count when a new one is added
    }
  
    value.setcart(updatedCart);
  
    // Log updated cart instead of value.cart (which is stale)
   
    
  };
  

  const handleRemove = () => {
    const existingItem = value.cart.find((item) => item.id === data.id);

    if (!existingItem) return;

    value.setTotal((prev) => prev - data.price);

    if (existingItem.quantity === 1) {
      // Remove item completely
      const updatedCart = value.cart.filter((item) => item.id !== data.id);
      value.setcart(updatedCart);
      value.setItem((prev) => prev - 1);
    } else {
      // Decrease quantity
      const updatedCart = value.cart.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      value.setcart(updatedCart);
    }
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{data.name}</div>
      <div className={styles.itemPrice}>&#x20B9; {data.price}</div>
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
